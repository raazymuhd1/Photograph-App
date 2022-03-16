import Image from "next/image"
import { FaPlay } from "react-icons/fa";
import styles from "../../styles/Hero.module.css"
import cam from "../../public/camera.jpg"
import photograph from "../../public/photograph.jpg"

const Hero = () => {
  return (
    <div className={`${styles.hero} grid grid-cols-2 gap-20 w-full items-center justify-items-center mb-40`}>
        <div className="hero-left flex flex-col">
            <h2 className="uppercase mb-6 text-7xl"> Capturing <br /> Beauty Photo </h2>
            <p className="capitalize mb-6 font-semibold text-lg text-gray-500"> a camera is an optical instrument that <br />
                capture a visual image at their most basic <br />
                camera are sealed boxes
            </p>
            <div className="flex items-center left-hero_buttons mb-6">
                <button className="bg-slate-800 px-5 py-2 mr-8 text-white rounded-md">Get Started</button>
                <button className="inline-flex items-center border-2 border-black px-5 py-1.5 rounded-md font-semibold"> <FaPlay className="mr-2" /> Demo Video </button>
            </div>
            <div className="small-details w-80 p-1 rounded-md mt-6 bg-gray-200 flex items-center">
                <Image className="rounded-lg" src={cam}  alt="" height="100" width="100" placeholder="blur" />
                <div className="small-details-info ml-6">
                    <h3 className="text-sm font-semibold"> Next Post </h3>
                    <p className="text-xs capitalize mt-2">Visual image at their most basic <br />
                       camera are sealed boxes
                    </p>
                </div>
            </div>
        </div>
        <div className="hero-right">
            <Image className="rounded-md shadow-lg shadow-black" src={photograph} alt="photograph" height="400" width="500" placeholder="blur" />
        </div>
    </div>
  )
}

export default Hero