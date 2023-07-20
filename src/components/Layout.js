import { Inter } from 'next/font/google';
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Meta from "src/components/Meta";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function AppLayout({ children }) {
    return (
        <div className={'${inter.variable} font-sans min-h-screen flex flex-col'}>
            <Meta />
            <Header />
            <main className="flex-grow bg-white">{children}</main>
            <Footer />
        </div>
    );
}