import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/navbar";
import TransitionProvider from "./components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The King",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
