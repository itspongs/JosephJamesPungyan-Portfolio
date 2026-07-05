import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './BlogEntryPage.css'
import audioStore from '../audioStore'
import MusicPlayer from '../components/MusicPlayer'

import Entry1 from './blogs/entry1'
import Entry2 from './blogs/entry2'
import Entry3 from './blogs/entry3'

const allBlogs = [Entry1, Entry2, Entry3]

function BlogEntryPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const blog = allBlogs.find((b) => b.id === id)
    const containerRef = useRef(null)
    const musicWasPlayingRef = useRef(false)
    const [showMusicPrompt, setShowMusicPrompt] = useState(false)
    const [musicStarted, setMusicStarted] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Try to auto-start music; if browser blocks it, show a prompt button
    useEffect(() => {
        const audio = audioStore.audioRef?.current
        if (!audio) return
        if (audio.paused) {
            audio.volume = 0.05
            audio.play()
                .then(() => setMusicStarted(true))
                .catch(() => setShowMusicPrompt(true))
        } else {
            setMusicStarted(true)
        }
    }, [])

    // Pause bg music when a blog video plays; only resume if it was playing before
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const getAudio = () => audioStore.audioRef?.current

        const handlePlay = () => {
            const audio = getAudio()
            if (!audio) return
            musicWasPlayingRef.current = !audio.paused
            if (!audio.paused) audio.pause()
        }

        const handlePauseOrEnd = () => {
            const audio = getAudio()
            if (!audio) return
            if (musicWasPlayingRef.current && audio.paused) {
                audio.play().catch(() => {})
            }
        }

        const videos = container.querySelectorAll('video')
        videos.forEach((v) => {
            v.addEventListener('play', handlePlay)
            v.addEventListener('pause', handlePauseOrEnd)
            v.addEventListener('ended', handlePauseOrEnd)
        })

        return () => {
            videos.forEach((v) => {
                v.removeEventListener('play', handlePlay)
                v.removeEventListener('pause', handlePauseOrEnd)
                v.removeEventListener('ended', handlePauseOrEnd)
            })
        }
    }, [blog])

    // Go home and skip the intro/proceed screen
    const handleBack = () => navigate('/', { state: { skipIntro: true } })

    const handleMusicPrompt = () => {
        const audio = audioStore.audioRef?.current
        if (audio) {
            audio.volume = 0.05
            audio.play().catch(() => {})
        }
        setShowMusicPrompt(false)
        setMusicStarted(true)
    }

    if (!blog) {
        return (
            <div className="blog-entry-page">
                <button className="blog-entry-back" onClick={handleBack}>← Go Back</button>
                <p className="blog-entry-not-found">Blog entry not found.</p>
            </div>
        )
    }

    return (
        <div className="blog-entry-page" ref={containerRef}>
            <button className="blog-entry-back" onClick={handleBack}>← Back</button>

            {showMusicPrompt && (
                <button className="blog-music-prompt" onClick={handleMusicPrompt}>
                    ♪ Play Music
                </button>
            )}

            {musicStarted && audioStore.audioRef && (
                <MusicPlayer audioRef={audioStore.audioRef} title="JENNI" artist="Yung Kage" />
            )}

            <div className="blog-entry-body">
                <p className="blog-entry-label anim-1">{blog.entry}</p>
                <h1 className="blog-entry-title anim-2">{blog.title}</h1>
                <p className="blog-entry-excerpt anim-3">{blog.excerpt}</p>

                <div className="blog-entry-meta anim-4">
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                </div>

                <div className="blog-entry-tags anim-4">
                    {blog.tags.map((tag, i) => (
                        <span key={i} className="blog-entry-tag">{tag}</span>
                    ))}
                </div>

                <hr className="blog-entry-divider anim-5" />

                <div className="blog-entry-text anim-6">
                    {Array.isArray(blog.content)
                        ? blog.content.map((item, i) =>
                            item.type === 'heading'
                                ? <h2 key={i} className="blog-entry-section-title">{item.text}</h2>
                                : item.type === 'subheading'
                                ? <h3 key={i} className="blog-entry-sub-title">{item.text}</h3>
                                : item.type === 'subheading-date'
                                ? <p key={i} className="blog-entry-sub-date">{item.text}</p>
                                : item.type === 'image-group'
                                ? <div key={i} className="blog-entry-image-group">
                                    {item.images.map((img, j) => (
                                        <div key={j} className="blog-entry-image-item">
                                            <img src={img.src} alt={img.caption} className="blog-entry-img" />
                                            <p className="blog-entry-caption">{img.caption}</p>
                                        </div>
                                    ))}
                                  </div>
                                : item.type === 'paragraph-image'
                                ? <div key={i} className="blog-entry-paragraph-image">
                                    <div className="blog-entry-paragraph-image-side">
                                        <img src={item.src} alt={item.caption || ''} className="blog-entry-inline-img" />
                                        {item.caption && <p className="blog-entry-caption">{item.caption}</p>}
                                    </div>
                                    {Array.isArray(item.text)
                                        ? item.text.map((t, k) => <p key={k} className="blog-entry-paragraph">{t}</p>)
                                        : <p className="blog-entry-paragraph">{item.text}</p>
                                    }
                                  </div>
                                : item.type === 'video'
                                ? <div key={i} className="blog-entry-video-wrapper">
                                    <video
                                        className="blog-entry-video"
                                        controls
                                        playsInline
                                        preload="metadata"
                                    >
                                        <source src={item.src} type={item.mimeType || 'video/mp4'} />
                                        Your browser does not support the video tag.
                                    </video>
                                    {item.caption && <p className="blog-entry-caption blog-entry-video-caption">{item.caption}</p>}
                                  </div>
                                : item.type === 'image-single'
                                ? <div key={i} className="blog-entry-image-single-wrapper">
                                    <img src={item.src} alt={item.caption || ''} className="blog-entry-image-single" />
                                    {item.caption && <p className="blog-entry-caption">{item.caption}</p>}
                                  </div>
                                : item.type === 'related-link'
                                ? <div key={i} className="blog-entry-related">
                                    <p className="blog-entry-related-text">{item.text}</p>
                                    <a href={item.href} target="_blank" rel="noreferrer" className="blog-entry-related-btn">
                                        {item.label} →
                                    </a>
                                  </div>
                                : <p key={i} className="blog-entry-paragraph">{item.text || item}</p>
                        )
                        : <p className="blog-entry-paragraph">{blog.content}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogEntryPage
