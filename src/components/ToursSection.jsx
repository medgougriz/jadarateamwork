import React from 'react';
import TourCard from './TourCard';
import './ToursSection.css';

const sampleTours = [
  {},{},{},{},{},{},{},{}
];

export default function ToursSection() {
  return (
    <section className="tours-section">
      <div className="tours-inner">
        <h2 className="tours-title">Popular Tours</h2>
        <div className="tours-grid">
          {sampleTours.map((t, i) => (
            <TourCard
              key={i}
              image={`https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80&ixid=${i}`}
              title={`Full-Day Desert Safari ${i+1}`}
              sub="1 Day · Pickup available"
              price={(50 + i * 5).toString()}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
