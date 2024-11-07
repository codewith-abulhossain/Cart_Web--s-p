//

import axios from "axios";

export const UserLoginRequest=async (UserEmail)=>{
     let URL="https://cart-api.teamrabbil.com/api/user-login"
     let res=await axios.post(URL,{
         UserEmail:UserEmail
     })
     return res.data['data']
}


export const VerifyLoginRequest=async (OTP)=>{
    let URL="https://cart-api.teamrabbil.com/api/verify-login"
    let res=await axios.post(URL,{
        UserEmail:sessionStorage.getItem("email"),
        OTP:OTP
    })
    return res.data['data']
}


export const ProductListRequest=async ()=>{
    let URL="https://cart-api.teamrabbil.com/api/product-list"
    let res=await axios.get(URL)
    return res.data['data'];
}



export const CreateCartRequest=async (id)=>{
    let header={ 'headers': { 'token':sessionStorage.getItem('token') }};
    let URL=`https://cart-api.teamrabbil.com/api/create-cart/${id}`
    let res=await axios.get(URL,header)
    return res.data['msg'];
}

export const RemoveCartRequest=async (id)=>{
    let header={ 'headers': { 'token':sessionStorage.getItem('token') }};
    let URL=`https://cart-api.teamrabbil.com/api/remove-cart/${id}`
    let res=await axios.get(URL,header)
    return res.data['msg'];
}


export const CartListRequest=async ()=>{
    let header={ 'headers': { 'token':sessionStorage.getItem('token') }};
    let URL=`https://cart-api.teamrabbil.com/api/cart-list`
    let res=await axios.get(URL,header)
    return res.data['data'];
}


