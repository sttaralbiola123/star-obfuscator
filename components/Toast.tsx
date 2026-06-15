import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

export default function Toast({
  message,
  type,
  duration = 3000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const bgColor = {
    success: 'bg-green-900/80 border-green-500',
    error: 'bg-red-900/80 border-red-500',
    info: 'bg-blue-900/80 border-blue-500',
  }[type];

  const textColor = {
    success: 'text-green-100',
    error: 'text-red-100',
    info: 'text-blue-100',
  }[type];

  return (
    <div
      className={`fixed bottom-4 right-4 ${bgColor} border px-4 py-3 rounded-lg flex items-center gap-3 animate-fadeInUp max-w-sm z-50`}
    >
      <span className={textColor}>{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose();
        }}
        className="text-white hover:text-gray-300 transition"
      >
        <X size={18} />
      </button>
    </div>
  );
}
