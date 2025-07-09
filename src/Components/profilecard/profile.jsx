import react from 'react';
import styles from './profile.module.css';

function Profile() {
    return(
        <div className={styles.maincontainer}>
            <div className={styles.imgcontainer}>
                <img src="/icons/editedimg.png" alt="" className={styles.image}/>
            </div>
            <div className={styles.namecontainer}>
                <p>KrishnaMoorthy</p>
            </div>
            <div className={styles.curvedashline}>

            </div>
            <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, minima.</p>
            </div>
        </div>
    )
}

export default Profile;