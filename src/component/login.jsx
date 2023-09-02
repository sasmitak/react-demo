import { useState } from "react";
import './styling.css';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function Login() {

    const [theme, setTheme] = useState("bg-secondary text-white p-3");
    const [buttonTheme, setButtonTheme] = useState('btn btn-dark btn-rounded w-100');

    const navigate = useNavigate();

    function handleThemeChange(e) {
        if (e.target.checked) {
            setTheme('bg-dark text-white p-3');
            setButtonTheme('btn btn-primary btn-rounded w-100');
        } else {
            setTheme('bg-secondary text-white p-3');
            setButtonTheme('btn btn-dark btn-rounded w-100');
        }
    }

    const formik = useFormik({
        initialValues: {
            "UserName": "",
            "Password": ""
        },
        validationSchema: yup.object({
            "UserName": yup.string()
                .required("UserName Required"),
            "Password": yup.string()
                .required("Password Required")
                .matches(/(?=.*[A-Z])\w{4,8}$/, "Password Must be 4 to 8 chars alpha numeric with atleast one uppercase letter."),
        }),
        onSubmit: (values) => {
        
             const userArr = JSON.parse(localStorage.getItem("userRegister")) || [];
             console.log(typeof(userArr));

             if(userArr.UserName === values.UserName && userArr.Password === values.Password){
                alert("Login Successfully...");
                navigate("/posts");
             }else{
                alert("Invalid Credential");
                navigate("/error");
             }
             
        },


    })


    return (
        <div className="container-fluid">
            <div className="form-content" style={{ height: '600px' }}>
                <form className={theme} onSubmit={formik.handleSubmit}>
                    <div className="mt-3 mb-4 form-switch">
                        <input type="checkbox" onChange={handleThemeChange} className="form-check-input" />Dark Mode
                    </div>
                    <h3>User Login<span className="bi bi-person-fill text-success"></span></h3>
                    <dl>
                        <dt>UserName</dt>
                        <dd><input type="text" onChange={formik.handleChange} name="UserName" className="form-control mt-2" /></dd>
                        <dd className="text-info">{formik.errors.UserName}</dd>
                        <dt>Password</dt>
                        <dd><input type="password" onChange={formik.handleChange} name="Password" className="form-control mt-2" /></dd>
                        <dd className="text-info">{formik.errors.Password}</dd>
                    </dl>
                    <p>Forgot Password?</p>
                    <button type="submit" className={buttonTheme}>Login</button>
                    <div className="d-flex flex-column align-items-center mt-3">
                        <p>Or</p>
                        <p>Login With</p>
                    </div>
                    <div className="d-flex justify-content-center mt-1" style={{ fontSize: "20px" }}>
                        <a href="#"><span className="bi bi-facebook me-4 text-info"></span></a>
                        <a href="#"><span className="bi bi-instagram me-4 text-danger"></span></a>
                        <a href="#"><span className="bi bi-twitter me-4 text-primary"></span></a>
                        <a href="#"><span className="bi bi-linkedin me-4 text-warning"></span></a>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        <p>New User Register ?</p>
                        <Link to="/register"><span className="bi bi-arrow-right-square-fill" style={{ fontSize: "20px" }}></span></Link>
                    </div>
                </form>

            </div>
        </div>
    )
} 