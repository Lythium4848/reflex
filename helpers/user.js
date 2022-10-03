const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

export const getUser = async (id) => {
    let user = await prisma.user.findFirst({
        where: {
            discordid: id
        }
    })
    await prisma.$disconnect()
    return user
}

export const createUser = async (data) => {
    await prisma.user.upsert({
        where: {
            discordid: data.sub
        },
        update: {
            name: data.name,
            image: data.picture,
        },
        create: {
            discordid: data.sub,
            name: data.name,
            image: data.picture,
            color: "#ffffff",
            steamid: null
        },
    })
    await prisma.$disconnect()
}