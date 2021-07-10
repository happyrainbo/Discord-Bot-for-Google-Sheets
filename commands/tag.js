module.exports = {
  args: true,
  name: "tag",
  description: "Tag",
  execute(message, args) {
    var axios = require("axios");

    // boss number
    var boss = args[0];

    //maximum number of clan members
    var count = args[1];

    if (isNaN(count) || count <= 0 || count > 30) {
      count = 30;
    }

    if (boss !== undefined && boss >= 1 && boss <= 5) {
      console.log(`${URL}?q=tag&num=${boss}&count=${count}`);
      axios.get(`${URL}?q=tag&num=${boss}&count=${count}`).then(res => {
        message.channel.send(res.data.reply);
      });
    } else {
      message.channel.send("請於!tag後空一格，然後輸入介於1~5的參數");
    }
  }
};
