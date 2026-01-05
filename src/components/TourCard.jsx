import React from 'react';
import './TourCard.css';

export default function TourCard({
  image = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
  title = 'Full-Day Desert Safari with Lunch and Camel Ride',
  sub = '1 Day · Pickup available',
  currency = '€',
  price = '50',
  onBook = () => {},
  className = ''
}) {
  return (
    <article className={`tour-card ${className}`.trim()}>
      <div className="tour-image" style={{ backgroundImage: `url(${image})` }} />

      <div className="tour-body">
        <h3 className="tour-title">{title}</h3>
        <p className="tour-sub">{sub}</p>

        <div className="tour-footer">
          <div className="tour-price">
            <span className="from">From</span>
            <span className="currency">{currency}</span>
            <span className="amount">{price}</span>
            <span className="per"> per person</span>
          </div>

          <button className="book-btn" onClick={onBook} aria-label="Book Now">Book Now</button>
        </div>
      </div>
    </article>
  );
}
