import React from "react";

import styles from "../src/App.module.css"

import Nav from "./Components/Navbar/Nav";
import Profile from "./Components/profilecard/profile";
import Home from "./Pages/Home"

function App() {
    return(
        < >
            <Nav/>
            <div className={styles.fit}>
           <div className={styles.rite}>

            <Profile/>
            <Home/>
            </div>
            </div>
        </>
    )
}

export default App;