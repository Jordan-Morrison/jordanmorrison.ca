import IcomoonReact from "icomoon-react";
import iconSet from "../icons/selection.json";
import styles from '@/styles/NavBar.module.css';

export default function Home() {

    return (
        <div className={styles.navBar}>
            <ul>
                <li>Work</li>
                <li>Contact</li>
            </ul>
            <h1>Jordan Morrison</h1>
            <ul>
                <li>
                    <IcomoonReact iconSet={iconSet} size={16} icon="instagram"/>
                </li>
                <li>
                    <IcomoonReact iconSet={iconSet} size={16} icon="tiktok"/>
                </li>
            </ul>
        </div>
    )
}