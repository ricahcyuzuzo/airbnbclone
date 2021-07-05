import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import Image1 from './image/image1.jpg'
import Image2 from './image/image2.jpg';
import Image3 from './image/image3.jpg';
import Image4 from './image/image4.jpg';
import Image5 from './image/image5.jpg';
import { AiOutlineHeart } from 'react-icons/ai';

const SellingCardSection = () => {
    return (
        <Container style={{marginTop: '30px'}}>
            <Row style={{justifyContent: 'space-between'}}>
                <div style={styles.card}>
                    <div style={styles.cardPhotoDiv}>
                    <AiOutlineHeart size={25} style={{
                            position: 'absolute',
                            color: '#fff',
                            marginLeft: '150px',
                            marginTop: '10px'
                        }} />
                        <Image src={Image1} style={styles.image} />
                    </div>
                    <div style={{textAlign: 'start', marginTop: '20px', width: '200px'}}>
                        <div color='gray' style={{marginBottom: '7px'}}><AiFillStar color='#BA3E49' style={{marginRight: '5px', marginBottom: '4px'}}/>4.96 (64). United States</div>
                        <div >
                            LGBTQ History with Drag Perfomances
                        </div>
                        <div style={{marginTop: '7px'}}><b>From $25</b> / Person</div>
                    </div>
                </div>

                <div style={styles.card}>
                    <div style={styles.cardPhotoDiv}>
                    <AiOutlineHeart size={25} style={{
                            position: 'absolute',
                            color: '#fff',
                            marginLeft: '150px',
                            marginTop: '10px'
                        }} />
                        <Image src={Image2} style={styles.image} />
                    </div>
                    <div style={{textAlign: 'start', marginTop: '20px', width: '200px'}}>
                        <div color='gray' style={{marginBottom: '7px'}}><AiFillStar color='#BA3E49' style={{marginRight: '5px', marginBottom: '4px'}}/>4.96 (64). United States</div>
                        <div >
                            LGBTQ History with Drag Perfomances
                        </div>
                        <div style={{marginTop: '7px'}}><b>From $25</b> / Person</div>
                    </div>
                </div>

                <div style={styles.card}>
                    <div style={styles.cardPhotoDiv}>
                    <AiOutlineHeart size={25} style={{
                            position: 'absolute',
                            color: '#fff',
                            marginLeft: '150px',
                            marginTop: '10px'
                        }} />
                        <Image src={Image3} style={styles.image} />
                    </div>
                    <div style={{textAlign: 'start', marginTop: '20px', width: '200px'}}>
                        <div color='gray' style={{marginBottom: '7px'}}><AiFillStar color='#BA3E49' style={{marginRight: '5px', marginBottom: '4px'}}/>4.96 (64). United States</div>
                        <div >
                            LGBTQ History with Drag Perfomances
                        </div>
                        <div style={{marginTop: '7px'}}><b>From $25</b> / Person</div>
                    </div>
                </div>

                <div style={styles.card}>
                    <div style={styles.cardPhotoDiv}>
                    <AiOutlineHeart size={25} style={{
                            position: 'absolute',
                            color: '#fff',
                            marginLeft: '150px',
                            marginTop: '10px'
                        }} />
                        <Image src={Image4} style={styles.image} />
                    </div>
                    <div style={{textAlign: 'start', marginTop: '20px', width: '200px'}}>
                        <div color='gray' style={{marginBottom: '7px'}}><AiFillStar color='#BA3E49' style={{marginRight: '5px', marginBottom: '4px'}}/>4.96 (64). United States</div>
                        <div >
                            LGBTQ History with Drag Perfomances
                        </div>
                        <div style={{marginTop: '7px'}}><b>From $25</b> / Person</div>
                    </div>
                </div>

                <div style={styles.card}>
                    <div style={styles.cardPhotoDiv}>
                    <AiOutlineHeart size={25} style={{
                            position: 'absolute',
                            color: '#fff',
                            marginLeft: '150px',
                            marginTop: '10px'
                        }} />
                        <Image src={Image5} style={styles.image} />
                    </div>
                    <div style={{textAlign: 'start', marginTop: '20px', width: '200px'}}>
                        <div color='gray' style={{marginBottom: '7px'}}><AiFillStar color='#BA3E49' style={{marginRight: '5px', marginBottom: '4px'}}/>4.96 (64). United States</div>
                        <div >
                            LGBTQ History with Drag Perfomances
                        </div>
                        <div style={{marginTop: '7px'}}><b>From $25</b> / Person</div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default SellingCardSection;

const styles = {
    cardPhotoDiv: {
        width: '200px',
        height: '280px',
        borderWidth: '1px',
        borderColor: '#000',
        borderRadius: '40px',
        backgroundColor: '#000'
    }, 
    card: {
        marginLeft: '20px'
    },
    image: {
        width: '200px',
        height: '280px',
        borderRadius: '20px',
    }
}
