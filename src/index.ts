import { Client, EmbedBuilder, Permissions } from "revolt-toolset"
import os from "node:os";

const toolset = new Client();

toolset.on("message", async (message) => {
    if (message.isUser() && message.channel.permissionsFor(message.member).has(Permissions.SendMessage)) {
        console.log("message in", message.channel.name, `from ${message.author.username}:`, message.content);
        if (message.content === "/amogus") {
            message.reply(":01G7MT5B978E360NB6VWAS9SJ6:")
        } else if (message.content === "/mogi about") {
            const embed = new EmbedBuilder({
                color: "#D8002E",
                title: "mogi",
                description: `Hostname: \`${os.hostname}\`\nMogi Version: \`1.0.1\`\nNode Version: \`${process.version}\`\nTypescript Version: \`${(require("../package.json").dependencies.typescript as string).substring(1, 6)}\``,
                iconURL: "https://autumn.revolt.chat/emojis/01G7MT5B978E360NB6VWAS9SJ6"
            })
            message.reply(embed)
        } else {
            console.log("this should not send a message");
        }
    } else {
        console.log("not a user")
    }
})

toolset.on("ready", async () => {
    console.log("Ready for trouble!")
})

toolset.login(process.env.TOKEN!, (process.env.TYPE! as "user" | "bot"));