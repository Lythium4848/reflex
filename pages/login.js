import { useSession, signIn, signOut, getProviders } from "next-auth/react"

export default function SignIn({providers }) {
    const { data: session } = useSession()
    if (session) {

    }
    return (
        <div>
            <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden">
                <div>
                    <div>
                        <h1 className="dark:text-white text-black text-3xl antialiased font-bold text-center">Login</h1>
                    </div>
                    <div className="min-w-xl rounded-2xl bg-slate-300 dark:bg-neutral-800 p-2 mt-10">
                        {Object.values(providers).map((provider) => (
                            <div key={provider.name}>
                                <button onClick={() => signIn(provider.id)} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-steam hover:bg-blurple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blurple-50">
                                    Login with {provider.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}