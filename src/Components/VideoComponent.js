import React from 'react';
import '../CSS/VideoComponent.css';

function VideoComponent() {
  return (
    <div className="VideoComponent">
      <body>
        <div className='intro'>
          <video src='WebsiteVideo_cmp.mp4'></video>
        </div>
      </body>
    </div>
  );
}

export default VideoComponent;