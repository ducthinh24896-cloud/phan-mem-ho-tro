'use client'

export default function VideoItem({
  title,
  videoId,
  isOpen,
  onClick,
}: any) {
  return (
    <div>
      <div className="item" onClick={onClick}>
        {isOpen ? '🔽' : '▶️'} {title}
      </div>

      {isOpen && (
        <iframe
          className="video"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}