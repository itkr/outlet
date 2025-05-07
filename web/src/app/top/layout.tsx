import { Metadata } from "next";
// import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

// const inter = Inter({ subsets: ['latin'] });

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <main> */}
      <SidebarTrigger />
      <div className="container mx-auto p-4">{children}</div>
      {/* </main> */}
    </SidebarProvider>
  );
};

export const metadata: Metadata = {
  title: "Top",
  description: "Top page",
};

export default Layout;
