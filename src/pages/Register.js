import Form from "../components/forms/Form";
import { toast } from "react-toastify";

const Register = ()=>{

    return(
        <div className="w-full h-screen relative">
        <section className="w-full h-screen bg-slate-400 flex flex-row justify-center items-center overflow-hidden">
            <div className="absolute z-20 top-10 left-10 hidden sm:block text-2xl font-bold text-white">
            <h1>CavinTek</h1>
            </div>
            <div className="absolute">
            <Form />
            </div>
            <div
            className="absolute inset-0 bg-[url('../assets/loginBackground.avif')]"
            style={{
                backgroundSize: 'cover',
                filter:"brightness(40%)"
            }}
            ></div>
        </section>
        </div>
    )
}

export default Register;

{/* <div className="w-full h-screen bg-slate-400 flex flex-row justify-center items-center 
bg-[url('../assets/loginBackground.avif')] relative overflow-hidden blur-sm">
   <div className="absolute top-2 left-2 text-2xl font-bold text-white">
       <h1>CavinTek</h1>
   </div>
   <div className="">
       <Form/>
   </div>
</div> */}