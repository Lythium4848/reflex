import cache from "memory-cache";
import axios from "axios";

const cachedFetch = async (req, res, ip, port) => {
    const cachedResponse = cache.get(`${ip}:${port}`);
    if (cachedResponse) {
        res.status(200).json({ state: cachedResponse });
    } else {
        const response = await axios.get('https://api.steampowered.com/IGameServersService/GetServerList/v1', {
            params: {
                key: process.env.STEAM_API_KEY,
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