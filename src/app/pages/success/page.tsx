import LeftArrow from "@/app/common/components/_atoms/Icons/leftArrow";
import Link from "next/link";

const success = () => {
    return (
        <div className="h-screen bg-[#0E1E25] flex items-center justify-center px-4">
            <div className="px-8 py-5 grid gap-2 rounded-xl bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <h1 className="font-bold text-[20px] sm:text-[25px] text-center">Thank you!</h1>
                <p className="text-center">Your form submission has been received.</p>
                <Link href={"/"}>
                    <div
                        className="flex justify-center hover:underline hover:decoration-amber-300 gap-1 cursor-pointer items-center text-[#007067] font-bold">
                        <LeftArrow width={16} height={16}/>
                        <p>Back to our site</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default success;
