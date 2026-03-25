"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';

export default function ContactUsPage() {
  const handleSubmit = (data: Record<string, string>) => {
    console.log("Form submitted:", data);
    // Implement actual form submission logic here (e.g., API call)
    alert("Thank you for your message!");
  };

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="medium"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/#about" },
              { name: "Inventory", id: "/inventory" },
              { name: "Contact", id: "/contact-us" }
            ]}
            brandName="Silvercreek Ranch"
          />
        </div>

        <div id="contact-form-section" data-section="contact">
          <ContactSplitForm
            title="Get in Touch with Silvercreek Ranch"
            description="Whether you're looking to expand your herd, inquire about our breeding program, or schedule a ranch visit, we're here to help. Reach out to us directly."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Your Email", required: true },
              { name: "phone", type: "tel", placeholder: "Your Phone (Optional)" }
            ]}
            textarea={{
              name: "message",              placeholder: "Your Message",              rows: 5,
              required: true
            }}
            useInvertedBackground={false}
            mediaPosition="right"
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517810-veaq91h1.jpg?_wi=2"
            imageAlt="Cattle and calf on ranch"
            buttonText="Send Message"
            onSubmit={handleSubmit}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[
              {
                items: [
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/#about" },
                  { label: "Inventory", href: "/inventory" }
                ]
              },
              {
                items: [
                  { label: "Contact", href: "/contact-us" },
                  { label: "FAQ", href: "/#faq" }
                ]
              },
              {
                items: [
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" }
                ]
              }
            ]}
            logoText="Silvercreek Ranch"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
