module.exports = {
    args: true,
    name: "fillrr",
    aliases: ["殘刀預約"],
    description: "Fillrr",
    execute(message, args) {
        var axios = require("axios");

        //number of attack
        var num = args[0];

        //boss to reserve
        var boss = args[1];

        if (num !== undefined && num >= 1 && num <= 3) {
            var uri = `${URL}?q=fillrr&id=${message.author.id}&num=${num}&boss=${boss}`;
            axios
                .get(encodeURI(uri))
                .then(res => {
                    message.channel.send(res.data.reply);
                });
        } else {
            message.channel.send(
                "請於!fillrr後空一格，然後輸入介於1~3的第一個參數，代表第幾刀"
            );
        }
    }
};