import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { notify } from '../../constants/toast';
import { validata } from '../../constants/validata';

//Sryles
import styles from "./SignUp.module.css"


const SingIn = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [learnMore, setLearnMore] = useState({
        learnMore: false
    });

    useEffect(() => {
        setErrors(validata(data, "Sing In"))
    }, [data])


    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const clickHandler = () => {
        setLearnMore({ learnMore: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You loged in succesfully", "succes")
        } else {
            notify("Invalid data!", "error")
            setTouched({
                email: true,
                password: true,
            })
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.formTitle}>Sing In</h2>
                <div className={styles.formFiled}>
                    <input placeholder="Email or phone number" className={(errors.email && touched.email) ? styles.uncompleted + ' ' + styles.formInput : styles.formInput}
                        type="text"
                        name='email'
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formFiled}>
                    <input placeholder="Password" className={(errors.password && touched.password) ? styles.uncompleted + ' ' + styles.formInput : styles.formInput}
                        type='password'
                        name='password'
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler} />

                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <button type='submit' className={styles.btnsignin}>Sign In</button>
                <div className={styles.formFiled}>
                    <div className={styles.checkBoxContainer}>
                        <input
                            type="checkbox"
                            value={data.isAccepted}
                            onFocus={focusHandler}
                            defaultChecked={true}
                            id='remember'
                        />
                        <label for='remember'>Remember me</label>
                    </div>
                    <Link>Need help?</Link>
                </div>
                <div className={styles.formSuggest}>
                    <span >
                        New to Netflix?
                        <Link to="/signup"> Sign up now</Link>
                    </span>
                    <p>This page is protected by google re CAPTCHA to ensure you're not a bot. {!learnMore.learnMore && <span className={styles.textLink} onClick={clickHandler}>Learn more</span>}</p>

                    <p className={learnMore.learnMore ? styles.show : styles.hide}>
                        The information collected by Google reCAPTCHA is subject to the Google
                        <span className={styles.textLink}>Privacy Policy</span> and <span className={styles.textLink}>Terms of Service</span>, and is used for providing, maintaining and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};


export default SingIn;