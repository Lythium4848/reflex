import useSWR from 'swr'
import { useRouter } from 'next/router'
import Custom404 from '../404.js'
import Custom500 from "../500";
import UserPage from "../../components/user/UserPage";
import { useSession} from "next-auth/react";

const fetcher = (url) => fetch(url).then((res) => res.json())

const User = () => {
    const { data: session } = useSession()

    const { data, error } = useSWR(session?.discordId ? `/api/user/${session.discordId}` : null, fetcher)

    if (error) return Custom500()
    if (!data) return <div>
        <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden">
            <h1 className="text-center dark:text-white text-black text-2xl font-bold"><i className="animate-spin fa-solid fa-spinner-third"></i><br/><br/>Loading...</h1>
        </div>
    </div>
    if (data.state) {
        return UserPage({data})
    }
}

export default User
