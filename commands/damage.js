module.exports = {
  args: false,
  name: "damage",
  description: "Damage",
  execute(message, args) {
    var axios = require("axios");
    axios.get(`${URL}?q=damageall`).then(res => {
      message.channel.send(res.data.reply);
    });
  }
};
