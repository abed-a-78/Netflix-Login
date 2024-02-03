import React from 'react';

//Styles
import styles from "./Banner.module.css"

//image logo
import banner from "../images/NL-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img className={styles.banner} src={banner} alt="banner" />
        </div>
    );
};

export default Banner;