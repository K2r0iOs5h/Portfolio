import React from "react";
import styles from '../Pages/Home.module.css';

function Home() {
    return(
        <div>
            <div className={styles.maincontainer}>
                <div className={styles.role}>
                <h1>MERN'STACK</h1>
                <h1 className={styles.Dev}>DEVELOPER</h1>
                <p className={styles.Devtxt}>Passionate about creating intuitive and engaging <br/> user experiences. Specialize in transforming ideas <br/> into beautifully crafted products.</p>
                </div>

                <div className={styles.numdata}>
                    <div className={styles.exp}>
                        <div className={styles.expyr} >+3</div>
                        <div className={styles.exptxt}>YEAR OF <br/> EXPERIENCES</div>
                    </div>
                    <div className={styles.projects}>
                        <div className={styles.projcount}>+12</div>
                        <div className={styles.projtxt}>PROJECTS <br/>COMPLETED</div>
                    </div>
                    <div className={styles.clients}>
                        <div className={styles.clientcnt}>+5</div>
                        <div className={styles.clienttxt}>WORLDWIDE <br/> CLIENTS</div>
                    </div>
                </div>

                <div className={styles.colorcards}>
                    <div className={styles.orangecard}>
                        <div className={styles.symbolorng}>
                           <svg className={styles.db} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                              <polyline points="2 17 12 22 22 17"></polyline>
                              <polyline points="2 12 12 17 22 12"></polyline>
                           </svg>
                        </div>
                        <div className={styles.orangetxt}><p className={styles.paratxt}>DYNAMIC DASHBOARDS, CHARTS & GRAPHS</p></div>
                        <div className={styles.orangebtn}>
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <g>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12,5 19,12 12,19"></polyline>
                             </g>
                             </svg></a>
                        </div>
                    </div>
                    <div className={styles.greencard}>
                        <div className={styles.symbolgrn}><svg className={styles.ui} width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="white">   
 <g stroke="#000000" stroke-width="8">
     <rect x="10" y="10" width="80" height="80" rx="8" ry="8" fill="none" />      

   <line x1="10" y1="35" x2="90" y2="35"/>      
   <line x1="35" y1="35" x2="35" y2="90"/> 
 </g>
</svg></div>
                        <div className={styles.greentxt}><p className={styles.paratxtwo}>MONGODB, EXPRESSJS, REACTJS,NODEJS</p></div>
                        <div className={styles.greenbtn}>
                            
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <g>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12,5 19,12 12,19"></polyline>
                             </g>
                             </svg>
</a>
                        </div>
                    </div>
                </div>

                <div className={styles.recent}>
                <h2>RECENT</h2>
                <h2 className={styles.pro}>PROJECTS</h2>
                </div>
            </div>
        </div>
    )
}

export default Home ;