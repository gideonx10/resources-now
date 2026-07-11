"use client";

import { useRef, useState } from "react";
import { projectTypes } from "@/src/data/site";
import Toast from "./Toast";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(null);
  const timeoutRef = useRef(null);

  function showToast(type, title, desc) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setToast({ id: Date.now(), type, title, desc });
    timeoutRef.current = setTimeout(() => setToast(null), 5000);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    const formData = new FormData(form);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    });
    setStatus(response.ok ? "sent" : "error");
    if (response.ok) {
      form.reset();
      showToast("success", "Project brief sent", "We'll get back to you within 24 hours.");
    } else {
      showToast("error", "Something went wrong", "Please email mail@resourcesnow.in directly.");
    }
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company / Business <span className="optional-tag">(Optional)</span></label>
            <input id="company" name="company" type="text" placeholder="Your company" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="projectType">What are you building?</label>
          <select id="projectType" name="projectType" required defaultValue="">
            <option value="" disabled>Select project type</option>
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Tell us more</label>
          <textarea id="message" name="message" placeholder="Describe your system requirements, goals, and timeline..." required />
        </div>
        <p className="form-note">We respond within 24 hours. No spam, no sales calls unless you want them.</p>
        <button className="btn-primary full" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Project Brief →"}
        </button>
      </form>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}
