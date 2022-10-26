import React from "react";
import UserCard from "./Card";

export default function UserList({data}) {
    return (
        <div className="h-screen">
            <div className="flex justify-center mt-12">
                <h1 className="dark:text-white text-black text-3xl antialiased font-bold text-center">Users</h1>
            </div>
            <div className="flex justify-center my-12">
                <div>
                    <div class="grid grid-cols-3 gap-4">
                        {data.users.map((user) => {
                            return UserCard({user})
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}