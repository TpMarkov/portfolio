import ResponsiveNav from "../components/Home/Navbar/ResponsiveNav";
import CookieConsent from "../components/Helper/CookieConsent";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <ResponsiveNav />
            {children}
            <CookieConsent />
        </>
    );
}
