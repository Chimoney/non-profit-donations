import React, { useEffect } from 'react';


const Snackbar = ({
  open,
  message,
  autoHideDuration = 3000,
  onClose,
}) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose(); 
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md z-[1000]">
      {message}
    </div>
  );
};

export default Snackbar;
