import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "KAN PACIFIC EQUIPMENT LTD. | Reliable Equipment Solutions",
  description:
    "KAN PACIFIC EQUIPMENT LTD. is a family-run business in Langley, providing reliable equipment solutions for construction, waste disposal, and material handling. Founded by Binay and Gunvir Kandola, our commitment to hard work and honesty drives exceptional service.",
  icons: {
    icon: '/favicon.ico',  // This points to public/favicon.ico
  },
  openGraph: {
    title: "KAN PACIFIC EQUIPMENT LTD. | Reliable Equipment Solutions",
    description:
      "Family-run equipment solutions for construction, waste disposal, and material handling in Langley.",
    url: "https://yourdomain.com", // Update with your domain
    siteName: "KAN PACIFIC EQUIPMENT LTD.",
    images: [
      {
        url: "https://yourdomain.com/images/og-image.jpg", // Update with your Open Graph image path
        width: 800,
        height: 600,
        alt: "KAN PACIFIC Equipment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAN PACIFIC EQUIPMENT LTD. | Reliable Equipment Solutions",
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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
