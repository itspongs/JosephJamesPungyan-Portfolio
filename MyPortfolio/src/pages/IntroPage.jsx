import { useState } from 'react'
import './IntroPage.css'

function IntroPage({ onDone, onStart }) {
    const [phase, setPhase] = useState('idle')
    const [count, setCount] = useState(null)

    const handleStart = () => {
        if (phase !== 'idle') return
        setPhase('counting')
        onStart()

        let current = 1
        setCount(1)

        const interval = setInterval(() => {
            current += 1
            if (current <= 4) {
                setCount(current)
            } else {
                clearInterval(interval)
                setPhase('done')
                setTimeout(() => onDone(), 300)
            }
        }, 350)
    }

    return (
        <div className="intro-page">
            {phase === 'idle' && (
                <p className="intro-start-text" onClick={handleStart}>
                    Press here to Start
                </p>
            )}
            {phase === 'counting' && (
                <p className="intro-count" key={count}>
                    {count}
                </p>
            )}
        </div>
    )
}

export default IntroPage