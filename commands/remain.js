module.exports = {
  args: false,
  name: "remain",
  description: "Remain",
  execute(message, args) {
    var axios = require("axios");
    axios.get(`${URL}?q=remain`).then(res => {
      message.channel.send(res.data.reply);
    });
  }
};
