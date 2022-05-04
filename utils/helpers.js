module.exports = {
    format_date: (date) => {
      // console.log(date);
      return `${new Date(date).getMonth() + 1}/${new Date(
        date
      ).getDate()}/${new Date(date).getFullYear()}`;
    },
  
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
      return word;
    },
  
    format_url: (url) => {
      return url
        .replace("http://", "")
        .replace("https://", "")
        .replace("www.", "")
        .split("/")[0]
        .split("?")[0];
    },

    //  get_avatar_emoji: (avatarString) => {
    //    console.log(avatarString);
    //   switch(avatarString){
    //       case "snowboard": return "🏂"
    //       case "ski": return "⛷️"
    //       case "climb": return "🧗‍♀️"
    //       case "bike": return "🚴"
    //       case "surf": return "🏄‍♀️"
    //       case "raft": return "🚣"
    //       default: return ""
    //   }
    //   }
  };
  