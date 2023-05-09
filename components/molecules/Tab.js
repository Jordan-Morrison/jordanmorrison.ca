import Link from 'next/link';
import styles from '@/styles/Tab.module.css';

export default function Tab(props) {
    return (
        <li className={`${styles.tab} ${props.active ? styles.active : null}`} onClick={() => props.onTabClick(props.tab.slug)}>
            <Link href={`/${props.tab.slug}`} scroll={false}>{props.tab.name}</Link>
        </li>
    )
}