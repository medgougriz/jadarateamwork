import React from 'react';
import TourCard from './TourCard';
import './Tours.css';

export default function Tours() {
  return (
    <section className="tour-grid">
      <TourCard />
      <TourCard />
      <TourCard />
      <TourCard />
    </section>
  );
}
