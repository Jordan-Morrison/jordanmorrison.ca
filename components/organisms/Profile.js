import styles from '@/styles/Profile.module.css';

export default function Profile() {

    return (
        <div className={styles.profile}>
            <img src={"/images/JordanMorrisonProfile.jpg"}/>
            <h1>Jordan Morrison</h1>
            <h2>Adventure Photographer 📸</h2>
        </div>
    )
}