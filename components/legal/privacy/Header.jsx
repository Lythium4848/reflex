import getConfig from 'next/config'
import {motion} from "framer-motion";

const { publicRuntimeConfig } = getConfig()

export default function Header() {
    return (
        <div className="relative mt-24 overflow-hidden">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <a className="flex items-center mb-4 sm:mb-0">
                    <img src={`${publicRuntimeConfig.logo}`} className="mx-auto h-32" alt="Logo" draggable="false"/>
                </a>
            </motion.div>
            <h1 className="dark:text-white text-black text-5xl antialiased font-bold text-center">{publicRuntimeConfig.privacyTitle}</h1>
            <h1 className="mt-4 dark:text-white text-black text-xl antialiased text-center">{publicRuntimeConfig.privacyDesc}</h1>
        </div>
    )
}