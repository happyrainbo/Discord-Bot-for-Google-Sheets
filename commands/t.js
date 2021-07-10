module.exports = {
  args: false,
  name: "t",
  description: "T",
  execute(message, args) {
    message.guild.members
      .fetch()
      .then(members =>
        members.each(member => console.log(member.user.username, member.id))
      )
      .catch(console.log("Fuck"));
  }
};
