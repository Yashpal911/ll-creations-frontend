import Header from "./header/header";
import "./globals.css";
import 'rsuite/dist/rsuite.min.css'
import Footer from "./footer/footer";

export const metadata = {
  title: "LL Creations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
      <main>{children}</main>
       <Footer/>
      </body>
    </html>
  );
}
