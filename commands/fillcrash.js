module.exports = {
    args: false,
    name: "fillcrash",
    aliases: ["閃退", "閃退勾選", "勾選閃退"],
    description: "Fillrr",
    execute(message, args) {
        var axios = require("axios");

        var uri = `${URL}?q=fillcrash&id=${message.author.id}`;
        axios
            .get(encodeURI(uri))
            .then(res => {
                message.channel.send(res.data.reply);
            });
    }
};