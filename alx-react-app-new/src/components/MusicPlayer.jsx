import React, { useState, useEffect } from 'react';

function MusicPlayer() {
  const [song, setSong] = useState('Song 1');

  useEffect(() => {
    console.log(`Now playing: ${song}`); // Updates when the song changes
  }, [song]); // Only run when `song` changes

  return (
    <div>
      <p>Now playing: {song}</p>
      <button onClick={() => setSong('Song 2')}>Next Song</button>
    </div>
  );
}

export default MusicPlayer;