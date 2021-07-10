module.exports = {
  args: false,
  name: "estimate",
  description: "Estimate",
  execute(message, args) {
    var axios = require("axios");
    axios.get(`${URL}?q=estimate`).then(res => {
      message.channel.send(res.data.reply);
    });
  }
};
