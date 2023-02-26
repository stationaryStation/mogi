import { Client, Permissions } from "revolt-toolset"

const toolset = new Client();

toolset.on("message", async (message) => {
    if (message.isUser()) {
        if (message.channel.permissionsFor(message.member).has(Permissions.SendMessage) && message.content === "/amogus") {
            console.log("this should send a message", message.content);
            message.reply(":01G7MT5B978E360NB6VWAS9SJ6:")
        } else {
            console.log("this should not send a message", message.content);
        }
    } else {
        console.log("not a user", message)
    }
})

toolset.on("ready", async () => {
    console.log("Ready for trouble!")
})

toolset.login(process.env.TOKEN!, (process.env.TYPE! as "user" | "bot"));