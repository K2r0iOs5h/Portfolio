
import React from 'react';

import styles from './Nav.module.css'; // Assuming you have a CSS module for styles





function Nav() {
  return (
    <div className={styles.navContainer}>
   <nav>
    <ul>
        <li style={{display: 'flex',flexDirection: 'column'}}> 
           <img src="/icons/home.png" />
       </li> 
       <li> 
           <img src="/icons/folder.png" />
       </li>  
       <li> 
           <img src="/icons/suitcase.png" />
       </li>  
       <li> 
           <img src="/icons/skills.png" />
       </li>  
       <li> 
           <img src="/icons/blogger.png" />
       </li>   
        </ul>
   </nav>
   </div>
  );
}

export default Nav;