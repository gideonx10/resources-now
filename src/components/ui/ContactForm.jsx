"use client";

import { useState } from "react";
import { projectTypes } from "@/src/data/site";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    });
    setStatus(response.ok ? "sent" : "error");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company / Business</label>
          <input id="company" name="company" type="text" placeholder="Your company" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" placeholder="your@email.com" required />
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
      {status === "sent" ? <p className="form-status success">Project brief sent.</p> : null}
      {status === "error" ? <p className="form-status">Something went wrong. Please email mail@resourcesnow.in.</p> : null}
    </form>
  );
}
