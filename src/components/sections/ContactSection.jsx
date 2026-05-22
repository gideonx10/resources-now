import ContactForm from "../ui/ContactForm";
import RevealWrapper from "../ui/RevealWrapper";
import SectionLabel from "../ui/SectionLabel";
import { contactDetails } from "@/src/data/site";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const iconMap = { MapPin, Phone, Mail, Clock };

export default function ContactSection({ fullPage = false }) {
  return (
    <section id="contact" className={fullPage ? "contact-page" : ""}>
      <div className="container">
        <RevealWrapper>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="section-heading">Start a <em>Project</em></h2>
        </RevealWrapper>
        <div className="contact-inner">
          <RevealWrapper>
            {contactDetails.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div className="contact-detail" key={item.label}>
                  <div className="contact-icon-box"><IconComponent size={18} /></div>
                  <div>
                    <div className="contact-lbl">{item.label}</div>
                    <div className="contact-val">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <ContactForm />
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
