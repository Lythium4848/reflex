import getConfig from 'next/config'
import React, { useState, useEffect } from 'react'
import {motion} from "framer-motion";
const { publicRuntimeConfig } = getConfig()
const servers = publicRuntimeConfig.servers
const axios = require('axios');

const gameNames = {
    garrysmod: 'Garry\'s Mod',
    minecraft: 'Minecraft',
    minecraftbe: 'Minecraft Bedrock',
    csgo: 'CS:GO',
    fivem: 'FiveM',
    terraria: 'Terraria'
}


export default function Servers() {

    return (
        <div>
            <h1 className="dark:text-white text-black text-3xl antialiased font-bold text-center">{publicRuntimeConfig.serversTitle}</h1>
            <h2 className="dark:text-gray-300 text-black text-xl antialiased font-bold text-center">{publicRuntimeConfig.serversDesc}</h2>
            <div className="flex justify-center">
                <div className="py-5 grid grid-flow-col">
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        {servers.map((server, index) => {
                            const [players, setPlayers] = useState("Offline");
                            const [maxPlayers, setMaxPlayers] = useState("Offline");

                            async function updateInfo(data) {
                                setPlayers(data.players)
                                setMaxPlayers(data.maxPlayers)
                            }
                            const ip = server.ip
                            const port = server.port
                            const type = server.type

                            useEffect(()=>{
                                axios.post(`${publicRuntimeConfig.url}/api/server?ip=${ip}&port=${port}&type=${type}`).then(res => {
                                    const data =  {
                                        players: res.data.state.players,
                                        maxPlayers: res.data.state.maxPlayers,
                                    }
                                    updateInfo(data).then(() => console.log(data))
                                    return data
                                }).catch(error => {
                                    console.error(error);
                                });
                            },[]);

                            return (
                                <motion.div
                                    key={index}
                                    className={`max-w-sm rounded-lg shadow-md bg-slate-300 dark:bg-neutral-800 m-6`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <a>
                                        <img className={`border-b-2 border-solid border-${server.color} object-cover rounded-t-lg h-48 w-full`}
                                             src={server.img} alt="Server Image"/>
                                    </a>
                                    <div className="mx-4 my-4 p-2">

                                        {players !== "Offline" && <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{server.name} - {players}<a className="text-sm text-gray-700 dark:text-gray-400">/{maxPlayers}</a></h5>}
                                        {players === "Offline" && <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{server.name} - <a className="text-lg text-red-500">Offline</a></h5>}
                                        <a className="text-xs uppercase font-extrabold text-gray-700 dark:text-gray-400">{gameNames[server.type]}</a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{server.description}</p>
                                        <a href={`steam://connect/${server.ip}`}
                                           className={`inline-flex items-center py-2 px-3 mt-2 text-sm font-medium text-center text-black dark:text-white bg-primary rounded-lg hover:bg-indigo-700`}>
                                            Join Server
                                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                      />
                                            </svg>
                                        </a>
                                        {server.port != null && <a
                                           className="ml-4 py-1 px-2 text-xs font-medium text-center text-white bg-gray-600 dark:bg-gray-500 rounded-lg">
                                            {server.ip}:{server.port}
                                        </a>}
                                        {server.port == null && <a
                                            className="ml-4 py-1 px-2 text-xs font-medium text-center text-white bg-gray-600 dark:bg-gray-500 rounded-lg">
                                            {server.ip}
                                        </a>}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}