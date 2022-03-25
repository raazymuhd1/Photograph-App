import styles from "../../styles/Portfolio.module.css"
import photo1 from "../../public/photo1.jpg"
import photo2 from "../../public/photo2.jpg"
import photo3 from "../../public/photo3.jpg"
import photo4 from "../../public/photo4.jpg"
import Image from "next/image"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const Portfolio = () => {
  return (
    <div className={`${styles.portfolio} mt-16 md:mt-0`}>
        <div className="portfolio-top flex flex-col md:flex-row justify-between items-center">
            <div className="details flex flex-col justify-between">
                <h2 className="uppercase text-6xl"> OUR PORTFOLIO </h2>
                <span className="font-semibold text-lg text-gray-500 mt-8 md:mt-0 mb-6"> capturing people and moments </span>
            </div>
            <p className="font-semibold text-lg text-gray-500 leading-8 mb-16"> Marks and Devious Semikoli, but the little Blind Text <br />
                didn't listen, She packed her seven versalia, put her <br />
                initial into the belt and made herself on the way
            </p>
        </div>
        <div className ={`${styles.portfolio_center} mt-4 md:mt-8 mb-16`}>
             <Image className={`${styles.img1}`} src={photo1} alt="photo1" height="300" width="300" placeholder="blur" />
             <Image className={`${styles.img2}`} src={photo2} alt="photo2" height="300" width="300" placeholder="blur" />
             <Image className={`${styles.img3}`} src={photo3} alt="photo3" height="300" width="300" placeholder="blur" />
             <Image className={`${styles.img4}`} src={photo4} alt="photo4" height="300" width="300" placeholder="blur" />
        </div>
        <div className="portfolio_bottom flex justify-between">
             <button className="bg-slate-800 px-10 py-3 rounded-md text-white"> Contact Us </button>
             <div className="bottom_right grid grid-cols-2 gap-10 items-center">
                 <AiOutlineArrowLeft className="bg-slate-800 rounded-md text-6xl px-4 py-3 text-white" />
                 <AiOutlineArrowRight className="border-black border-2 rounded-md text-6xl px-4 py-3" />
             </div>
        </div>
    </div>
  )
}

export default Portfolio