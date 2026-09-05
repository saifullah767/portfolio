import { useRef, useState } from 'react';
import { interpolate } from '../translations';

const testimonialKeys = ['juan', 'arturo', 'alexander', 'alejandro'];

export default function Testimonials({ testimonials, copy }) {
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
  const activeKey = testimonialKeys[activeIndex];

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
              <h2 className="title">{copy.title}</h2>
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
                      <img
                        src={active.image}
                        alt={interpolate(copy.imageAlt, { name: active.name })}
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="title">{active.name}</h3>
                      <span className="designation">{copy.roles[activeKey] ?? active.role}</span>
                    </div>
                  </div>

                  <div className="card-description">
                    <div className="title-area">
                      <div className="title-info">
                        <h3 className="title">{copy.pairProgramming}</h3>
                        <span className="date">{copy.source}</span>
                      </div>
                    </div>
                    <div className="seperator" />
                    <p className="discription">{copy.quotes[activeKey] ?? active.text}</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-carousel__controls">
                <button
                  type="button"
                  className="portfolio-carousel-button testimonial-carousel__arrow"
                  onClick={prev}
                  aria-label={copy.previous}
                >
                  <i className="feather-arrow-left" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="portfolio-carousel-button testimonial-carousel__arrow"
                  onClick={next}
                  aria-label={copy.next}
                >
                  <i className="feather-arrow-right" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
