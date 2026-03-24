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
import { Zap, HeartPulse, Award, Eye } from 'lucide-react';
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
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Inventory",
          id: "inventory",
        },
        {
          name: "Names & Numbers",
          id: "names-numbers",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Ron Brock Ranching"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Ron Brock Ranching"
      description="Ron Brock's family ranch delivers quality livestock backed by decades of ranching expertise. Browse current inventory or connect directly for personalized service."
      buttons={[
        {
          text: "View Available Cattle",
          href: "/inventory",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517809-xlh1ah1o.jpg"
      imageAlt="Longhorn cattle in a snowy field"
      showDimOverlay={true}
 
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      buttonAnimation="slide-up"
      title="Decades of Ranching Excellence in Pittsburgh, Kansas"
      description="Ron Brock Ranching is dedicated to raising premium longhorn and commercial cattle. With a deep heritage in agricultural stewardship, we combine traditional values with modern practices to ensure superior genetics, health, and temperament in every animal. Our commitment to quality has made us a trusted name for ranchers and buyers across the region."
      metrics={[
        {
          value: "30+",
          title: "Years of Experience",
        },
        {
          value: "100s",
          title: "Cattle Sold",
        },
        {
          value: "Top",
          title: "Tier Genetics",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517809-t78c1x07.jpg?_wi=1"
      imageAlt="Cattle grazing in a field at sunrise"
      mediaAnimation="entrance-slide"
      metricsAnimation="entrance-slide"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      buttonAnimation="slide-up"
      features={[
        {
          title: "Superior Genetics",
          description: "We carefully select breeding stock to ensure robust health, desirable traits, and excellent growth potential for both longhorns and commercial cattle.",
          buttonIcon: Zap,
        },
        {
          title: "Optimal Health",
          description: "Our herd receives meticulous care, including regular veterinary check-ups, balanced nutrition, and clean environments, ensuring prime condition for sale.",
          buttonIcon: HeartPulse,
        },
        {
          title: "Proven Performance",
          description: "Our cattle consistently demonstrate strong performance, whether for breeding, beef production, or expanding your own herd with reliable stock.",
          buttonIcon: Award,
        },
        {
          title: "Transparency & Trust",
          description: "We provide comprehensive documentation and open communication, fostering trust with every transaction. What you see is what you get.",
          buttonIcon: Eye,
        },
      ]}
      title="Our Commitment to Quality Livestock"
      description="At Ron Brock Ranching, every animal reflects our dedication to superior breeding and care. We prioritize key attributes that ensure value for every buyer."
      buttons={[
        {
          text: "Explore Details",
          href: "/about-us",
        },
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
          id: "longhorn-1",
          name: "Classic Longhorn Steer",
          price: "Inquire for Price",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-beautiful-goat-eating-plants-bushy-garden-captured-sunny-day_181624-41495.jpg",
          imageAlt: "Classic Longhorn Steer",
        },
        {
          id: "angus-1",
          name: "Registered Angus Heifer",
          price: "Inquire for Price",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-beige-cow-with-horns_181624-35948.jpg",
          imageAlt: "Registered Angus Heifer",
        },
        {
          id: "crossbreed-1",
          name: "Commercial Crossbreed",
          price: "Inquire for Price",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-cow-farm_23-2148568668.jpg",
          imageAlt: "Commercial Crossbreed",
        },
        {
          id: "longhorn-calf",
          name: "Longhorn Calf",
          price: "Inquire for Price",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517810-veaq91h1.jpg?_wi=1",
          imageAlt: "Young longhorn calf",
        },
      ]}
      title="Our Current Cattle Inventory"
      description="Browse our selection of premium longhorns and commercial cattle currently available for sale. Each animal is raised with care and ready for its new home."
      buttons={[
        {
          text: "View All Inventory",
          href: "/inventory",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Exceptional Quality Longhorns!",
          quote: "Ron Brock Ranching provided us with some of the finest longhorns we've ever purchased. Their health and temperament are outstanding, a true testament to their care.",
          name: "John Davis",
          role: "Ranch Owner",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-gardner-looking-after-plants-greenhouse_1303-14072.jpg",
        },
        {
          id: "2",
          title: "Reliable and Trustworthy Partner",
          quote: "Working with Ron Brock was a fantastic experience. Transparent, knowledgeable, and genuinely committed to quality. We'll definitely be repeat buyers for our breeding stock.",
          name: "Sarah Miller",
          role: "Agricultural Investor",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-content-pretty-businesswoman-glasses_1262-1740.jpg",
        },
        {
          id: "3",
          title: "Highly Recommend for New Farmers",
          quote: "As a hobby farmer expanding my operations, I needed guidance. Ron Brock made the process easy, providing healthy cattle and valuable advice. Couldn't be happier!",
          name: "Michael Chen",
          role: "Hobby Farmer",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-cheerful-gardener-smiling-holding-pot-with-plant_176420-3830.jpg",
        },
        {
          id: "4",
          title: "The Best Cattle in Kansas",
          quote: "Ron Brock Ranching stands out for its exceptional livestock. From longhorns to commercial breeds, the quality is consistent, and the professionalism is unmatched.",
          name: "Emily Johnson",
          role: "Local Rancher",
          imageSrc: "http://img.b2bpic.net/free-photo/worker-near-cistern-railway_1398-1878.jpg",
        },
      ]}
      title="What Our Buyers Say"
      description="Hear directly from ranchers and investors who have experienced the quality and service of Ron Brock Ranching."
      buttonAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What breeds of cattle do you offer?",
          content: "We specialize in premium Texas Longhorns and high-quality commercial cattle, primarily Angus and Hereford crosses, suitable for various purposes including breeding, show, and beef production.",
        },
        {
          id: "2",
          title: "How do you ensure animal health?",
          content: "Our cattle receive regular veterinary care, vaccinations, and are fed a balanced diet. We maintain detailed health records for all our animals, which are available upon request for serious buyers.",
        },
        {
          id: "3",
          title: "Can I visit the ranch to view cattle?",
          content: "Yes, we welcome potential buyers to visit our ranch in Pittsburgh, Kansas, by appointment. Please contact us to schedule a convenient time.",
        },
        {
          id: "4",
          title: "What is the purchasing process?",
          content: "Once you select your desired cattle, we will discuss pricing and payment options. We can assist with arrangements for transport if needed. A health certificate will be provided for all sales.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517810-veaq91h1.jpg?_wi=2"
      imageAlt="Cattle and calf on ranch"
      mediaAnimation="entrance-slide"
      title="Frequently Asked Questions"
      description="Find answers to common questions about our cattle, purchasing process, and ranching practices."
      faqsAnimation="entrance-slide"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-static",
      }}
      text="Ready to expand your herd or learn more? Contact Ron Brock Ranching today for personalized service and find the perfect cattle for your needs."
      buttons={[
        {
          text: "Email Us",
          href: "mailto:info@ronbrockranching.com",
        },
        {
          text: "Call Ron",
          href: "tel:+16202314000",
        },
      ]}
    />
  </div>

  <div id="names-numbers" data-section="names-numbers">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Decades of Ranching Excellence in Pittsburgh, Kansas"
      description="Ron Brock Ranching is dedicated to raising premium longhorn and commercial cattle. With a deep heritage in agricultural stewardship, we combine traditional values with modern practices to ensure superior genetics, health, and temperament in every animal. Our commitment to quality has made us a trusted name for ranchers and buyers across the region."
      metrics={[
        {
          value: "30+",
          title: "Years of Experience",
        },
        {
          value: "100s",
          title: "Cattle Sold",
        },
        {
          value: "Top",
          title: "Tier Genetics",
        },
      ]}
      tag="Five Star Phone Books"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517809-t78c1x07.jpg?_wi=2"
      imageAlt="Cattle grazing in a field at sunrise"
      mediaAnimation="entrance-slide"
      metricsAnimation="entrance-slide"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About Us",
              href: "/about-us",
            },
            {
              label: "Inventory",
              href: "/inventory",
            },
          ],
        },
        {
          items: [
            {
              label: "Names & Numbers",
              href: "/names-numbers",
            },
            {
              label: "Contact",
              href: "/contact",
            },
            {
              label: "FAQ",
              href: "/faq",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Ron Brock Ranching"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
