import { useRef, useState } from 'react';

export default function Testimonials({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  if (!testimonials?.length) {
    return null;
  }

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = touchStartX.current - touchEndX;

    touchStartX.current = null;

    if (Math.abs(deltaX) < 40) {
      return;
    }

    if (deltaX > 0) {
      next();
      return;
    }

    prev();
  };

  return (
    <div className="rn-testimonial-area rn-section-gap section-separator" id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="title">Testimonial</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="testimonial-activation testimonial-pb mb--30"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="testimonial mt--50 mt_md--40 mt_sm--40">
                <div className="inner">
                  <div className="card-info">
                    <div className="card-thumbnail">
                      <img src={active.image} alt={`${active.name} testimonial`} />
                    </div>
                    <div className="card-content">
                      <h3 className="title">{active.name}</h3>
                      <span className="designation">{active.role}</span>
                    </div>
                  </div>

                  <div className="card-description">
                    <div className="title-area">
                      <div className="title-info">
                        <h3 className="title">{active.title}</h3>
                        <span className="date">{active.source}</span>
                      </div>
                    </div>
                    <div className="seperator" />
                    <p className="discription">{active.text}</p>
                  </div>
                </div>
              </div>

              <div className="portfolio-react-carousel-controls testimonial-react-controls">
                <button type="button" className="slide-arrow prev-arrow" onClick={prev} aria-label="Previous testimonial">
                  <i className="feather-arrow-left" aria-hidden="true" />
                </button>
                <button type="button" className="slide-arrow next-arrow" onClick={next} aria-label="Next testimonial">
                  <i className="feather-arrow-right" aria-hidden="true" />
                </button>
              </div>

              <ul className="portfolio-react-dots" aria-label="Testimonial pagination">
                {testimonials.map((item, index) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      className={index === activeIndex ? 'active' : ''}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
