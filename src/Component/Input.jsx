import React,{ useId } from "react";
import { forwardRef } from "react";

const Input=forwardRef(function Input({
    title,type="text",placeholder,className='',...props
},ref){
const id=useId();
return(
    <>
   
        <input id={id} type={type} placeholder={placeholder} className={`${className}`}{...props} ref={ref} />
    <label  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">{title}</label>
    </>
)
})
export default Input