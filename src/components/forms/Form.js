import { forwardRef } from "react";
import Button from "../button";
import FormLabelInput from "../formLabelInput";
import FormRadioInput from "../formRadioInput";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";

const Schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('Email is required'),
    phno: yup
    .string()
    .required('Phone number is required')
    .matches(
        /^[0-9]{10}$/,
      'Phone number must be a valid 10-digit number'
    ),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
    rpassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
  

const Form = forwardRef((props,ref)=>{

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver:yupResolver(Schema)
    });

    // console.log(errors);

    const onSubmit = (data)=>{
        console.log(data)
        toast.success("Registered successfully");
    }

    return(
    <form ref={ref} onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="formCard flex flex-col relative z-10 blur-none bg-white p-7 sm:p-12 rounded-md justify-center items-center w-full h-full">
        <div className="flex flex-row justify-center items-center font-bold gap-2">
            <FontAwesomeIcon icon={faSignIn}/>
            <h1 className="text-lg">Register</h1>
        </div>
        <FormLabelInput errors={errors} register={register("name")} type="text" label="Enter name" id="name"/>
        <FormLabelInput errors={errors} register={register("email")} type="email" label="Enter email" id="email"/>
        <FormLabelInput errors={errors} register={register("phno")} type="number" label="Enter phno" id="phno"/>
        <FormLabelInput errors={errors} register={register("password")} type="password" label="Enter password" id="password"/>
        <FormLabelInput errors={errors} register={register("rpassword")} type="password" label="Re-Enter password" id="rpassword"/>
        <Button className="bg-primary mx-4 px-4 text-white font-bold shadow-md hover:px-4 transition delay-150 duration-300 ease-in-out">Submit</Button>
        <hr className="my-3"/>
        <div>
            <div>
                <h1>Or sign up using </h1>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 mt-2">
            <FontAwesomeIcon className="text-xl" icon={faGoogle}/>
            <FontAwesomeIcon className="text-xl" icon={faFacebook}/>
            <FontAwesomeIcon className="text-xl" icon={faLinkedin}/>
            </div>
        </div>
    </form>
    )
})

export default Form;