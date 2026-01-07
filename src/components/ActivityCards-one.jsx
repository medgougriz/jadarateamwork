import TourCard from './TourCard';
import { tours } from '../data/ToursDataWater';
import './ToursSection.css';

export default function ToursWaterSection() {
  return (
    <section className="tours-section">
      <div className="tours-inner">
        <h2 className="tours-title">Water Activities</h2>
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
