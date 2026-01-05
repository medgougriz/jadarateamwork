import './bookingForm.css';

const BookingForm = () => {
  return (
    <form className="booking-form">
      <div className="form-group">
        <input
          list="destinations"
          id="destinationInput"
          type="text"
          className="form-input"
          placeholder="e.g. city, region, district or specific hotel"
          required
        />
      </div>

      <div className="form-group">
        <input
          id="checkIn"
          type="date"
          className="form-input"
          placeholder="Check-in date"
        />
      </div>

      <div className="form-group">
        <input
          id="checkOut"
          type="date"
          className="form-input"
          placeholder="Check-out date"
        />
      </div>

      <div className="form-group">
        <input
          id="guests"
          type="number"
          min={1}
          max={4}
          className="form-input guests-input"
          placeholder="Guests"
        />
      </div>

      <button type="submit" className="search-button">
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
        </svg>
        Search
      </button>
    </form>
  );
};

export default BookingForm;
