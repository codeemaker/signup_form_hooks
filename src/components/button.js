import { twMerge } from "tailwind-merge"


const Button = ({children,className,onClick})=>{
    return(
        <button className={twMerge("rounded bg-primary px-2 py-2",className)} 
        onClick={onClick}>{children}</button>
    )
}

export default Button;