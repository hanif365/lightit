import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Custom Software Development Company You Can Trust | Light IT",
  description:
    "Light IT is a top-rated custom software development company trusted by businesses worldwide. Our expert team delivers innovative solutions tailored to your needs, ensuring success in the digital landscape.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
