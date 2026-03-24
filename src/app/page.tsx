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
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

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
          name: "Home",          id: "home"},
        {
          name: "About",          id: "about"},
        {
          name: "Inventory",          id: "inventory"},
        {
          name: "Names & Numbers",          id: "names-numbers"},
        {
          name: "Contact",          id: "contact"},
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
 
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Decades of Ranching Excellence in Pittsburg, Kansas"
      description="Silvercreek Ranch is dedicated to raising premium longhorn and commercial cattle. With a deep heritage in agricultural stewardship, we combine traditional values with modern practices to ensure superior genetics, health, and temperament in every animal. Our commitment to quality has made us a trusted name for ranchers and buyers across the region."
      metrics={[
        {
          value: "30+",          title: "Years of Experience"},
        {
          value: "100s",          title: "Cattle Sold"},
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
          text: "Learn About Our Standards",          href: "#about"},
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
          id: "longhorn-1",          name: "Classic Longhorn Steer (Certified Health)",          price: "Inquire for Price",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171294-09aqo5qo.jpg",          imageAlt: "Classic Longhorn Steer"},
        {
          id: "angus-1",          name: "Registered Angus Heifer (Excellent Condition)",          price: "Inquire for Price",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171296-favtlklr.jpg",          imageAlt: "Registered Angus Heifer"},
        {
          id: "crossbreed-1",          name: "Commercial Crossbreed (Well-Cared For)",          price: "Inquire for Price",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171296-n96vwy1s.jpg",          imageAlt: "Commercial Crossbreed"},
        {
          id: "longhorn-calf",          name: "Longhorn Calf (Vibrant & Healthy)",          price: "Inquire for Price",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774386171297-6pr85tx4.jpg",          imageAlt: "Young longhorn calf"},
      ]}
      title="Available Premium Cattle & Longhorns"
      description="Explore our current inventory of robust longhorns and commercial cattle. Each animal comes with comprehensive health records and a history of dedicated care, ready to thrive in their new environment."
      buttons={[
        {
          text: "View All Inventory",          href: "/inventory"},
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Exceptional Quality Longhorns!",          quote: "Ron Brock Ranching provided us with some of the finest longhorns we've ever purchased. Their health and temperament are outstanding, a true testament to their care.",          name: "John Davis",          role: "Ranch Owner",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774389083920-b18ohh1d.jpg"},
        {
          id: "2",          title: "Reliable and Trustworthy Partner",          quote: "Working with Ron Brock was a fantastic experience. Transparent, knowledgeable, and genuinely committed to quality. We'll definitely be repeat buyers for our breeding stock.",          name: "Sarah Miller",          role: "Agricultural Investor",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774389083920-o61s5bng.jpg"},
        {
          id: "3",          title: "Highly Recommend for New Farmers",          quote: "As a hobby farmer expanding my operations, I needed guidance. Ron Brock made the process easy, providing healthy cattle and valuable advice. Couldn't be happier!",          name: "Michael Chen",          role: "Hobby Farmer",          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-cheerful-gardener-smiling-holding-pot-with-plant_176420-3830.jpg"},
        {
          id: "4",          title: "The Best Cattle in Kansas",          quote: "Ron Brock Ranching stands out for its exceptional livestock. From longhorns to commercial breeds, the quality is consistent, and the professionalism is unmatched.",          name: "Emily Johnson",          role: "Local Rancher",          imageSrc: "http://img.b2bpic.net/free-photo/worker-near-cistern-railway_1398-1878.jpg"},
      ]}
      title="The Story of Silvercreek Ranch"
      description="Ron Brock and his father KW Brock built the ranch together, and Ron has taken care of it ever since by improving infrastructure, gating, and expanding the ranch."
      buttonAnimation="slide-up"
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
          text: "Email Us",          href: "mailto:info@silvercreekranch.com"},
        {
          text: "Call Ron",          href: "tel:+16202314000"},
      ]}
    />
  </div>

  <div id="names-numbers" data-section="names-numbers">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Names and Numbers Page"
      description="Beyond our long-standing presence, these numbers highlight our tangible impact and commitment to quality. From the cattle we've raised to our consistent client satisfaction, our success is measured by more than just years."
      metrics={[
        {
          value: "30+",          title: "Years of Experience"},
        {
          value: "100s",          title: "Cattle Sold"},
        {
          value: "Top",          title: "Tier Genetics"},
      ]}
      tag="Five Star Phone Books"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517809-t78c1x07.jpg?_wi=2"
      imageAlt="Cattle grazing in a field at sunrise"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
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
              label: "About Us",              href: "#about"},
            {
              label: "Inventory",              href: "/inventory"},
          ],
        },
        {
          items: [
            {
              label: "Names & Numbers",              href: "#names-numbers"},
            {
              label: "Contact",              href: "#contact"},
            {
              label: "FAQ",              href: "#faq"},
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