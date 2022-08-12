import getConfig from 'next/config'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const { publicRuntimeConfig } = getConfig()
const details = publicRuntimeConfig.termsDetails

export default function Details() {
    return (
        <div>
            <div className="w-full px-4 pt-4 mb-16">
                <div className="mx-auto w-full lg:max-w-5xl md:max-w-lg sm:max-w-md rounded-2xl bg-slate-300 dark:bg-neutral-800 p-2 pt-0.5">
                    {details.map((detail, index) => {
                        return (
                            <div key={index}>
                                <Disclosure as="div" className="mt-2">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-slate-300 dark:bg-neutral-800 px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-slate-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                <span>{detail.title}</span>
                                                <ChevronUpIcon
                                                    className={`${
                                                        open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-primary`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:text-gray-400">
                                                {detail.description}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}