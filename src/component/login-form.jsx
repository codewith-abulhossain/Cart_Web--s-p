import {UserLoginRequest} from "../APIRequest/APIRequest.js";
import {toast} from "react-hot-toast";
import Loading from "./loading.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    let [loading, setLoading] = useState("d-none");
    let navigate = useNavigate();

    const submitForm=async (event)=>{
        event.preventDefault();
        let formData = new FormData(event.target);
        let email=formData.get('email');
        setLoading("");
        let data=await UserLoginRequest(email);
        setLoading("d-none");
        toast.success(data)
        sessionStorage.setItem('email',email);
        navigate("/verify")

    }



    return (
        <>
            <div className={loading}><Loading/></div>
            <div className="container section">
                <div className="row justify-content-center align-items-center">
                    <div className="col-5">
                        <div className="card mt-5 shadow-sm rounded-3 border-0 p-5">
                            <h4>Enter Your Email</h4>
                            <form onSubmit={submitForm}>
                                <input type="email" name="email" className="form-control mt-3"
                                       placeholder="Enter Your Email"/>
                                <button type="submit" className="btn w-100 mb-4 mt-3 btn-dark">Next</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;