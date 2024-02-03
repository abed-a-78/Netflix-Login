
import { Redirect, Route, Switch } from "react-router-dom";
//Components
import SignUp from "../signup&signing/SignUp";
import SingIn from "../signup&signing/SignIn";
import Footer from "../footer/Footer";
//Styles
import styles from "./Landing.module.css";

//image
import Logo from "../../assets/images/Logo.png";

const Landing = () => {
    return (
        <div className={styles.container}>
            <img className={styles.websiteLogo} src={Logo} alt="logo" />
            <Switch>
                <Route path="/signin" component={SingIn} />
                <Route path="/signup" component={SignUp} />
                <Redirect from='/' to="/signup" />
            </Switch>
            <Footer />
        </div>
    );
};

export default Landing;