import { FC, useEffect, useState } from 'react';
import Recommendation from './_Recommendation/_Recommendation';
import styles from './Recommendations.module.scss'
import recommendationsData from './recommendationsData'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loadernp 
import { Carousel } from 'react-responsive-carousel';
import { slideBuilder } from './Recommendations.utilities';
import { useMediaQuery } from 'react-responsive';
import { RecommendationData } from './recommendationTypes';
const Recommendations: FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [slides, setSlides] = useState<RecommendationData[][]>([]);

  useEffect(() => {
    setSlides(slideBuilder(2, recommendationsData));
  }, []);
  return (
    <section className={`section-spacing mt-xxxl`} data-testid="recommendations">
      <h2 className={styles.title}>Endorsements from Industry Peers</h2>
      {slides.length > 0 &&
        <Carousel
          emulateTouch={isTabletOrMobile ? true : false}
          showThumbs={false}
          showStatus={false}
          ariaLabel="Recommendations"
        >
          {slides.map((slide, index) => (
            <div key={index} className={`mt-md mb-xl ${styles.slide}`}>
              {slide.map((rec) => (
                <Recommendation
                  key={rec.name}
                  name={rec.name}
                  title={rec.title}
                  text={rec.text}
                  img={rec.img}
                />
              ))}
            </div>
          ))}
        </Carousel>
      }
    </section>
  );
};

export default Recommendations;
