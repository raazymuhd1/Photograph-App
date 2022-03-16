import Link from "next/link"
import styles from "../../styles/Header.module.css"
import { FaCamera } from "react-icons/fa"

const Header = () => {
  return (
    <div className={`${styles.header} flex mb-20 justify-between items-center px-24 py-10`}>
        <div className="left-header flex items-center">
            <FaCamera className="text-5xl" />
            <h2 className="header-title ml-2 text-xl font-semibold tracking-widest"> Raazy <br/> <span className="text-gray-400 tracking-tight">photography</span> 
            </h2>
        </div>
        <div className="center-header flex">
            <li className={`${styles.headerList} font-extrabold`}>
                <Link href="#">Home</Link>
            </li>
            <li className={`${styles.headerList} text-gray-500 font-semibold`}>
                <Link href="#">About</Link>
            </li>
            <li className={`${styles.headerList} text-gray-500 font-semibold`}>
                <Link href="#">Explore</Link>
            </li>
            <li className={`${styles.headerList} text-gray-500 font-semibold`}>
                <Link href="#">Blog</Link>
            </li>
            <li className={`${styles.headerList} text-gray-500 font-semibold`}>
                <Link href="#">Contact</Link>
            </li>
        </div>
        <div className="right-header">
            <button className="contact-btn bg-slate-800 text-white px-5 py-2 rounded-md"> Contact Us </button>
        </div>
    </div>
  )
}

export default Header