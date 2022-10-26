import prisma from "../lib/prismadb.ts"

export const getUser = async (id) => {
    return await prisma.user.findFirst({
        where: {
            id: id
        }
    })
}

export const getUsers = async (startFrom, amount) => {
    return await prisma.user.findMany({
        skip: startFrom,
        take: amount,
    })
}



