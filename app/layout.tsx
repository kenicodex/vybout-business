
// import { ReactNode } from "react";
import "./globals.css";

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
    

//     <body className="h-screen w-full bg-contain bg-center !bg-white "
//     //  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1723384747376-90f201a3bd55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1971')" }}
//      >
//       {/* Existing layout content */}
//       {children}
//     </body>
//       {/* <body className="bg-gray-50">{children}</body> */}
//     </html>
//   );
// }

 
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>VyBout</title>
      </head>
      <body className="bg-gray-50">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen md:ml-64">
            <Navbar />
            <main className="flex-1 p-4 md:p-8  bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

