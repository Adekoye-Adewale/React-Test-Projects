import localFont from "next/font/local";
import "./globals.css";

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

export const metadata = {
        title: "Project Task",
        description: "Frontend task to be done weekly using React JS and Tailwind CSS.",
};

export default function RootLayout({ children }) {
        return (
                <html 
                        lang="en" 
                        className="scroll-smooth"
                >
                        <body
                                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                        >
                                {children}
                        </body>
                </html>
        );
}