import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { useRef } from "react"

const Cardspopup = () => {
    const containerref = useRef();
    useGSAP(()=>{
        const tl = gsap.timeline({});
        tl.to(containerref,{
            
        })
    },[])
    return (
        <div ref={containerref} className=" h-screen flex justify-center items-center gap-10">
            {/* <Folder
                color={"#525694"}
                img2="https://images.unsplash.com/photo-1757589815261-89c790bb3241?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                img={"https://images.unsplash.com/photo-1756680967220-be6bf89275a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <Folder
                color={"#fff"}
                img2="https://images.unsplash.com/photo-1757752463419-4f0788b2b544?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
                img={"https://images.unsplash.com/photo-1757752463172-d0e65ad7d72b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"} />
            <Folder
                color={"orange"}
                img2="https://images.unsplash.com/photo-1757582780671-e2ecf5d1aa3f?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                img={"https://images.unsplash.com/photo-1458780723632-e6736ffcf4d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"}
            /> */}
        </div>
    )
}

const Folder = ({ color, img, img2 }) => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="relative flex justify-center items-center card_container ">
                <div className="flex cover_shadow justify-center absolute top-[4.6px] rounded-t-[1px]  left-0 z-[-2] w-[4rem] h-[1rem] " style={{ backgroundColor: color }}>
                    <div className="svg_clip"></div>
                    <div className="svg_clip_2 rounded-tr-sm rotate-[180deg] bg-black"></div>
                </div>
                <svg className="svg relative w-[5rem] h-[10rem] rounded-lg" width="335" height="262" viewBox="0 0 335 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 49H330C332.761 49 335 51.2386 335 54V257C335 259.761 332.761 262 330 262H5C2.23857 262 0 259.761 0 257V49Z" fill={color} />
                </svg>
                <div className="cards_2 w-full h-full bg-white">
                    <img className="w-full h-full object-cover" src={img} alt="img" />
                </div>
                <div className="cards_3 w-full h-full bg-white">
                    <img className="w-full h-full object-cover" src={img2} alt="img" />
                </div>
            </div>
        </div >
    )
}



export default Cardspopup