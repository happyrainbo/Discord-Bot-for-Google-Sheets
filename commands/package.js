module.exports = {
  args: false,
  name: "package",
  description: "Package",
  execute(message, args) {
    var axios = require("axios");
    axios.get(`${URL}?q=package&id=${message.author.id}`).then(res => {
      message.channel.send(res.data.reply);
    });
  }
};
