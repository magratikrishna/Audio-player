import * as actionTypes from './actions';

const initialState = {
    songs: []
};

const reducer = (state = initialState, action) => {
    
        if (action.types === "ADD_SONG") {
            const newSong = {
                id: Math.random(),
                // title: action.songData.title,
                songTitle: action.reducer.songTitle,
                singerName: 'Max'
            }
            return {
                // ...state,
                songs: state.songs.concat(newSong)
            }
        }
        return state;
}

export default reducer;