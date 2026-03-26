"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

export default function InventoryPage() {
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
        <div id="nav" data-section="nav" className="z-50 relative">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/#about" },
              { name: "Inventory", id: "/inventory" },
              { name: "Contact", id: "/contact-us" },
            ]}
            brandName="Silvercreek Ranch"
          />
        </div>

        <div id="inventory-products" data-section="inventory-products">
          <ProductCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            products={[
              { id: "longhorn-1", name: "Classic Longhorn Steer (Certified Health)", price: "Inquire for Price", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171294-09aqo5qo.jpg?_wi=2", imageAlt: "Classic Longhorn Steer" },
              { id: "angus-1", name: "Registered Angus Heifer (Excellent Condition)", price: "Inquire for Price", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171296-favtlklr.jpg?_wi=2", imageAlt: "Registered Angus Heifer" },
              { id: "crossbreed-1", name: "Commercial Crossbreed (Well-Cared For)", price: "Inquire for Price", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171296-n96vwy1s.jpg?_wi=2", imageAlt: "Commercial Crossbreed" },
              { id: "longhorn-calf", name: "Longhorn Calf (Vibrant & Healthy)", price: "Inquire for Price", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171297-6pr85tx4.jpg?_wi=2", imageAlt: "Young longhorn calf" },
            ]}
            title="Available Premium Cattle & Longhorns"
            description="Explore our current inventory of robust longhorns and commercial cattle. Each animal comes with comprehensive health records and a history of dedicated care, ready to thrive in their new environment."
            buttons={[
              { text: "Inquire About Inventory", href: "/contact-us" },
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Home", href: "/" }, { label: "About Us", href: "/#about" }, { label: "Inventory", href: "/inventory" }] },
              { items: [{ label: "Contact", href: "/contact-us" }, { label: "FAQ", href: "/#faq" }] },
              { items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
            ]}
            logoText="Silvercreek Ranch"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}