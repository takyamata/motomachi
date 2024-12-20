import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Footer from '@/components/footer/footer';

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div>ホーム画面です</div>
            </main>
            <Footer />
        </div>
    );
}
