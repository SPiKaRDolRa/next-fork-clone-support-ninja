import "styles/tailwind.css";
import Banner from "components/Banner/Banner";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Banner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}