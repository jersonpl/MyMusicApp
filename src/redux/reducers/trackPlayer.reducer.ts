import { Track } from "../../interfaces"

export interface TrackPlayerReducer {
  state: "play" | "paused" |"stoped"
  track: {
    url: string
    title: string
    artist: string
    artwork: string
    duration: number
  } | null
}

const initialState: TrackPlayerReducer = {
  state: "paused",
  track: null
}

export default(state = initialState, action) => {
  switch (action.type) {
    case 'saveTrackPlayer':
      return action.trackPlayer
    default:
      return state
  }
}