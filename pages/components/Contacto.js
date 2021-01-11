import { ReactElement } from 'react'

import  styles from './contacto.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Row, Container } from 'react-bootstrap'


export default function Contacto(){

    return (

        <Container className={styles.contact}>
    <h1>
        CONTACTA CON NOSOTROS
    </h1>
    
    <Row>
        <Col xl ={6}>
        <div>
    <p>
    Si quieres información sobre cualquiera de nuestros servicios o estas interesado en tener más información, llama o manda email y nos pondremos en contacto
    contigo lo antes posible.<br>
    </br>
    Muchas gracias.
    </p>
    <p>
        <b>Teléfono:</b> +34 629 60 63 32 || +34 618 28 25 77

    </p>
    
    <div className={styles.form}>
        
    <p><b>Email:</b></p>
        <a href="mailto:creativainmobiliariaspain@gmail.com">  creativainmobiliariaspain@gmail.com</a> 
        
    </div>
   
            </div>
        </Col>
        <Col xl ={6}>
        <div className={styles.boxy}>
   <Image
   src='/logo.png'
   width= {400}
   height={120}
   >
   </Image>
            </div>
        </Col>
    </Row>

    </Container>
        )
}