import { FC } from 'react';
import Recommendation from './_Recommendation/_Recommendation';
import styles from './Recommendations.module.scss'
import recommendationsData from './recommendationsData'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loadernp 
import { Carousel } from 'react-responsive-carousel';
import { slideBuilder } from './Recommendations.utilities';
const Recommendations: FC = () => {

  return (
    <section className={`section-spacing`} data-testid="recommendations">
      <h2 className={styles.title}>Endorsements from Industry Peers</h2>
      <div className={styles.cardContainer}>
        <Carousel>
          {slideBuilder(2, recommendationsData).map((slide, index) => (
            <div key={index}>
              {slide.map((rec) => (
                <Recommendation 
                  key={rec.name}
                  name={rec.name}
                  title={rec.title}
                  text={rec.text} 
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Recommendations;
