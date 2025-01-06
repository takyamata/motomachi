import type { Metadata } from "next";
import '@/app/style/globals.scss';
import '@/app/style/variables.scss';
import styles from './layout.module.scss';
import Main from '@/components/Main/Main';
import Aside from '@/components/Aside/Aside';

export const metadata: Metadata = {
    title: "WORK&NAP もとまちサービスサイト",
    description: "WORK&NAP もとまちのサービスサイトです",
};

export default function RootLayout() {
    return (
        <html lang="ja">
            <body>
                <div className={styles.wrapper}>
                    <div className={styles.inner}>
                        <Aside />
                        <Main />
                    </div>
                </div>
            </body>
        </html>
    );
}
