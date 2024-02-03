
import React, { useState, useEffect } from 'react';
//Pakage
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { validata } from '../../constants/validata';
import { notify } from '../../constants/toast';
import { Link } from 'react-router-dom';

//Styles
import styles from "./SignUp.module.css"

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validata(data, "signup"))
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

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You signed in succesfully", "succes")
        } else {
            notify("Invalid data!", "error")
            setTouched({
                name: true,
                email: true,
                confirmPassword: true,
                password: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.formTitle}>SignUp</h2>
                <div className={styles.formFiled}>
                    <input placeholder="Name" className={(errors.name && touched.name) ? styles.uncompleted + ' ' + styles.formInput : styles.formInput}
                        type="text"
                        name='name'
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formFiled}>
                    <input placeholder="Email" className={(errors.email && touched.email) ? styles.uncompleted + ' ' + styles.formInput : styles.formInput}
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
                <div className={styles.formFiled}>
                    <input placeholder="ConfirmPassword" className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted + ' ' + styles.formInput : styles.formInput}
                        type='password'
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formFiled}>
                    <div className={styles.checkBoxContainer}>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            defaultChecked={true}
                            id='remember'
                        />
                        <label for='remember'>Remember me</label>

                    </div>
                </div>
                <div className={styles.formButtons}>
                    <Link to="/signin">Sign In</Link>
                    <button className={styles.btnsignup} type='submit'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;