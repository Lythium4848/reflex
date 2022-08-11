import getConfig from 'next/config'
import {motion} from "framer-motion";

const { publicRuntimeConfig } = getConfig()

export default function Header() {
    return (
        <div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <a className="flex items-center mb-4 sm:mb-0">
                    <img src={`${publicRuntimeConfig.logo}`} className="mx-auto h-32" alt="Logo" draggable="false"/>
                </a>
            </motion.div>
            <h1 className="dark:text-white text-black text-3xl antialiased font-bold text-center">Welcome To </h1>
            <h2 className="relative antialiased font-bold text-center text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 text-5xl">{publicRuntimeConfig.name}</h2>
            <h1 className="mt-4 dark:text-white text-black text-xl antialiased text-center">{publicRuntimeConfig.description}</h1>
        </div>
    )
}