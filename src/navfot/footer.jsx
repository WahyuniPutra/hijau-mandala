import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: KombingFresh */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">KombingFresh</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              KombingFresh adalah platform digital yang memudahkan akses 
              pembelian kambing langsung dari peternak lokal. Kami hadir untuk 
              mendukung peternak dan menyediakan pengalaman berbelanja 
              kambing yang mudah, transparan, dan terpercaya bagi Anda.
            </p>
            <button className="bg-teal-700 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm transition-colors">
              Baca selengkapnya
            </button>
          </div>

          {/* Column 2: Jelajahi Halaman */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jelajahi Halaman</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Produk</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Hubungi Kami</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Bantuan dan Panduan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bantuan dan Panduan</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Bantuan</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Edukasi</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Syarat dan Ketentuan</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak Kami & Ikuti Kami */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
              <div className="space-y-2 text-gray-300">
                <p>kombingfresh@gmail.com</p>
                <p>+628123458534</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.79a4.28 4.28 0 001.32 5.71 4.23 4.23 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.19 4.28 4.28 0 01-1.93.07 4.28 4.28 0 004 2.97A8.59 8.59 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.59 8.59 0 0024 4.56a8.59 8.59 0 01-2.54.7z" />
                  </svg>
                  <span>Twitter</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.4a4.92 4.92 0 011.77 1.03 4.92 4.92 0 011.03 1.77c.16.46.346 1.26.4 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.4 2.43a4.92 4.92 0 01-1.03 1.77 4.92 4.92 0 01-1.77 1.03c-.46.16-1.26.346-2.43.4-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.4a4.92 4.92 0 01-1.77-1.03 4.92 4.92 0 01-1.03-1.77c-.16-.46-.346-1.26-.4-2.43-.058-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.4-2.43a4.92 4.92 0 011.03-1.77 4.92 4.92 0 011.77-1.03c.46-.16 1.26-.346 2.43-.4 1.266-.058 1.65-.07 4.85-.07zm0-2.16C8.74 0 8.332.012 7.05.07 5.77.128 4.8.32 4.05.6a7.08 7.08 0 00-2.55 1.68A7.08 7.08 0 00.6 4.95c-.28.75-.472 1.72-.53 2.95C0 8.332 0 8.74 0 12s.012 3.668.07 4.95c.058 1.23.25 2.2.53 2.95a7.08 7.08 0 001.68 2.55 7.08 7.08 0 002.55 1.68c.75.28 1.72.472 2.95.53 1.282.058 1.69.07 4.95.07s3.668-.012 4.95-.07c1.23-.058 2.2-.25 2.95-.53a7.08 7.08 0 002.55-1.68 7.08 7.08 0 001.68-2.55c.28-.75.472-1.72.53-2.95.058-1.282.07-1.69.07-4.95s-.012-3.668-.07-4.95c-.058-1.23-.25-2.2-.53-2.95a7.08 7.08 0 00-1.68-2.55 7.08 7.08 0 00-2.55-1.68c-.75-.28-1.72-.472-2.95-.53C15.668.012 15.26 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.79a4.28 4.28 0 001.32 5.71 4.23 4.23 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.19 4.28 4.28 0 01-1.93.07 4.28 4.28 0 004 2.97A8.59 8.59 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.59 8.59 0 0024 4.56a8.59 8.59 0 01-2.54.7z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-teal-700 text-center text-gray-400 text-sm">
          © KombingFresh 2024. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;