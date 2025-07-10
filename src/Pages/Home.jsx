import React from "react";
import styles from '../Pages/Home.module.css';

function Home() {
    return(
        <div>
            <div className={styles.maincontainer}>
                <div className={styles.role}>
                <h1>MERN'STACK</h1>
                <h1 className={styles.Dev}>DEVELOPER</h1>
                <p>Passionate about creating intuitive and engaging <br/> user experiences. Specialize in transforming ideas <br/> into beautifully crafted products.</p>
                </div>

                <div className={styles.numdata}>
                    <div>
                        <div>+12</div>
                        <div>YEAR OF EXPERIENCES</div>
                    </div>
                    <div>
                        <div>+12</div>
                        <div>YEAR OF EXPERIENCES</div>
                    </div>
                    <div>
                        <div>+12</div>
                        <div>YEAR OF EXPERIENCES</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home ;