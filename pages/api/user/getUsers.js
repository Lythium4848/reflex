import {getUsers} from "../../../helpers/user";

export default async function userHandler(req, res) {
    if (req.method !== 'GET') {
        res.status(405).json({state: "405"})
        return
    }

    const {query} = req

    const amount = Number(query.amount)
    const page = Number(query.page - 1)

    const startFrom = amount * page

    const users = await getUsers(startFrom, amount)
    await res.status(200).json({users: users})
}