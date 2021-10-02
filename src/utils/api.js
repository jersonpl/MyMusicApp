const base = "https://api.spotify.com/v1"
const me = base + "/me"

export default ({
  profile: me,
  tracks: me + "/tracks",
  playlists: me + "/playlists",
  albums: me + "/albums",
  recommendations: base + "/recommendations",
  


  refreshToken: "http://localhost:3000/refresh",
});