import { useState } from 'react';
import Tabs from '../organisms/Tabs';
import PhotoGrid from '../organisms/PhotoGrid';
import categories from '@/data/categories.json';
import styles from '@/styles/Home.module.css';

export default function Home(props) {

    const [activeTab, setActiveTab] = useState(props.category);

    const handleTabChange = (category) => {
        setActiveTab(category);
    };

    return (
        <>
            {activeTab &&
                <>
                    <Tabs tabs={categories} activeTab={activeTab} onTabClick={handleTabChange}/>
                    <PhotoGrid images={props.images}/>
                </>
            }
        </>
    )
}