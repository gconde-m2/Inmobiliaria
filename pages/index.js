import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Foot from './components/footer'
import Carousel from 'react-bootstrap/Carousel'
import Carr from './components/carrousel'
import Contacto from './components/Contacto'
import { Button, Container, Row, Col, Grid } from 'react-bootstrap';

export default function Home() {


  return (
    <>
      <Carr />

      <Head>
        <title>Creativa inmobiliaria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.container}>
        <div className={styles.overlay} data-aos="fade-in" data-aos-duration="2000">

          <h1 className={styles.intro}>
            Vivienda y suelo en toda España
       </h1>
       <h1 >
            Magníficas viviendas en la costa
       </h1>
          <p>
            Los mejores expertos a tu disposición
       </p>
          <Button href="#contacto" className={styles.butt}>
            Contáctanos
       </Button>
        </div>
      </section>

      <section className={styles.about} id="about">
        <Container >

          <Row data-aos="fade-in" data-aos-duration="2000">
            <Col xs={12} s={12} xl={6} xxl={6}>
              <h1 >
                Los mejores expertos en inmobiliaria
        </h1>
              <p>Si estas pensando en comprar un inmueble y no te decides, en Creativa inmobiliaria contamos con agentes comerciales
          con más de 20 años de experiencia en el sector, te apoyarán y aconsejarán en cualquier duda.</p>
            </Col>
            <Col className={styles.imagesleft} xs={12} s={12} xl={6} xxl={6}  >
              <Image
                src="/inmobi-deal.jpg"
                alt="Picture of the author"
                width={560}
                height={400}
              />
            </Col>


          </Row>
          <Row className={styles.abogados}>

            <Col className={styles.imagesleft} xs={12} s={12} xl={6} xxl={6} xl={{ order: 'first' }} data-aos="fade-in" data-aos-duration="2000">

              <Image
                src="/inmobi-deal2.jpg"
                alt="Picture of the author"
                width={560}
                height={400}
              />
            </Col>
            <Col xs={12} s={12} xl={6} xxl={6} xs={{ order: 'first' }} data-aos="fade-in" data-aos-duration="2000">
              <h1>
                Abogados expertos en Derecho Inmobiliario e inversiones
        </h1>
              <p>Contamos con un equipo de abogados experto en Derecho Inmobiliario. Te ayudamos con cualquier problema o duda legal que tengas sobre inmuebles o inversiones.</p>
            </Col>

          </Row>
        </Container>


      </section>

      <section className={styles.footer} data-aos="fade-in" id="contacto">
        <Contacto />
      </section>

      <footer>
        <Foot />
      </footer>

    </>
  )
}
