import getConfig from 'next/config'
import {motion} from "framer-motion";

const { publicRuntimeConfig } = getConfig()
const features = publicRuntimeConfig.features

export default function Features() {
    return (
        <div>
            <h1 className="dark:text-white text-black text-3xl antialiased font-bold text-center">{publicRuntimeConfig.featuresTitle}</h1>
            <h2 className="dark:text-gray-300 text-black text-xl antialiased font-bold text-center">{publicRuntimeConfig.featuresDesc}</h2>

            <div className="flex justify-center">
                <div className="py-5 grid grid-flow-col">
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400" key="features-ul">
                        {features.map((feature, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    className="flex justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ scale: 0 }}
                                    animate={{ rotate: 360, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    }}
                                >
                                    <li
                                       className={`box m-6 block p-6 max-w-sm bg-slate-300 rounded-lg border border-transparent hover:border-${publicRuntimeConfig.primaryCol} shadow-md dark:bg-neutral-800 max-w-xs`}>
                                        <a className="flex items-center sm:mb-0">
                                            <i className={`${feature.icon} fa-3x mx-auto text-black dark:text-white`}></i>

                                        </a>
                                        <h5 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{feature.title}</h5>
                                        <h6 className="font-normal text-gray-700 dark:text-gray-400 text-md text-center">{feature.description}</h6>
                                    </li>
                                </motion.div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}