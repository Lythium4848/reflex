import cache from "memory-cache";
import serverFunctions from "../../helpers/ServerDataFetch";
const Gamedig = require('gamedig');

const cachedFetch = async (req, res, ip, port, type) => {
    const cachedResponse = cache.get(`${ip}:${type}`);
    if (cachedResponse) {
        res.status(200).json({ state: cachedResponse });
    } else {
        Gamedig.query({
            type: type,
            host: ip,
            port: port
        }).then(async (state) => {
            const data = await serverFunctions[type](state)
            await cache.put(`${ip}-${type}`, data, 600000)
            await res.status(200).json({state: data});
        }).catch((error) => {
            console.log(error);
        });
    }
}

export default async function handler(req, res) {
    return new Promise(() => {
        if (req.method === 'POST') {
            const data = req.query
            const ip = data.ip;
            const port = data.port;
            const type = data.type
            cachedFetch(req, res, ip, port, type)
        } else {
            return res.status(405).json({ message: 'Method not allowed.' });
        }
    });
}