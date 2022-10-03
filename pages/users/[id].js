import useSWR from 'swr'
import { useRouter } from 'next/router'
import Custom404 from '../404.js'
import Custom500 from "../500";
import UserPage from "../../components/user/UserPage";


const fetcher = (url) => fetch(url).then((res) => res.json())

function User() {
    const router = useRouter()
    const { id } = router.query

    const { data, error } = useSWR(id ? `/api/user/${id}` : null, fetcher)

    if (error) return Custom500()
    if (!data) return <div>
        <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden">
            <h1 className="text-center dark:text-white text-black text-2xl font-bold"><i className="animate-spin fa-solid fa-spinner-third"></i><br/><br/>Loading...</h1>
        </div>
    </div>
    if (data.state === "404") {
        return Custom404()
    } else {
        return UserPage({data})
    }
}

export default User