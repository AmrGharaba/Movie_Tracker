import React from 'react';
import YouTube from 'react-youtube';
import './youtube.css'; // Assuming this is where your styles are defined

const YoutubePlayer = ({ videoId }) => {
    // Options to pass to the YouTube player
    const opts = {
        height: '390', // You can use "100%" for responsive height
        width: '640', // You can use "100%" for responsive width
        playerVars: {
            autoplay: 1, // Auto-play the video on load
            controls: 1, // Show pause/play buttons in the player
            // Other available options: https://developers.google.com/youtube/player_parameters
        },
    };

    return (
        <div className="youtube-player">
            <YouTube videoId={videoId} opts={opts} onReady={event => event.target.pauseVideo()} />
        </div>
    );
};

export default YoutubePlayer;
