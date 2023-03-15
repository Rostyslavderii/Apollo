import { Banner } from './HeroSaction.styled';
//import Slider from 'react-slick';
import Images from '../../images/Banner/Images.json';
// import image from '../../images/Banner/image.png';

export const HeroBanner = () => {
  return (
    <>
      <Banner>
        <ul>
          {Images.map(image => (
            <li key={image.id}>
              {' '}
              <img src={image.icon} alt={image.description}></img>
            </li>
          ))}
        </ul>
      </Banner>
    </>
  );
};

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// const imageMassive = [ ]

/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider> */
