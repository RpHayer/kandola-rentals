import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "KANPACIFIC EQUIPMENT LTD. | Reliable Equipment Solutions",
  description:
    "KANPACIFIC EQUIPMENT LTD. is a family-run business in Langley, providing reliable equipment solutions for construction, waste disposal, and material handling. Founded by Binay and Gunvir Kandola, our commitment to hard work and honesty drives exceptional service.",
  openGraph: {
    title: "KANPACIFIC EQUIPMENT LTD. | Reliable Equipment Solutions",
    description:
      "Family-run equipment solutions for construction, waste disposal, and material handling in Langley.",
    url: "https://yourdomain.com", // Update with your domain
    siteName: "KANPACIFIC EQUIPMENT LTD.",
    images: [
      {
        url: "https://yourdomain.com/images/og-image.jpg", // Update with your Open Graph image path
        width: 800,
        height: 600,
        alt: "KANPACIFIC Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KANPACIFIC EQUIPMENT LTD. | Reliable Equipment Solutions",
    description:
      "Family-run equipment solutions for construction, waste disposal, and material handling in Langley.",
    images: ["https://yourdomain.com/images/og-image.jpg"], // Update with your image path
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
