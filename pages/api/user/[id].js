import {getUser} from "../../../helpers/user";

export default async function userHandler(req, res) {
    const {query} = req
    const {id} = query

    let user = await getUser(id)

    return await user != null
        ? res.status(200).json({state: user})
        : res.status(404).json({state: "404"})
}