import { twMerge } from "tailwind-merge";

const FormLabelInput=({type,label,id,className,register,errors})=>{
    return(
        <div className={twMerge("relative w-50 sm:w-72 mb-1 sm:mb-4",className)}>
            <input type={type} id={id} {...register} className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor={id} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                {label}</label>
                { errors[id] ? <span className="text-error">{errors[id].message}</span> : <></> }
        </div>
    )
}

export default FormLabelInput;