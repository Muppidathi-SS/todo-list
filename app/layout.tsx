import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/customStyles.css";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "@/components/MainLayout";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo list app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var c=localStorage.getItem("themeColor");if(c){document.documentElement.style.setProperty("--theme-color",c);}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${poppins.className} min-h-full flex flex-col font-sans`}
      >
        <ToastContainer />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
