import React from "react";
import Image from "next/image";

export default function UserPage({data}) {
    data = data.state
    return (
        <div className="flex justify-center h-screen">
            <div className="max-w-5xl min-w-max w-full">
                <div class="relative my-5 bg-light-secondary rounded-md dark:bg-dark-secondary border border-2" style={{'border-color': data.color}}>
                    <div className="p-4">
                        <div className="">
                            <div className="w-32 h-32 relative">
                                <Image
                                    src={data.image}
                                    alt="Picture of the author"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <h1 className="mt-2 font-bold text-3xl">{data.name}</h1>
                            <h1 className="mt-1 font-bold text-gray-500 text-xs">{data.discordid}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}