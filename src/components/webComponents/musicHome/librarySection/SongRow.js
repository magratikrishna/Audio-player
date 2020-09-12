import React from 'react'
import './SongRow.css';
import {Grid, Paper} from '@material-ui/core';


function SongRow({ track="test" }) {
    return (

        <Grid container className="songRowLayout">
            <Grid item xs={10}>
            <div className="songRow">
            <img 
                className="songRow__album"
                // src={track.album.images[0].url}
                src="https://i.pinimg.com/236x/27/7c/15/277c15409a7b07da1c169933e7692828--taylor-swift-curls-pictures-of-taylor-swift.jpg"
                alt=""
            />
            
            {/* <div className="songRow__infoAndDuration"> */}
            <div className="songRow__info">
                {/* <h1>{track.name}</h1> */}
                <h1>The Beaten Path</h1>
                <p>
                    {/* {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name} */}
                    Taylor Swift
                </p>
            </div>
            </div>
            </Grid>
            <Grid item xs={2} className="track__duration">
                <p>3:42</p>
            </Grid>
        </Grid>
    )
}

export default SongRow;
