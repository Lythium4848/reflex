import Link from 'next/link'
import getConfig from 'next/config'
import {useTheme} from 'next-themes'
import {Menu, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {ChevronDownIcon} from '@heroicons/react/solid'
import { useSession, signIn, signOut } from "next-auth/react"

const {publicRuntimeConfig} = getConfig()
const navLinks = publicRuntimeConfig.navLinks

const Navbar = ({user}) => {
    const {theme, setTheme} = useTheme()
    const { data: session } = useSession()
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            <nav className='flex items-center flex-wrap p-3 bg-slate-300 border-gray-200 rounded dark:bg-neutral-800'>
                <Link href="/#">
                    <a className="flex items-center">
                        <img src={`${publicRuntimeConfig.logo}`} className="mr-3 h-6 sm:h-9" alt="Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{`${publicRuntimeConfig.name}`}</span>
                    </a>
                </Link>
                <button className='inline-flex p-3 hover:bg-slate-400 dark:hover:bg-neutral-900 rounded lg:hidden ml-auto outline-none' onClick={handleClick}>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
                    </svg>
                </button>
                <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                        {navLinks.map((navLink, number) => {
                            return (
                                <div key={number}>
                                    {navLink.dropdown === undefined && <Link href={navLink.path}>
                                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-slate-400 dark:hover:bg-neutral-900'>
                                            {navLink.name}
                                        </a>
                                    </Link>}
                                    {navLink.dropdown !== undefined && <Menu>
                                        <Menu.Button
                                            className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-slate-400 dark:hover:bg-neutral-900'>
                                            {navLink.name}
                                            <ChevronDownIcon
                                                className="ml-1 -mr-1 h-5 w-5 text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                className="absolute mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-slate-300 dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="px-1 py-1 ">
                                                    {navLink.dropdown.map((links, n) => {
                                                        return (
                                                            <div key={n}>
                                                                <Menu.Item>
                                                                    {({}) => (
                                                                        <Link href={links.path}
                                                                              className={`group flex w-full items-center rounded-md px-2 py-2 text-sm font-bold`}>
                                                                            <button
                                                                                className={`group flex w-full items-center rounded-md px-2 py-2 text-sm font-bold hover:bg-slate-400 dark:hover:bg-neutral-900`}>
                                                                                {links.name}
                                                                            </button>
                                                                        </Link>
                                                                    )}
                                                                </Menu.Item>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>}
                                </div>
                            )
                        })}
                        <div>
                            {session != null &&
                                <Menu>
                                    <Menu.Button
                                        className='lg:inline-flex lg:w-auto w-full pl-3 py-2 rounded font-bold items-center justify-center hover:bg-slate-400 dark:hover:bg-neutral-900'>
                                        {session.user.name}
                                        <img src={`${session.user.image}`} className="mr-3 h-5 sm:h-9 rounded-md ml-2"
                                             alt="Logo"/>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            className="absolute right-0 mt-2 mx-4 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-slate-300 dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({}) => (
                                                        <a href={`/users/me`}>
                                                            <button className={`group flex w-full items-center rounded-md px-2 py-2 text-sm font-bold hover:bg-slate-400 dark:hover:bg-neutral-900`}>
                                                                My Profile
                                                            </button>
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({}) => (
                                                        <div>
                                                            <button
                                                                onClick={() => signOut()} className={`group flex w-full items-center rounded-md px-2 py-2 text-sm font-bold hover:bg-slate-400 dark:hover:bg-neutral-900`}>
                                                                Logout
                                                            </button>
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({}) => (
                                                        <button
                                                            className={`group flex w-full items-center rounded-md px-2 py-2 text-sm font-bold hover:bg-slate-400 dark:hover:bg-neutral-900`}
                                                            onClick={toggleTheme}>
                                                            Switch Theme
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            }
                            {session === undefined &&
                                <div>
                                    <Link href="/login">
                                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-slate-400 dark:hover:bg-neutral-900'>
                                            Login
                                        </a>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>)
}

export default Navbar;