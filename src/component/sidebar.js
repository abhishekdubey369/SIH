import React from "react";
import "./sidebar.css";
import { useInView } from "react-intersection-observer";
// import i18next from 'i18next';


// i18next.init({
//   lng: 'en', // if you're using a language detector, do not define the lng option
//   debug: true,
//   resources: {
//     en: {
//       translation: {
//         "key": "hello world"
//       }
//     }
//   }
// });

// // document.getElementById('output').innerHTML = i18next.t('key');
// console.log(i18next.t('key'));

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="ERROR 202" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt="error 202" className="slider__image" />
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;