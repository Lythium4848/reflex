import useSWR from 'swr'
import { useRouter } from 'next/router'
import Custom404 from '../404.js'
import Custom500 from "../500";
import UserList from "../../components/user/UserList";

const fetcher = (url) => fetch(url).then((res) => res.json())

function User() {
    const router = useRouter()
    let { page } = router.query
    page = page ? page : 1

    const { data, error } = useSWR(`/api/user/getUsers?page=${page}&amount=20`, fetcher)

    if (error) return Custom500()
    if (!data) return <div>
        <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden">
            <h1 className="text-center dark:text-white text-black text-2xl font-bold"><i className="animate-spin fa-solid fa-spinner-third"></i><br/><br/>Loading...</h1>
        </div>
    </div>
    if (data.state === "404") {
        return Custom404()
    } else {
        return UserList({data})
    }
}

export default User