import photograph2 from "../../public/photograph2.jpg";
import Image from "next/image"
import styles from "../../styles/About.module.css"

const About = () => {
  return (
    <div className={`${styles.about} flex justify-between items-center mb-28`}>
        <Image className="rounded-md" src={photograph2} alt="photograph2" height="400" width="500" placeholder="blur" />

        <div className="about-right">
            <h2 className="uppercase text-6xl font-medium"> About Us </h2>
            <p className="mt-8 capitalize font-semibold text-lg text-gray-500"> Alone all happy asked begin fully stand own get <br />
            excuse seeing result of we, see scale dried alone <br />
            all happy asked begin
            </p>
            <button className="bg-slate-800 rounded-md px-5 py-2 text-white mt-10"> Read More </button>
        </div>
    </div>
  )
}

export default About