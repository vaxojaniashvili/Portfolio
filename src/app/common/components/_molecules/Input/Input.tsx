import {InputProps} from "@/app/common/types/common";

const TextInput = ({className,type,onChange,placeholder,id,required}:InputProps) => {
    return (
        <input className={className} type={type} onChange={onChange} placeholder={placeholder} id={id} required={required}/>
    )
}

export default TextInput;