import {SVGProps} from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    className?: string;
}

const LeftArrow: React.FC<IconProps> = ({ width, height, className }) => {

    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512">
            <path fill="#007067" d="M497.333 239.999H80.092l95.995-95.995l-22.627-22.627L18.837 256L153.46 390.623l22.627-22.627l-95.997-95.997h417.243z"/>
        </svg>
    )
}

export default LeftArrow