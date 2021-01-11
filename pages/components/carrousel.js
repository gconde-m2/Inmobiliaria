import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './layout.module.css'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel'
import Slider from "react-slick";

export default function caroussel(props) {
 
 
   
  return (
    <div className={styles.backg}>
    <Carousel className={styles.imgs} >
  <Carousel.Item className={styles.fondo}>
    <img
      className="d-block w-100 vh-100  min-vw-100 min-vh-100"
      src="/inmobi4.jpg"
      alt="First slide"
      />

  </Carousel.Item>
  <Carousel.Item className={styles.fondo}>
    <img
      className="d-block w-100 vh-100  min-vw-100 min-vh-80"
      src="/inmobi3.jpg"
      alt="Third slide"
      />

  </Carousel.Item>
  <Carousel.Item className={styles.fondo}>
    <img
      className="d-block w-100 vh-100 min-vw-100 min-vh-100"
      src="/inmobiliaria.jpg"
      alt="Third slide"
      />
  </Carousel.Item>
</Carousel>
    </div>
       
  )
}


