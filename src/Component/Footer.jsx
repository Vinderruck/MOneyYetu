// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 pt-4 border-t text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} MVDS – All rights reserved.
      </footer>
  );
};

export default Footer;
