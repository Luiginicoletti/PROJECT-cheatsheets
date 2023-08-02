import Image from 'next/image';
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, imageUrl, altText }) => {
 

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
  
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) {
    return null;
  }

  const openNewTab = () => {
    window.open(imageUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 transition overflow-auto">
    <div className="modal-overlay absolute inset-0 bg-black" onClick={onClose}></div>
    <div className="modal-content animate-zoom modal-container w-11/12 md:max-w-xl mx-auto rounded shadow-lg z-50 overflow-auto">
    <div className="modal-content py-4 text-left px-6">
          <span
            className="close absolute top-0 right-0 m-4 text-white cursor-pointer text-2xl font-bold"
            
          >
            &times;
          </span>
          <Image
            className="w-screen h-screen object-contain"
            width={1000}
            height={1000}
            src={imageUrl}
            alt={altText}
            sizes="(max-width: 768px) 90vw"
            loading="lazy"
            onClick={openNewTab}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
