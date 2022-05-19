import React from "react";
import "./audio-player.css";

import Temp from "../../assets/images/temp1.png";

const CustomAudioPlayer = () => {
  return (
    <div className="audio-player-block">
      <div className="audio-cover">
        <img src={Temp} alt="cover" />
      </div>
      <div className="audio-details">
        <h4 className="audio-title">Remedy</h4>
        <h4 className="audio-subtitle">Annie Schindel</h4>
      </div>
      <div className="audio-player-container">
        <audio
          controls
          disablepictureinpicture
          controlsList="nodownload noplaybackrate noremoteplayback"
        >
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            type="audio/ogg"
          />
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
