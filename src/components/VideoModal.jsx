import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-frame" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close video">
          <X size={20} />
        </button>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
          title={item.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
