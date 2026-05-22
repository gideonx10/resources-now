import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">
              <div className="footer-logo-mark">RN</div>
              Resources Now
            </div>
            <div className="footer-desc">AI-powered digital engineering company based in Surat. We build scalable software systems, intelligent workflows, and enterprise infrastructure for modern businesses.</div>
            <div className="footer-location">Adajan, Surat · Gujarat, India</div>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              <Link href="/services">Web Platforms</Link>
              <Link href="/services">SaaS Engineering</Link>
              <Link href="/ai-solutions">AI Integrations</Link>
              <Link href="/services">Workflow Automation</Link>
              <Link href="/services">Mobile Systems</Link>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <Link href="/about">About Us</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/process">Our Process</Link>
              <Link href="/stack">Tech Stack</Link>
              <Link href="/careers">Careers</Link>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-links">
              <a href="mailto:mail@resourcesnow.in">mail@resourcesnow.in</a>
              <a href="tel:+917041139115">+91 70411 39115</a>
              <Link href="/contact">Start a Project</Link>
              <a href="https://resourcesnow.in">resourcesnow.in</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 <span className="footer-blue">Resources Now</span>. All rights reserved.</div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
