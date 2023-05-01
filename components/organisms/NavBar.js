import IcomoonReact from "icomoon-react";
import iconSet from "../icons/selection.json";
import styles from '@/styles/NavBar.module.css';

export default function NavBar() {

    return (
        <div className={styles.navBar}>
            <ul>
                <li>Work</li>
                <li>Contact</li>
            </ul>
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