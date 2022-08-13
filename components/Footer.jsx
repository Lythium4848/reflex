import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const footerLinks = publicRuntimeConfig.footerLinks

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="p-4 bg-slate-300 rounded-lg shadow md:px-6 md:py-8 dark:bg-neutral-800">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a className="flex items-center mb-4 sm:mb-0">
                            <img src={`${publicRuntimeConfig.logo}`} className="mr-3 h-8" alt="Logo"/>
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{`${publicRuntimeConfig.name}`}</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                            {footerLinks.map((footLink, index) => {
                                return (
                                    <li key={index}>
                                        <a href={footLink.path}
                                           className="mr-4 hover:underline md:mr-6 ">{footLink.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a
                        href="https://flowbite.com/" className="hover:underline">{`${publicRuntimeConfig.name}™`}</a>. All Rights Reserved.
    </span>
                </div>
            </footer>
        </div>
    )
}