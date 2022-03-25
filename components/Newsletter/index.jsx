import styles from "../../styles/Newsletter.module.css"

const Newsletter = () => {
  return (
    <div className={`${styles.newsletter} flex flex-col justify-around items-center mt-28`}>
        <div className="newsletter_details h-40 flex flex-col justify-between items-center">
            <h2 className="uppercase text-6xl"> Newsletter </h2>
            <p className="font-semibold text-gray-500 font-normal text-2xl md:text-3xl">Enter your email and start to <br />
                collaborate a team with us
            </p>
        </div>
        <div className={`${styles.email_details}`}>
            <div className={`${styles.input_field} `}>
                <input type="text" className={`${styles.input} border-2 border-slate-500`} placeholder="Input your email" />
            </div>
            <button className="bg-slate-800 text-lg rounded-md px-6 py-4 font-semibold text-white"> Subscribe Now </button>
        </div>
    </div>
  )
}

export default Newsletter