import Tab from '../molecules/Tab';
import styles from '@/styles/Tabs.module.css';

export default function Tabs(props) {

    return (
        <ul className={styles.tabs}>
            {props.tabs.map(tab =>
                <Tab key={tab} name={tab} active={props.activeTab === tab.toLowerCase()} onTabClick={props.onTabClick}/>
            )}
        </ul>
    )
}