import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "no proof, no business – Wie in 30 Tagen dein Business läuft",
  description:
    "Buch von Sven Lachhein. Vier Stufen, 22 Kapitel, 13 Arbeitsblätter, 30 Tage. Prüfung statt Strategie.",
  metadataBase: new URL("https://no-proof-no-business.de"),
  openGraph: {
    title: "no proof, no business – Wie in 30 Tagen dein Business läuft",
    description:
      "Buch von Sven Lachhein. Vier Stufen, 22 Kapitel, 13 Arbeitsblätter, 30 Tage. Prüfung statt Strategie.",
    url: "https://no-proof-no-business.de",
    siteName: "no proof, no business",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 1793,
        alt: "no proof, no business – Cover",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "no proof, no business – Wie in 30 Tagen dein Business läuft",
    description:
      "Buch von Sven Lachhein. Vier Stufen, 22 Kapitel, 13 Arbeitsblätter, 30 Tage. Prüfung statt Strategie.",
    images: ["/cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
