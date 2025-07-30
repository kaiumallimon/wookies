import { Sora } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Custom font import using Next.js Google Fonts
const sora = Sora(
  {
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  }
);

// Root layout component for the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={twMerge(sora.className, "bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}