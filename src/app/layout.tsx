import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Ron Brock Ranching | Premium Longhorns & Cattle Sales in Pittsburgh, KS',
  description: 'Discover high-quality longhorn and commercial cattle from Ron Brock Ranching in Pittsburgh, Kansas. Decades of expertise in breeding, sales, and ranch operations. View inventory, inquire, and invest in superior livestock.',
  keywords: ["Ron Brock Ranching, cattle sales, longhorns, commercial cattle, Pittsburgh Kansas, livestock, ranch operations, cattle inventory, breeding stock, agricultural investors, hobby farmers, quality cattle, animal health"],
  openGraph: {
    "title": "Ron Brock Ranching | Premium Longhorns & Cattle Sales in Pittsburgh, KS",
    "description": "Discover high-quality longhorn and commercial cattle from Ron Brock Ranching in Pittsburgh, Kansas. Decades of expertise in breeding, sales, and ranch operations.",
    "url": "https://www.ronbrockranching.com",
    "siteName": "Ron Brock Ranching",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517809-xlh1ah1o.jpg",
        "alt": "Longhorn cattle in a snowy field"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Ron Brock Ranching | Premium Longhorns & Cattle Sales in Pittsburgh, KS",
    "description": "Discover high-quality longhorn and commercial cattle from Ron Brock Ranching in Pittsburgh, Kansas. Decades of expertise in breeding, sales, and ranch operations.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BPGqDHkHNlD7Jj15SOQkZlknFX/uploaded-1774383517809-xlh1ah1o.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
