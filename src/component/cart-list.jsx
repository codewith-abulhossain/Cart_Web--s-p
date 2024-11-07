import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Loading from "./loading.jsx";
import {CartListRequest, RemoveCartRequest} from "../APIRequest/APIRequest.js";
import {toast} from "react-hot-toast";

const CartList = () => {
    let [loading, setLoading] = useState("d-none");
    let [list, setList] = useState(null);
    let [refresh,setRefresh] = useState(0);
    let navigate = useNavigate();


    useEffect(() => {
        (async () => {
            setLoading("");
            let res= await CartListRequest();
            setLoading("d-none");
            setList(res);
        })()
    },[refresh])



    const RemoveCart=async (id)=> {
        if (sessionStorage.getItem('token')) {
            setLoading("");
            let res = await RemoveCartRequest(id)
            setRefresh(refresh+1);
            setLoading("d-none");

            if (res === "success") {
                toast.success("Request successful!")
            } else {
                toast.error("Request fail !")
            }
        } else {
            toast.error("Please login")
            navigate("/login")
        }

    }



        return (
        <>
            <div className={loading}><Loading/></div>
            <div className="container section">
                <div className="row">
                    {
                        list !== null && list.map((item, index) => {
                            return (
                                <div key={index} className="col-md-3 p-3">
                                    <div
                                        className="card animate__animated animate__fadeIn shadow-sm rounded-3 border-0 p-0">
                                        <img className="card-img-top w-100" src={item['product']['image']} alt=""/>
                                        <div className="card-body">
                                            <p className="p-1 fw-light m-0">{item['product']['title']}</p>
                                            <p className="p-1 fw-bold m-0">BDT {item['product']['price']}</p>
                                            <button onClick={async ()=>{await RemoveCart(item['product']['id'])}} type="button" className="btn mt-2 float-end fw-light btn-danger">
                                                Remove
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default CartList;