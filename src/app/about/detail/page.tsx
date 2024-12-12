import Image from "next/image";
import styles from "./page.module.css";
import Footer from '@/components/footer/footer';

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={ styles.main }>
                <div>/about/detail/ です</div>
            </main>
            <Footer/>
        </div>
    );
}
