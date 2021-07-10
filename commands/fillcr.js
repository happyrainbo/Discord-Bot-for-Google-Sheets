module.exports = {
    args: true,
    name: "fillcr",
    aliases: ["完整刀預約"],
    description: "Fillcr",
    execute(message, args) {
      var axios = require("axios");
  
      //number of attack
      var num = args[0];
      
      //boss to reserve
      var boss = args[1];
  
      //attack category
      var cat = args[2];
  
      if (num !== undefined && num >= 1 && num <= 3) {
        if (cat == "物" || cat == "法") {
          var uri = `${URL}?q=fillcr&id=${message.author.id}&num=${num}&boss=${boss}&cat=${cat}`;
          axios
            .get(encodeURI(uri))
            .then(res => {
              message.channel.send(res.data.reply);
            });
        } else {
          message.channel.send("!fillcr的第二個參數請輸入'物'或'法'");
        }
      } else {
        message.channel.send(
          "請於!fillcr後空一格，然後輸入介於1~3的第一個參數，代表第幾刀"
        );
      }
    }
  };
  