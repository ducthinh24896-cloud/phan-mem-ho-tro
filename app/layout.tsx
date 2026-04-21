import type { Metadata } from "next";
import { Be_Vietnam_Pro, Montserrat } from "next/font/google";
import "./globals.css";

/* FONT */
const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["400", "700"],
  variable: "--font-body",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-heading",
});

/* SEO */
export const metadata: Metadata = {
  title: "🎖️ Học Tập Chiến Sĩ - Tiểu đoàn HLCSM2 Đại đội 7",
  description:
    "Website hỗ trợ học tập, bài hát truyền thống và quân vũ dành cho chiến sĩ Tiểu đoàn HLCSM2 - Đại đội 7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${beVietnam.variable} ${montserrat.variable}`}
    >
      <body className="min-h-full flex flex-col font-body">
        {children}
      </body>
    </html>
  );
}