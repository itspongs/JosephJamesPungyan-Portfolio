import { useState, useEffect } from 'react'
import './MusicPlayer.css'

const MAX_VOL = 0.1

function MusicPlayer({ audioRef }) {
  const [playing, setPlaying] = useState(true)
  const [volume, setVolume] = useState(0.5)

  useEffect(() => {
    if (audioRef.current) {
      setVolume(audioRef.current.volume / MAX_VOL)
    }
  }, [audioRef])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume * MAX_VOL
    }
  }, [audioRef, volume])

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(prev => !prev)
  }

  const handleVolume = (e) => {
    setVolume(parseFloat(e.target.value))
  }

  const volIcon = volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'

  return (
    <div className="music-player">
      <div className={`music-disc ${playing ? 'spinning' : ''}`}>
        <div className="music-disc-inner" />
      </div>

      <div className="music-divider" />

      <button className="music-btn" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
        {playing ? '⏸' : '▶'}
      </button>

      <div className="volume-wrapper">
        <span className="volume-icon" aria-hidden="true">{volIcon}</span>
        <div className="volume-slider-wrap">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolume}
            className="volume-slider"
            aria-label="Volume"
          />
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer