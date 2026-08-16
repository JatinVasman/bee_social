import React from 'react';

export const FloatingSocials: React.FC = () => {
  const whatsappUrl = "https://wa.me/918586989832?text=Hi%2C%20I%20am%20interested%20in%20your%20services";
  const instagramUrl = "https://www.instagram.com/thebusinessvolunteers/";

  return (
    <div className="floating-socials-container">
      {/* INSTAGRAM BUTTON */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="floating-social-btn floating-social-btn--instagram"
        style={{
          background: 'linear-gradient(45deg, #F09433 0%, #E6683C 25%, #DC2743 50%, #CC2366 75%, #BC1888 100%)'
        }}
      >
        <svg 
          width="26" 
          height="26" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="floating-social-btn floating-social-btn--whatsapp"
        style={{
          background: '#25D366'
        }}
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="#FFFFFF"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.966 14.12 .94 11.5 1.002c-5.433 0-9.858 4.37-9.862 9.8-.001 1.765.487 3.49 1.414 5.018l-.995 3.637 3.792-.988c.002.002.002.002 0 0zM17.15 14.18c-.282-.141-1.67-.82-1.928-.914-.258-.094-.446-.141-.634.141-.188.281-.727.914-.891 1.102-.164.187-.328.21-.61.07-.281-.14-1.189-.437-2.264-1.396-.837-.747-1.401-1.67-1.565-1.953-.164-.282-.018-.434.122-.573.126-.125.282-.328.422-.492.141-.164.188-.282.282-.47.094-.187.047-.351-.024-.491-.07-.141-.634-1.524-.868-2.086-.228-.547-.46-.473-.634-.482-.164-.008-.352-.01-.54-.01-.187 0-.492.07-.75.351-.258.282-.984.961-.984 2.344 0 1.382 1.008 2.72 1.148 2.907.14.187 1.984 3.03 4.806 4.247.671.29 1.196.463 1.605.593.673.214 1.287.184 1.77.112.539-.08 1.67-.68 1.905-1.336.235-.656.235-1.22.165-1.336-.07-.117-.258-.188-.54-.329z"/>
        </svg>
      </a>
    </div>
  );
};
