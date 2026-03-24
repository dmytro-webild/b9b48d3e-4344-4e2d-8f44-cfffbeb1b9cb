"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

// Define the consistent navigation links for NavbarStyleFullscreen
const NAVBAR_NAV_ITEMS = [
  { name: "Home", id: "/" },
  { name: "About", id: "/#about" }, // Link to about section on home page
  { name: "Inventory", id: "/inventory" }, // Added for consistency
  { name: "Contact", id: "/contact-us" }, // Link to the new contact-us page
];

// Define the consistent footer columns for FooterLogoEmphasis
const FOOTER_COLUMNS = [
  {
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#about" },
      { label: "Inventory", href: "/inventory" } // Added for consistency
    ],
  },
  {
    items: [
      { label: "Contact", href: "/contact-us" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function ContactUsPage() {
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
            navItems={NAVBAR_NAV_ITEMS}
            brandName="Silvercreek Ranch"
          />
        </div>

        <div id="contact-page-content" data-section="contact-page-content">
          <ContactText
            useInvertedBackground={true}
            background={{
              variant: "rotated-rays-static"}}
            text="Reach out to Silvercreek Ranch! You can contact us by phone at 620 704 7701. Our email is currently to be determined, please check back later for updates."
            buttons={[
              {
                text: "Call Us",                href: "tel:+16207047701"},
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={FOOTER_COLUMNS}
            logoText="Silvercreek Ranch"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
