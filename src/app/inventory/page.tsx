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
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Inventory", id: "products" },
              { name: "Names & Numbers", id: "names-numbers" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="Silvercreek Ranch"
          />
        </div>

        <div id="inventory-list" data-section="inventory-list">
          <ProductCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            products={[
              {
                id: "longhorn-maverick",                name: "Silvercreek's Maverick (Classic Longhorn Steer)",                price: "Inquire for Price",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171294-09aqo5qo.jpg",                imageAlt: "Classic Longhorn Steer Maverick"
              },
              {
                id: "angus-beauty",                name: "Silvercreek's Black Beauty (Registered Angus Heifer)",                price: "Inquire for Price",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171296-favtlklr.jpg",                imageAlt: "Registered Angus Heifer Black Beauty"
              },
              {
                id: "crossbreed-hardy",                name: "Silvercreek's Hardy Blend (Commercial Crossbreed)",                price: "Inquire for Price",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171296-n96vwy1s.jpg",                imageAlt: "Commercial Crossbreed Hardy Blend"
              },
              {
                id: "longhorn-star",                name: "Silvercreek's Little Star (Longhorn Calf)",                price: "Inquire for Price",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171297-6pr85tx4.jpg",                imageAlt: "Young longhorn calf Little Star"
              }
            ]}
            title="Our Premium Cattle Inventory"
            description="Explore our current selection of high-quality Longhorn and commercial cattle. Each animal is raised with meticulous care, adhering to rigorous health protocols and breeding standards to ensure superior genetics and temperament. Detailed information on health records, lineage, and specific traits is available upon inquiry."
            buttons={[
              {
                text: "Contact for Details",                href: "/#contact" 
              }
            ]}
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
                  { label: "Names & Numbers", href: "/#names-numbers" },
                  { label: "Contact", href: "/#contact" },
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