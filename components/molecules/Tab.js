import Link from 'next/link';
import styles from '@/styles/Tab.module.css';

export default function Tab(props) {
    return (
        <Link className={styles.link} href={`/${props.tab.slug}`}>
            <li className={`${styles.tab} ${props.active ? styles.active : null}`} onClick={() => props.onTabClick(props.tab.slug)}>{props.tab.name}</li>
        </Link>
    )
}