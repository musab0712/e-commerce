import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MegaMart",
  description: "Devloped By Musab Hassan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={inter.className}>
        <ReduxProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
