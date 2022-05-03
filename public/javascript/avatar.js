const getAvatarEmoji = (avatarString) => {
switch(avatarString){
    case "snowboard": return "🏂"
    case "ski": return "⛷️"
    case "climb": return "🧗‍♀️"
    case "bike": return "🚴"
    case "surf": return "🏄‍♀️"
    case "raft": return "🚣"
    default: return ""
}
}