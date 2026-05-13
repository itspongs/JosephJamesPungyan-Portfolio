import { useState } from 'react'
import './MusicPlayer.css'

function MusicPlayer({ audioRef }) {
    const [playing, setPlaying] = useState(true)

    const toggle = () => {
        if (playing) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setPlaying(!playing)
    }

    return (
        <div className="music-player">
            <button className="music-btn" onClick={toggle}>
                {playing ? '❚❚' : '▶'}
            </button>
        </div>
    )
}

export default MusicPlayer