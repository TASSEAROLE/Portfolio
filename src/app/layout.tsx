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
    default: "Tasse Arole | Ingénieur Logiciel & Cloud",
    template: "%s | Tasse Arole"
  },
  description: "Portfolio professionnel de Tasse Arole, Élève Ingénieur en Génie Informatique à l'ENSPY. Spécialisé en développement Full-Stack, architectures cloud-natives et intégration d'intelligence artificielle.",
  keywords: [
    "Tasse Arole",
    "Tasse Wembe Jerry Arole",
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
  authors: [{ name: "Tasse Arole", url: "https://github.com/jerryarole" }],
  creator: "Tasse Arole",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://jerryarole.dev",
    title: "Tasse Arole | Ingénieur Logiciel & Cloud",
    description: "Élève Ingénieur en Génie Informatique à l'ENSPY - Portfolio personnel. Découvrez mes projets, compétences et expériences.",
    siteName: "Tasse Arole Portfolio",
    images: [
      {
        url: "/profile_avatar.png",
        width: 512,
        height: 512,
        alt: "Tassé Harold Avatar"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasse Arole | Ingénieur Logiciel",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      {/*
        Script injecté avant le paint pour éviter le flash de thème.
        Si l'utilisateur a choisi "light", on retire la classe "dark".
      */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-accent-purple/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
