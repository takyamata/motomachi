import type { Metadata } from "next";
import '@/app/style/globals.scss';
import '@/app/style/variables.scss';
import { Noto_Sans_JP, Plus_Jakarta_Sans } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['200', '400', '500', '600', '700', '800'],
    display: 'swap',
})
const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['200', '500', '600'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: "WORK&NAP もとまちサービスサイト",
    description: "WORK&NAP もとまちのサービスサイトです",
};

export default function RootLayout(
    { children }: { children: React.ReactNode },
) {
    return (
        <html lang="ja">
            <body className={`${notoSansJP.className} ${plusJakartaSans.className}`}>
                {children}
            </body>
        </html>
    );
}
