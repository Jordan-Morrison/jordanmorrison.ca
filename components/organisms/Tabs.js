import Tab from '../molecules/Tab';
import styles from '@/styles/Tabs.module.css';

export default function Tabs(props) {

    return (
        <ul className={styles.tabs}>
            {props.tabs.map(tab =>
                <Tab key={tab.id} tab={tab} active={props.activeTab === tab.slug} onTabClick={props.onTabClick}/>
            )}
        </ul>
    )
}