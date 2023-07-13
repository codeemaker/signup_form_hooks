import { useEffect, useRef, useState } from "react";

const Cursor=()=>{

    const [load,setload]=useState(false);
    const circleDot=useRef();
    const circleOutline=useRef();

    const handleMouseMove = (e)=>{
        console.log(e.clientX,e.clientY);
        setload(!load);
        circleDot.current.style.left=e.clientX+"px";
        circleDot.current.style.top=e.clientY+"px";
        
        circleOutline.current.animate({
            left:e.clientX+"px",
            top:e.clientY+"px"
        },{
            duration:1000,
            fill:"forwards"
        })
    }

    useEffect(()=>{
        window.addEventListener("mousemove",handleMouseMove);
        return()=>{
            window.removeEventListener("mousemove",handleMouseMove);
        }
    },[])

    return(
        <>
            <div ref={circleDot} className="circle-dot"></div>
            <div ref={circleOutline} className="circle-outline"></div>
        </>
    )
}

export default Cursor;