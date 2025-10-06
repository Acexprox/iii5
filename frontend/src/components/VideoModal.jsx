import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  const videoRef = useRef(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Auto play when modal opens
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl mx-auto animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 flex items-center gap-2 bg-black/50 px-4 py-2 rounded-lg hover:bg-black/70"
          aria-label="إغلاق الفيديو"
        >
          <span className="text-sm font-semibold">إغلاق</span>
          <X className="w-6 h-6" />
        </button>

        {/* Video Container */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-auto max-h-[80vh] object-contain"
            controls
            controlsList="nodownload"
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>

        {/* Hint text */}
        <div className="text-center mt-4 text-white/70 text-sm">
          اضغط خارج الفيديو أو ESC للإغلاق
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default VideoModal;
