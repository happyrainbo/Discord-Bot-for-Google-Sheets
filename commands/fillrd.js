module.exports = {
    args: true,
    name: "fillrd",
    aliases: ["完整刀傷害"],
    description: "Fillrd",
    execute(message, args) {
        var axios = require("axios");

        //number of attack
        var num = args[0];

        //boss to reserve
        var boss = args[1];

        //damage to boss
        var damage = args[2];

        if (num !== undefined && num >= 1 && num <= 3) {
            if (boss === undefined) {
                message.channel.send("請於!fillrd的第二個參數輸入進攻目標");
            } else {
                if (damage === undefined) {
                    message.channel.send("請於!fillrd的第三個參數輸入傷害");
                } else {
                    var uri = `${URL}?q=fillrd&id=${message.author.id}&num=${num}&boss=${boss}&damage=${damage}`;
                    axios
                        .get(encodeURI(uri))
                        .then(res => {
                            message.channel.send(res.data.reply);
                        });
                }
            }
        } else {
            message.channel.send(
                "請於!fillrd後空一格，然後輸入介於1~3的第一個參數，代表第幾刀"
            );
        }
    }
};