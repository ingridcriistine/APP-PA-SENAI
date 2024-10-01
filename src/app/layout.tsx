//imports dos módulos
import localFont from "next/font/local";
import {Roboto} from "next/font/google";

//imports internos
import "./globals.css";
import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";

const roboto = Roboto ({
  weight: ["100", "400", "900"],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin"]
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Menu op1="Login" op2="Inicial" op3="Maths" op4="General Function"></Menu>
        {children}
        <Footer telefone="(41)99999-9999" email="ingrid@gmail.com" copyright="Todos os direitos reservados"></Footer>
      </body>
    </html>
  );
}
