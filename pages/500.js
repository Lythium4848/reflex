export default function Custom500() {
    return (
        <div>
            <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden">
                <div className="relative">
                    <h1 className="dark:text-white text-black text-5xl antialiased font-bold text-center">500</h1>
                    <h1 className="dark:text-white text-black text-3xl antialiased text-center">Internal Server Error</h1>
                </div>
            </div>
        </div>
    );
}