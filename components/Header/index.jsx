import { useState, Fragment } from "react"
import Link from "next/link"
import styles from "../../styles/Header.module.css"
import { FaCamera } from "react-icons/fa"
import { CgDetailsMore, CgClose } from "react-icons/cg"

const Header = () => {
    const [show, setShow] = useState(false)

    const mobileNavbar = () => {
        setShow(prevState => !prevState);
    }

  return (
      <Fragment>
        <div className="small-header px-8 py-8 md:hidden flex justify-between">
    
        <CgDetailsMore onClick={mobileNavbar} className="text-5xl text-black cursor-pointer" />
        </div>

        <div className={`${styles.header} ${ show ? 'flex' : 'hidden' } md:flex flex-col justify-between md:flex-row items-center z-10 h-screen md:h-24`}>
            <div className="left-header flex items-center">
                <FaCamera className="text-5xl text-black" />
                <h2 className="header-title ml-2 text-xl font-semibold tracking-widest"> Raazy <br/> <span className="text-gray-400 tracking-tight">photography</span> 
                </h2>
            </div>
            <div className={`${styles.center_header} grid grid-cols-1 md:grid-cols-5 justify-center gap-10`}>
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
            <div className="right-header order-2 md:order-last">
                <button className={`${styles.contact_btn} bg-slate-800 text-white px-5 py-2 rounded-md`}> Contact Us </button>
            </div>
        </div>
    </Fragment>
  )
}

export default Header