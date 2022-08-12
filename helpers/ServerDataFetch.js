const serverFunctions = {}

serverFunctions.minecraft = (state) => {
    return {
        players: state.raw.vanilla.players.length,
        maxPlayers: state.maxplayers
    }
}

serverFunctions.minecraftbe = (state) => {
    return {
        players: state.raw.bedrock.players.length,
        maxPlayers: state.raw.bedrock.maxplayers
    }
}

serverFunctions.garrysmod = (state) => {
    return {
        players: state.players.length,
        maxPlayers: state.maxplayers
    }
}

serverFunctions.csgo = (state) => {
    return {
        players: state.raw.numplayers,
        maxPlayers: state.maxplayers
    }
}

serverFunctions.fivem = (state) => {
    return {
        players: state.raw.clients,
        maxPlayers: state.raw.sv_maxclients
    }
}

serverFunctions.terraria = (state) => {
    return {
        players: state.raw.numplayers,
        maxPlayers: state.maxplayers
    }
}

module.exports = serverFunctions