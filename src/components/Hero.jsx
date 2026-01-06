import './HeroFixed.css';
import BookingForm from './bookingForm';
import { useEffect, useState } from 'react';


const images = [
  'https://imgs.search.brave.com/EM0_BWdjNis1g_7gqoCfExAkWhIeIqIG99IRhsxcqmk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLm5h/dGdlb2ZlLmNvbS9u/LzdlZGMwNTgxLTZl/OGEtNGJlOS05NjI4/LTViNDY4YThhZTQ0/MC95b3Vyc2hvdC1t/b3JvY2NvMDE4Lmpw/Zw',
  'https://imgs.search.brave.com/Zxl3EgJWwI4IB8qR8qBMlcLkgoAQS5tRLyYyvxQXphM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/MDQyODU4OS9waG90/by9tb3JvY2NvLWNp/dHkuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWR0eDdvVE1L/Tms5b2RNbWV2U1B6/ZGhKNjg0bEtmN3pC/dkpCQU9tdXZTRVU9',
  'https://imgs.search.brave.com/MyjrNXteqmjQM50PT9SuxyDKGDRiVI8kPSUpVp3Thgo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/MDk4MTkzMi9waG90/by9mYW1vdXMtaGlz/dG9yaWMtaGFzc2Fu/LWlpLW1vc3F1ZS1p/bi1tYXJyYWtlY2gt/Y2l0eS1tb3JvY2Nv/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1RbThCVDVRbjJ0/VEl0SU9WWFkyM1k5/cV9HNE1CYjNDVDBs/MnE5TlIwaWh3PQ',
  'https://imgs.search.brave.com/V05414PfnJFQfYqpp5Xf2JEhZw_jw8F92HFZvlXQC80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk4/NDAyMDQ5L3Bob3Rv/L2phbWFhLWVsLWZu/YS1tYXJyYWtlc2gt/bW9yb2Njby5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y2E1/R1pWU2ZaSGZaTkRS/eW03WFYwS1hkN0E1/VkxmNld1NmlzZTNu/M3d2WT0',
  'https://imgs.search.brave.com/5bHft4jUpF_XTUez2qqT9OtL-6lyCMYjvF6_QfA1zf8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE2/ODQzMDgyNS9waG90/by9jaGVmY2hhb3Vl/bi1tb3JvY2NvLndl/YnA_YT0xJmI9MSZz/PTYxMng2MTImdz0w/Jms9MjAmYz15N3d4/ZXVqSmh1OXhXbWRO/VGN1UkRzb2RPQ0R0/c0dNRklYVVV1Sms4/M2pBPQ',
  'https://imgs.search.brave.com/llZn0uHp6iBYiTWJGpPyeElx_FnfZmzHwSqHMxJyWL8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hZ2Fk/aXItbW9yb2Njby1h/ZnJpY2Eta2FzYmFo/LWFnYWRpci1vdWZs/YS1mb3J0LWF0bGFu/dGljLW9jZWFuLWNp/dHktc2t5bGluZS1w/YW5vcmFtaWMtYWVy/aWFsLXZpZXctbGlm/ZS1hZ2FkaXItbW9y/b2Njby0yNzQ4OTg2/NDkuanBn',
  'https://imgs.search.brave.com/15hPnTarJbUKr3jW9sV2Ur5vnapqkXKeHngM7DFOyJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmV2aWdvcmF0ZS5j/b20vaW1hZ2VzL3Ro/ZS1iZXN0LWJlYWNo/LXJlc29ydC1kZXN0/aW5hdGlvbi1hZ2Fk/aXIuanBn'
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
