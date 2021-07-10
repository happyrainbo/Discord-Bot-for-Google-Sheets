module.exports = {
  args: false,
  name: "status",
  description: "Status",
  execute(message, args) {
    var axios = require("axios");
    axios.get(`${URL}?q=status&id=${message.author.id}`).then(res => {
      message.channel.send(res.data.reply);
    });
  }
};
