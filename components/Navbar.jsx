import Link from 'next/link'
import getConfig from 'next/config'
import {useTheme} from 'next-themes'
import {useState} from 'react'

const {publicRuntimeConfig} = getConfig()
const navLinks = publicRuntimeConfig.navLinks

export default function Navbar() {
    const {theme, setTheme} = useTheme()
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }

    return (<div>
            <nav className='flex items-center flex-wrap p-3 bg-slate-300 border-gray-200 rounded dark:bg-neutral-800'>
                <Link href="/#">
                    <a className="flex items-center">
                        <img src={`${publicRuntimeConfig.logo}`} className="mr-3 h-6 sm:h-9" alt="Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{`${publicRuntimeConfig.name}`}</span>
                    </a>
                </Link>
                <button
                    className='inline-flex p-3 hover:bg-slate-400 dark:hover:bg-neutral-900 rounded lg:hidden ml-auto outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>
                <div
                    className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div
                        className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                        {navLinks.map((navLink, number) => {
                            return (
                                <div key={number}>
                                    <Link href={navLink.path}>
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-slate-400 dark:hover:bg-neutral-900'>
                                        {navLink.name}
                                    </a>
                                </Link>
                                </div>
                                    )
                        })}
                        <div
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-slate-400 dark:hover:bg-neutral-900">
                            <button type="button" onClick={() => {
                                if (theme === "light") {
                                    setTheme("dark")
                                } else {
                                    setTheme('light')
                                }
                            }}>
                                <i className="fa-solid fa-eclipse"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>)
}