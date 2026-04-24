'use client'

export default function DanceItem({
  title,
  videoId,
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
        <div className="dance-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}