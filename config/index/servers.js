const serversConfig = {
    serversTitle: 'Servers',
    serversDesc: 'bottom text',
    servers: [
        {
            name: 'CubeCraft',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: './assets/img/cubecraft.png',
            type: 'minecraftbe',
            ip: 'PLAY.CUBECRAFT.NET',
            port: 19132,
            color: 'sky-500'
        },
        {
            name: 'Hypixel',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: './assets/img/hypixel.png',
            ip: 'MC.HYPIXEL.NET',
            type: 'minecraft',
            port: null,
            color: 'yellow-400'
        }
    ],
}

module.exports = serversConfig;