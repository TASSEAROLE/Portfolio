import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tasse Wembe Jerry Arole | Ingénieur Logiciel & Cloud",
    template: "%s | Jerry Arole"
  },
  description: "Portfolio professionnel de Tasse Wembe Jerry Arole, Élève Ingénieur en Génie Informatique à l'ENSPY. Spécialisé en développement Full-Stack, architectures cloud-natives et intégration d'intelligence artificielle.",
  keywords: [
    "Tasse Wembe Jerry Arole",
    "Jerry Arole",
    "Génie Informatique",
    "ENSPY",
    "Software Engineer",
    "Développeur Full-Stack",
    "AI Enthusiast",
    "React",
    "Next.js",
    "Django REST",
    "Spring Boot",
    "Kubernetes",
    "Docker",
    "Backstage",
    "Cameroun",
    "Yaoundé"
  ],
  authors: [{ name: "Tasse Wembe Jerry Arole", url: "https://github.com/jerryarole" }],
  creator: "Tasse Wembe Jerry Arole",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://jerryarole.dev",
    title: "Tasse Wembe Jerry Arole | Ingénieur Logiciel & Cloud",
    description: "Élève Ingénieur en Génie Informatique à l'ENSPY - Portfolio personnel. Découvrez mes projets, compétences et expériences.",
    siteName: "Jerry Arole Portfolio",
    images: [
      {
        url: "/profile_avatar.png",
        width: 512,
        height: 512,
        alt: "Tasse Wembe Jerry Arole Avatar"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasse Wembe Jerry Arole | Ingénieur Logiciel",
    description: "Élève Ingénieur en Génie Informatique à l'ENSPY. Spécialisé en Full-Stack et IA.",
    images: ["/profile_avatar.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col selection:bg-accent-purple/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
