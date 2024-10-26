import { QRCodeSVG } from 'qrcode.react';
import React from 'react';

const QRCodeComponent = ({ link, cta }) => {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-600 text-center">{cta || 'Scan me'}</p>
      <div className="flex justify-center items-center h-full">
        <QRCodeSVG value={link} bgColor="inherit" fgColor="white" />
      </div>
    </div>
  );
};

export default QRCodeComponent;
