import styles from "../../styles/Testimonial.module.css"
import Image from "next/image"
import person from "../../public/person.jpg"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"

const Testimonial = () => {
  return (
    <div className={`${styles.testimoni} mt-28 flex justify-between`}>
      <div className="testimoni_details flex flex-col justify-between">
          <div className="info_details h-28 flex flex-col justify-between">
              <h2 className="uppercase text-6xl"> Testimonials </h2>
              <p className="capitalize font-semibold text-lg text-gray-500"> what our happy client's say </p>
          </div> 
          <div className="quote_details mt-8 mb-8">
            <ImQuotesLeft className="text-6xl" /> 
                <span className="text-3xl mt-4">
                 But nothing the copy said could convince <br />
                 her so it didn't take long until a few <br /> insidious 
                </span>
            <ImQuotesRight className="text-6xl ml-28 " /> 
          </div>
           <div className="person_details">
              <span className="font-semibold mb-3.5"> Shirline Dungey </span>
              <p className="text-gray-500"> UI/UX DESIGNER </p>
           </div>
      </div>
      
      <Image className="rounded-full shadow-md shadow-cyan-500/50" src={person} alt="testimoni photos" height="400" width="400" />
    </div>
  )
}

export default Testimonial