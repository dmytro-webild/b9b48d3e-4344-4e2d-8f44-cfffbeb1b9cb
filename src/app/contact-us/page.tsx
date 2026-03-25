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
            button={{ text: "Contact Us", href: "/contact-us" }}
          />
        </div>

        <div id="contact-page-content" data-section="contact-page-content"
             style={{ backgroundImage: `url(https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774413967904-k0gz73u1.jpg)` }}
             className="relative bg-cover bg-center flex items-center justify-center min-h-[calc(100vh-var(--height-navbar-desktop)-var(--height-footer-desktop))] md:min-h-[calc(100vh-var(--height-navbar-mobile)-var(--height-footer-mobile))] py-20">
          {/* Added a subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <ContactText
            useInvertedBackground={false} // Use dark text for a light background
            background={{ variant: "plain" }}
            text="Reach out to Silvercreek Ranch! You can contact us by phone at 620 704 7701. Our email is currently to be determined, please check back later for updates."
            buttons={[
              {
                text: "Call Us",                href: "tel:+16207047701"
              },
            ]}
            className="relative z-20 w-full max-w-2xl mx-auto"
            contentClassName="bg-white/90 p-8 rounded-lg shadow-lg"
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
