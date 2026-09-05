import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";
import Sidebar from "@/components/Sidebar";

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
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className={`${poppins.className} min-h-full flex flex-col font-sans`}>
        <StoreProvider>
          <div className="h-screen w-full flex bg-zinc-50 dark:bg-black">
            <div className="px-2 py-3 h-full w-1/4 bg-[#fcfaf8] transition-all duration-300 flex flex-col items-start border-r border-gray-200 dark:border-zinc-800">
              <Sidebar />
            </div>
            <div className="h-full flex-1 bg-white dark:bg-zinc-900 overflow-y-auto">
              {children}
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
