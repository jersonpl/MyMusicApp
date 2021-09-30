import { addFavorite, deleteFavorite } from "../redux/actions/favorites"
import { saveSongs } from "../redux/actions/songs";

export default ({dispatch, song, songs, add}) => {
  if(add){
    dispatch(saveSongs(songs.map(item => item.id == song.id ?  {...item, isFav: true} : item)))
  }else{
    dispatch(saveSongs(songs.map(item => item.id == song.id ?  {...item, isFav: false} : item)))
  }
}