import { useRef, useEffect } from 'react'
import './Waveform.css'

function Waveform({ analyser }) {
    const canvasRef = useRef(null)
    const animFrameRef = useRef(null)

    useEffect(() => {
        if (!analyser) return

        const bufferLength = analyser.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const draw = () => {
            animFrameRef.current = requestAnimationFrame(draw)
            analyser.getByteFrequencyData(dataArray)

            const isMobile = window.innerWidth < 768

            canvas.width = window.innerWidth
            canvas.height = isMobile ? 130 : 210

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const barCount = isMobile ? 60 : 210
            const barWidth = isMobile ? 2 : 2
            const gap = canvas.width / barCount
            const bottom = canvas.height

            for (let i = 0; i < barCount; i++) {
                const dataIndex = Math.floor(i * bufferLength / barCount)
                const value = dataArray[dataIndex] / 255
                const sideFade = 0.4 + (i / barCount) * 0.9
                const barHeight = value * (canvas.height * (isMobile ? 0.85 : 1.5)) * sideFade
                const x = i * gap + gap / 2
                const alpha = 0.5 + value * 0.5

                ctx.fillStyle = `rgba(225, 86, 86, ${alpha})`
                ctx.fillRect(x - barWidth / 2, bottom - barHeight, barWidth, barHeight)
            }
        }

        draw()

        return () => cancelAnimationFrame(animFrameRef.current)
    }, [analyser])

    return <canvas ref={canvasRef} className="waveform-canvas" />
}

export default Waveform