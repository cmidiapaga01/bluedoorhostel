import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="map-content">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95867.61192243548!2d19.74608995681378!3d41.33359511578101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031f25224da81%3A0x2472c3d7ab86ad94!2sBlue%20Door%20Hostel!5e0!3m2!1spt-BR!2s!4v1705050845003!5m2!1spt-BR!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        width="100%"
        height="500"
        title="Location"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default Map;