import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, imageUrl, altText }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className=" fixed inset-0 flex items-center justify-center z-50 transition">
      <div className="modal-overlay absolute inset-0 bg-black opacity-70" onClick={onClose}></div>
      <div className="modal-content animate-zoom modal-container bg-white w-11/12 md:max-w-xl mx-auto rounded shadow-lg z-50 overflow-auto ">
        <div className="modal-content py-4 text-left px-6 overflow-auto">
          <span
            className="close absolute top-0 right-0 m-4 text-white cursor-pointer text-2xl font-bold"
            onClick={onClose}
          >
            &times;
          </span>
          <img
            className="w-full max-h-screen object-contain"
            src={imageUrl}
            alt={altText}
          />
          <div className="caption text-center text-gray-600 pt-4">{altText}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
