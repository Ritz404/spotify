import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Always Ritz | Spotify Music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://nyimpen.vercel.app/component/spotfy.css" />
      </Head>
      <div className="container">
        <header>
          <img src="https://telegra.ph/file/ccfb38dfb9652d007c62c.jpg" alt="Profile Picture" className="profile-pic" />
          <h1 className="nama">Always Ritz</h1>
          <p className="lokasi">
            <i className="fas fa-globe-asia"></i> Tangerang Utara, Banten Indonesia
          </p>
          <p className="bio">”destroyer.”</p>
        </header>

        <section className="spotify-section">
          <h2>The Playlist I Listen To</h2>
          <div className="iframe-container">
            {loading && (
              <div className="loading">
                <i className="fas fa-spinner"></i>
              </div>
            )}
            <iframe
              src="https://open.spotify.com/embed/playlist/6e5psrTK5oyi4xFRCk4MRx"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
              style={{ display: loading ? 'none' : 'block' }}
            ></iframe>
          </div>
        </section>

        <div className="social-icons">
          <a href="https://github.com/Ritz404" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://wa.me/6283187610223?text=hi+Ritz" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/ritz.404/" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://whatsapp.com/channel/0029VaX3jOgAe5VguykGye3k" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </>
  )
}
