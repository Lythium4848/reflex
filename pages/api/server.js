import cache from "memory-cache";
import axios from "axios";
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

const cachedFetch = async (req, res, ip, port) => {
    const cachedResponse = cache.get(`${ip}:${port}`);
    if (cachedResponse) {
        console.debug("getting from cache")
        res.status(200).json({ state: cachedResponse });
    } else {
        console.log("getting new")
        const response = await axios.get('https://api.steampowered.com/IGameServersService/GetServerList/v1', {
            params: {
                key: serverRuntimeConfig.apiKey,
                filter: `\\appid\\4000\\addr\\${ip}:${port}`
            }
        })
        const responseData = response.data.response.servers
        await cache.put(`${ip}:${port}`, responseData, 600000)
        await res.status(200).json({ state: responseData });
    }
}

export default async function handler(req, res) {
    return new Promise(() => {
        if (req.method === 'POST') {
            const data = req.query
            const ip = data.ip;
            const port = data.port;
            cachedFetch(req, res, ip, port)
        } else {
            return res.status(405).json({ message: 'Method not allowed.' });
        }
    });
}