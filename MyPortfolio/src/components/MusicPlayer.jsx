import { useState, useEffect } from 'react'
import './MusicPlayer.css'

import playIcon from '../assets/icon/play.png'
import pauseIcon from '../assets/icon/pause.png'
import volumeIcon from '../assets/icon/volume.png'
import muteIcon from '../assets/icon/mute.png'

const MAX_VOL = 0.1

function MusicPlayer({ audioRef }) {
  const [playing, setPlaying] = useState(true)
  const [volume, setVolume] = useState(0.5)
  const [btnAnim, setBtnAnim] = useState(false)
  const [volAnim, setVolAnim] = useState(false)

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
    setBtnAnim(true)
    setTimeout(() => setBtnAnim(false), 300)
    setPlaying(prev => !prev)
  }

  const handleVolume = (e) => {
    setVolAnim(true)
    setTimeout(() => setVolAnim(false), 200)
    setVolume(parseFloat(e.target.value))
  }

  const currentVolIcon = volume === 0 ? muteIcon : volumeIcon

  return (
    <div className="music-player">
      <div className={`music-disc ${playing ? 'spinning' : ''}`}>
        <div className="music-disc-inner" />
      </div>

      <div className="music-divider" />

      <button
        className={`music-btn ${btnAnim ? 'btn-pop' : ''}`}
        onClick={toggle}
        aria-label={playing ? 'Pause' : 'Play'}
      >
        <img
          src={playing ? pauseIcon : playIcon}
          alt={playing ? 'Pause' : 'Play'}
          className="music-icon"
        />
      </button>

      <div className="volume-wrapper">
        <span className={`volume-icon-wrap ${volAnim ? 'vol-pulse' : ''}`} aria-hidden="true">
          <img
            src={currentVolIcon}
            alt={volume === 0 ? 'Muted' : 'Volume'}
            className="music-icon"
          />
        </span>
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