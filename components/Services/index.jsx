import { Fragment } from "react"
import { services } from "./serviceData.js"
import styles from "../../styles/Services.module.css"

const Services = () => {
  return (
    <div className={`${styles.services}`}>
        <div className="flex justify-between service-top items-center mb-20">
            <h2 className="uppercase text-6xl"> service we <br /> provide </h2>
            <p className="capitalize font-semibold text-lg text-gray-500"> Marks and Devious Semikoli, but the little Blind Text <br />
                didn't listen, She packed her seven versalia, put her <br />
                initial into the belt and made herself on the way
            </p>
        </div>
        <div className="service-bottom flex justify-around">
            { services.map(service => (
                <div key={service.id} className="w-64 p-4">
                    <service.img className="text-7xl mb-5" />
                    <h2 className="font-bold text-3xl"> { service.title } </h2>
                    <p className="font-semibold text-sm text-gray-500 break-normal"> { service.desc } </p>
                </div>
            )) }
        </div>
    </div>
  )
}

export default Services