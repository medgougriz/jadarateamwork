import './HeroFixed.css';
import BookingForm from './bookingForm';
import { useEffect, useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1600&q=80'
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {images.map((img, i) => (
        <div
          key={i}
          className={`bg-layer ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay" />
      <div className="hero-inner">
        <h1 className="hero-title">Discover The Beauty Of Morocco</h1>
        <p className="hero-sub">Discover Morocco with expert local guides. Discover the best tours, fun activities, and helpful travel tips. Start planning your dream trip today!</p>
      </div>

      <div className="hero-form-wrapper">
        <BookingForm />
      </div>
    </section>
  );
};

export default Hero;
