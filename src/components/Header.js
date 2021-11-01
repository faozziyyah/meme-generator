import React from "react"
import styles from "../App.Module.css"

function Header() {
    return (
        <header className={styles.header}>
            <img 
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
                className={styles.image}
            />
            <p className={styles.p1}>Meme Generator</p>
        </header>
    )
}

export default Header