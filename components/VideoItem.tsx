'use client'

export default function VideoItem({
  title,
  videoId,
  videoId2,
  lyrics,
  isOpen,
  onClick,
}: any) {
  return (
    <div className="video-item">
      {/* tiêu đề */}
      <div className="item" onClick={onClick}>
        {isOpen ? "🔽" : "▶️"} {title}
      </div>

      {/* nội dung */}
      {isOpen && (
        <div className="video-lyrics">

          {/* VIDEO KARAOKE */}
          <div className="video-box">
            <h4>🎤 Karaoke</h4>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            />
          </div>

          {/* VIDEO NHẠC */}
          <div className="video-box">
            <h4>🎧 Nhạc</h4>
            <iframe
              src={`https://www.youtube.com/embed/${videoId2}`}
              allowFullScreen
            />
          </div>

          {/* LỜI */}
          <div className="lyrics-box">
            <h4>📜 Lời bài hát</h4>
            {lyrics ? (
              lyrics.split("\n").map((line: string, i: number) => (
                <p key={i} className="lyrics-line">
                  {line}
                </p>
              ))
            ) : (
              <p>Chưa có lời bài hát...</p>
            )}
          </div>

        </div>
      )}
    </div>
  )
}