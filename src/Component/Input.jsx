import React,{ useId } from "react";
import { forwardRef } from "react";

const Input=forwardRef(function Input({
    title,type="text",placeholder,className='',...props
},ref){
const id=useId();
return(
    <>
    <label>
        {title}
        <input id={id} type={type} placeholder={placeholder} className={`border-2 border-black rounded-lg${className}`}{...props} ref={ref} />
    </label>
    </>
)
})
export default Input