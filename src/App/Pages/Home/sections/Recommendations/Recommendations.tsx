import { FC, useEffect, useState } from 'react';
import Recommendation from './_Recommendation/_Recommendation';
import styles from './Recommendations.module.scss'
import recommendationsData from './recommendationsData'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loadernp 
import { Carousel } from 'react-responsive-carousel';
import { slideBuilder } from './Recommendations.utilities';
import { useMediaQuery } from 'react-responsive';
import { RecommendationData } from './recommendationTypes';
import { animated, useInView } from '@react-spring/web';
import { GobalSectionRootMargin, gobalFromSectionTranslateY, gobalSectionDelay, gobalSectionDuration, gobalToSectionTranslateY } from '../../../_utilities/animationConfigs';

const Recommendations: FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [slides, setSlides] = useState<RecommendationData[][]>([]);

  const [recommendationsRef, recommendationsSpring] = useInView(() => {
    return ({
      from: { opacity: 0, transform: gobalFromSectionTranslateY },
      to: { opacity: 1, transform: gobalToSectionTranslateY },
      delay: gobalSectionDelay,
      config: { duration: gobalSectionDuration }
    });
  }, {rootMargin: GobalSectionRootMargin})

  useEffect(() => {
    if(isTabletOrMobile)
      setSlides(slideBuilder(1, recommendationsData));
    else
      setSlides(slideBuilder(2, recommendationsData));
  }, [isTabletOrMobile])

  return (
    <animated.section ref={recommendationsRef} style={recommendationsSpring} className={`${styles.recommendationsSpacing}`} data-testid="recommendations" id="Recommendations">
      <h2 className={styles.title}>Endorsements from Industry Peers</h2>
        <Carousel
          emulateTouch={false}
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
    </animated.section>
  );
};

export default Recommendations;
