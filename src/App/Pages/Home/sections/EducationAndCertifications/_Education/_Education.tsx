
import econDegree from '../../../../../../assets/images/econ-degree.jpg'
import styles from './_Education.module.scss'

const Education = () => {
  return (
    <div data-testid='education'>
    <h3 className={`${styles.title} ft-clr-3`}>Education</h3>
      <div className={`grid`}>
        <div className='col-12'>
          <h4 className='mb-xs'>Bachelors of Economics</h4>
          <h5 className='mt-0'>Idaho State University, 2012 - 2016</h5>
        </div>
        <div className='col-6 col-12-tbd mt-xs'>
          <p className='mt-0'>Through my academic journey, I acquired an in-depth understanding of market dynamics, including the factors that drive businesses and consumers, as well as the process of identifying supply and demand in real-world scenarios.
          </p>
          <p>
          I delved into the principles of business and marketing, exploring the art of inbound marketing and examining the ways marketing can influence consumer behavior to stimulate purchases.
          </p>
        </div>
        <div className='col-12 col-6-dt g-ac-ctr mt-lg-tb mt-lg-mb grid'>
          <img className={`${styles.econDeg} col-12`} src={econDegree} alt="Idaho State University" />
        </div>
      </div>
    </div>
  )
}

export default Education;