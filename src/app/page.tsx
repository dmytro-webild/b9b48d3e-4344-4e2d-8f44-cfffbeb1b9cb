"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import { Award, HeartPulse, Home, Syringe } from 'lucide-react';

export default function LandingPage() {
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
        {
          name: "Home",          id: "/"},
        {
          name: "About",          id: "/#about"},
        {
          name: "Inventory",          id: "/inventory"},
        {
          name: "Contact",          id: "/contact-us"},
      ]}
      brandName="Silvercreek Ranch"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Silvercreek Ranch"
      description="Silvercreek Ranch delivers quality livestock backed by decades of ranching expertise. Browse current inventory or connect directly for personalized service."
      buttons={[
        {
          text: "View Available Cattle",          href: "/inventory"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517809-xlh1ah1o.jpg"
      imageAlt="Longhorn cattle in a snowy field"
      showDimOverlay={true}
      buttonAnimation="blur-reveal"
      imageClassName="object-center"
      dimOverlayClassName="bg-black/50"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Decades of Ranching Excellence in Pittsburg, Kansas"
      description="Silvercreek Ranch, founded on integrity and sustainable stewardship, boasts a legacy of excellence in raising longhorn and commercial cattle. Our commitment ensures every animal embodies the heritage and future of quality ranching."
      metrics={[
        {
          value: "N/A",          title: "Years of Experience"},
        {
          value: "N/A",          title: "Satisfied Customers"},
        {
          value: "Top",          title: "Tier Genetics"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517809-t78c1x07.jpg?_wi=1"
      imageAlt="Cattle grazing in a field at sunrise"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      buttonAnimation="blur-reveal"
      features={[
        {
          title: "Exceptional Quality & Genetics",          description: "Our rigorous breeding program focuses on superior genetics, ensuring robust health, desirable traits, and excellent growth potential for all our longhorn and commercial cattle. We aim for excellence in every animal.",          buttonIcon: Award,
        },
        {
          title: "Comprehensive Health Protocol",          description: "Every animal benefits from meticulous care, including regular veterinary check-ups, health certifications, and a balanced nutritional regimen. We ensure optimal well-being from birth.",          buttonIcon: HeartPulse,
        },
        {
          title: "Dedicated Daily Care",          description: "Our cattle enjoy a comfortable and clean environment with consistent daily care practices. We prioritize their well-being, ensuring they are calm, healthy, and accustomed to human interaction.",          buttonIcon: Home,
        },
        {
          title: "Vaccination & Administration",          description: "All our cattle are kept up-to-date with a comprehensive vaccination schedule and receive timely shots administration, all documented for buyer transparency and animal health assurance.",          buttonIcon: Syringe,
        },
      ]}
      title="Unwavering Commitment to Premium Livestock"
      description="At Silvercreek Ranch, our dedication to superior cattle is evident in every aspect of our operation, from meticulous breeding to daily animal welfare."
      buttons={[
        {
          text: "Learn About Our Standards",          href: "/#about"},
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "longhorn-1",          name: "Classic Longhorn Steer (Certified Health)",          price: "Inquire for Price",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171294-09aqo5qo.jpg?_wi=2",          imageAlt: "Classic Longhorn Steer"},
        {
          id: "angus-1",          name: "Registered Angus Heifer (Excellent Condition)",          price: "Inquire for Price",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171296-favtlklr.jpg?_wi=2",          imageAlt: "Registered Angus Heifer"},
        {
          id: "crossbreed-1",          name: "Commercial Crossbreed (Well-Cared For)",          price: "Inquire for Price",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171296-n96vwy1s.jpg?_wi=2",          imageAlt: "Commercial Crossbreed"},
        {
          id: "longhorn-calf",          name: "Longhorn Calf (Vibrant & Healthy)",          price: "Inquire for Price",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171297-6pr85tx4.jpg?_wi=2",          imageAlt: "Young longhorn calf"},
      ]}
      title="Available Premium Cattle & Longhorns"
      description="Explore our current inventory of robust longhorns and commercial cattle. Each animal comes with comprehensive health records and a history of dedicated care, ready to thrive in their new environment."
      buttons={[
        {
          text: "Inquire About Inventory",          href: "/contact-us"},
      ]}
    />
  </div>


  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "What breeds of cattle do you offer?",          content: "We specialize in premium Texas Longhorns and high-quality commercial cattle, primarily Angus and Hereford crosses, suitable for various purposes including breeding, show, and beef production."},
        {
          id: "2",          title: "How do you ensure animal health?",          content: "Our cattle receive regular veterinary care, vaccinations, and are fed a balanced diet. We maintain detailed health records for all our animals, which are available upon request for serious buyers."},
        {
          id: "3",          title: "Can I visit the ranch to view cattle?",          content: "Yes, we welcome potential buyers to visit our ranch in Pittsburgh, Kansas, by appointment. Please contact us to schedule a convenient time."},
        {
          id: "4",          title: "What is the purchasing process?",          content: "Once you select your desired cattle, we will discuss pricing and payment options. We can assist with arrangements for transport if needed. A health certificate will be provided for all sales."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517810-veaq91h1.jpg?_wi=2"
      imageAlt="Cattle and calf on ranch"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Find answers to common questions about our cattle, purchasing process, and ranching practices."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-static"}}
      text="Ready to expand your herd or learn more? Contact Silvercreek Ranch today for personalized service and find the perfect cattle for your needs."
      buttons={[
        {
          text: "Contact Ron",          href: "/contact-us"}
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "About Us",              href: "/#about"},
            {
              label: "Inventory",              href: "/inventory"},
          ],
        },
        {
          items: [
            {
              label: "Contact",              href: "/contact-us"},
            {
              label: "FAQ",              href: "/#faq"},
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      logoText="Silvercreek Ranch"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}