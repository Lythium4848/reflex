import React from "react";
import Image from "next/image";

export default function UserCard({user}) {
    return (
        <div className="w-60 h-24 bg-light-secondary dark:bg-dark-secondary rounded-md">
            <div className="static">
                <div className="mx-2 my-2 w-20 h-20 relative border border-2 rounded-md"
                     style={{'border-color': user.color || "#ffffff"}}>
                    <Image
                        src={user.image}
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                    <h1 className="absolute left-24 text-2xl top-2 font-bold">{user.name}</h1>
                    <h1 className="absolute left-24 text-md top-9 text-gray-400 font-bold">User</h1>
                </div>
            </div>
        </div>
    )
}