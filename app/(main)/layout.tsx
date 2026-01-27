import ResponsiveNav from "../components/Home/Navbar/ResponsiveNav";
import CookieConsent from "../components/Helper/CookieConsent";
import ScrollToTop from "../components/Helper/ScrollToTop";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ResponsiveNav />
      {children}
      <ScrollToTop />
      <CookieConsent />
    </>
  );
}
