import IcomoonReact from "icomoon-react";
import iconSet from "../icons/selection.json";
import styles from '@/styles/Footer.module.css';

export default function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.socials}>
                <a href="mailto:jordanmorrison.photos@gmail.com" target='_blank'>
                    <IcomoonReact iconSet={iconSet} size={16} icon="email"/>
                </a>
                <a href="https://www.instagram.com/morrison_jordan/" target='_blank'>
                    <IcomoonReact iconSet={iconSet} size={16} icon="instagram"/>
                </a>
                <a href="https://www.tiktok.com/@morrison.jordan" target='_blank'>
                    <IcomoonReact iconSet={iconSet} size={16} icon="tiktok"/>
                </a>
            </div>
            <p>Jordan Morrison &bull; 2023</p>
        </div>
    )
}