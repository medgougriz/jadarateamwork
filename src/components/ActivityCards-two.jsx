import TourCard from './TourCard';
import { tours } from '../data/ToursDataDesert';
import './ToursSection.css';

export default function ToursDesertSection() {
  return (
    <section className="tours-section">
      <div className="tours-inner">
        <h2 className="tours-title">Desert Activities</h2>
        <div className="tours-grid">
          {tours.map((tour, i) => (
            <TourCard
              key={i}
              image={tour.image}
              title={tour.title}
              sub={tour.sub}
              price={tour.price}
              currency={tour.currency}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
