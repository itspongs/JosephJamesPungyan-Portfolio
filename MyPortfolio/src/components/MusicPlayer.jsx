import { useState, useEffect } from 'react'
import './MusicPlayer.css'

import playIcon from '../assets/icon/play.png'
import pauseIcon from '../assets/icon/pause.png'
import volumeIcon from '../assets/icon/volume.png'
import muteIcon from '../assets/icon/mute.png'

const MAX_VOL = 0.1

function MusicPlayer({ audioRef, title = "Song Title", artist = "Artist Name" }) {
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

      {/* Hover Tooltip */}
      <div className="track-tooltip">
        <div className="track-tooltip-header">
          <span className="now-playing-dot" />
          <span className="now-playing-label">NOW PLAYING</span>
        </div>
        <div className="track-tooltip-divider" />
        <div className="track-tooltip-body">
          <div className="track-disc-mini">
            <div className="track-disc-mini-inner" />
          </div>
          <div className="track-texts">
            <span className="track-title">{title}</span>
            <span className="track-artist">{artist}</span>
          </div>
        </div>
        <div className="track-bars">
          <span className="bar" style={{ '--delay': '0s' }} />
          <span className="bar" style={{ '--delay': '0.2s' }} />
          <span className="bar" style={{ '--delay': '0.4s' }} />
          <span className="bar" style={{ '--delay': '0.1s' }} />
          <span className="bar" style={{ '--delay': '0.3s' }} />
        </div>
      </div>

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