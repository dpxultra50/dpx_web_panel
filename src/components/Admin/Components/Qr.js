import React, { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

const Qr = () => {
  const qrRef = useRef(null);

  const qrCode = new QRCodeStyling({
    width: 256,
    height: 256,
    type: "canvas",
    data: "https://datapollex.com/",
    image: "/images/layouts/DataPollex-Pocket-Logo-Black.png", // Replace with your logo
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 2,
      imageSize: 0.5,
    },
    dotsOptions: {
      color: "#1a1a1a",
      type: "classy", // options: "rounded", "dots", "classy", "classy-rounded"
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    cornersSquareOptions: {
      type: "extra-rounded", // options: "dot", "square", "extra-rounded"
      color: "#ed1c3e", // Tailwind red-600
    },
    cornersDotOptions: {
      type: "dot",
      color: "#1a1a1a",
    },
  });

  useEffect(() => {
    if (qrRef.current) {
      qrCode.append(qrRef.current);
    }
  }, []);

  return (
    <div className="flex flex-col items-center p-6">
      <div ref={qrRef} />
    </div>
  );
};

export default Qr;
