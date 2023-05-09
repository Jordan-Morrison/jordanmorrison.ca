import Link from 'next/link';
import IcomoonReact from "icomoon-react";
import iconSet from "../icons/selection.json";
import styles from '@/styles/NavBar.module.css';

export default function NavBar() {

    return (
        <div className={styles.navBar}>
            <ul>
                <li>
                    <Link href="/adventure">Work</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://www.instagram.com/morrison_jordan/" target='_blank'>
                        <IcomoonReact iconSet={iconSet} size={16} icon="instagram"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@morrison.jordan" target='_blank'>
                        <IcomoonReact iconSet={iconSet} size={16} icon="tiktok"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}