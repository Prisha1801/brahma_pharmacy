import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryHero } from "../components/common/data/heroData";
import HeroSection from "../components/common/components/HeroSection";

const images = [
  "g1.jpeg", "g2.jpeg", "g3.jpeg", "g4.jpeg", "g5.jpeg", "g6.jpeg", "g7.jpeg", "g8.jpeg", "g9.jpeg",
  "g10.jpeg", "g11.jpeg", "g12.jpeg", "g13.jpeg", "g14.jpeg", "g15.jpeg", "g16.jpeg", "g17.jpeg",
  "g18.jpeg", "g19.jpeg", "g20.jpeg", "g21.jpeg", "g22.jpeg", "g23.jpeg", "g24.jpeg", "g25.jpeg", "g26.jpeg"
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % images.length;
    setCurrentIndex(next);
    setSelectedImage(images[next]);
  };

  const prevImage = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prev);
    setSelectedImage(images[prev]);
  };

  return (
    <>
      <HeroSection {...GalleryHero} />

      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="break-inside-avoid cursor-pointer rounded-xl overflow-hidden shadow-md bg-white"
                onClick={() => openModal(index)}
              >
                <img
                  src={`/gallery/${img}`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-8 text-white text-5xl font-light hover:text-gray-300 transition-colors z-[110]"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Left Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 text-white text-6xl font-light hover:text-gray-300 transition-colors bg-white/5 md:bg-transparent rounded-full md:rounded-none p-2 md:p-0 z-[110]"
            >
              &#8249;
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-screen max-w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/gallery/${selectedImage}`}
                alt=""
                className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Right Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 text-white text-6xl font-light hover:text-gray-300 transition-colors bg-white/5 md:bg-transparent rounded-full md:rounded-none p-2 md:p-0 z-[110]"
            >
              &#8250;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;