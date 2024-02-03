//Styles
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div>
                <p>Questions? Contact us.</p>
                <ul className={styles.footerLinks}>
                    <li><span>FAQ</span></li>
                    <li><span>Help Centre</span></li>
                    <li><span>Terms of Use</span></li>
                    <li><span>Privacy</span></li>
                    <li><span>Cookie Preferences</span></li>
                    <li><span>Corporate Information</span></li>
                    <li><span>Advert choices</span></li>
                </ul>
                <select className={styles.select}>
                    <option>English</option>
                    <option>Nederlands</option>
                </select>
            </div>
        </footer>
    );
};

export default Footer;