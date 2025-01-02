import {ButtonProps} from "@/app/common/types/common";

const SubmitButton = ({className,onClick,disabled,children,type}:ButtonProps) => {
    return (
        <button className={className} onClick={onClick} type={type} disabled={disabled}>{children}</button>
    )
}

export default SubmitButton;