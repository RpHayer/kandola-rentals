'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';

const images = [
  '/images/hero-trailer.jpg',
  '/images/trailer-side.jpg',
];

export default function ImageCarousel() {
  return (
    <div className="md:w-2/3 mb-8 md:mb-0">
      <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          speed={1200}
          className="w-full h-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-96">
                <Image
                  src={src}
                  alt={`Trailer Image ${idx + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={idx === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
