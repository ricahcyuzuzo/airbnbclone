import React from 'react'
import { Container, Row, Button, Image, Card } from 'react-bootstrap';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import Img1 from './image/image6.jpg'
import Img2 from './image/img2.jpg';
import Img3 from './image/img3.jpg';

const HorizontalCards = () => {
    return (
        <Container>
            <Row style={{justifyContent: 'space-between'}}>
                <Card style={{
                    borderRadius: '10px',
                    width: '30%',
                    height: '200px',
                    borderWidth: '0.1px',
                    borderColor: '#000',
                    backgroundColor: '#fff',
                    marginBottom: '20px',
                    paddingLeft: '10px'
                }}>
                    <Row style={{ justifyContent: 'space-between' }}>
                    <div style={{
                        backgroundColor: '#fff',
                        width: '130px',
                        height: '180px',
                        borderRadius: '10px',
                        marginTop: '10px',
                        marginLeft: '20px'
                    }}>
                        <AiOutlineHeart size={25} style={{
                            position: 'absolute',
                            color: '#fff',
                            marginLeft: '100px',
                            marginTop: '10px'
                        }} />
                        <Image src={Img1} style={{
                            width: '130px',
                            height: '180px',
                            borderRadius: '10px'
                        }} />
                    </div>

                    <div style={{textAlign: 'start', marginTop: '20px', width: '200px', fontSize: '15px'}}>
                        <div color='gray' style={{marginBottom: '7px'}}><AiFillStar color='#BA3E49' style={{marginRight: '5px', marginBottom: '4px'}}/>4.96 (64). United States</div>
                        <div >
                            LGBTQ History with Drag Perfomances
                        </div>
                        <div style={{marginTop: '7px'}}><b>From $25</b> / Person</div>
                        <div>
                            <Row>
                            <Button style={{
                                backgroundColor: '#fff',
                                borderWidth: '0.1px',
                                borderRadius: '10px',
                                borderColor: '#000',
                                height: '40px',
                                color: '#000',
                                paddingLeft: '5px',
                                paddingRight: '5px',
                                marginLeft: '10px',
                                marginTop: '10px'
                            }}>8:30 AM</Button>
                            <Button style={{
                                backgroundColor: '#fff',
                                borderWidth: '0.1px',
                                borderRadius: '10px',
                                borderColor: '#000',
                                height: '40px',
                                color: '#000',
                                paddingLeft: '5px',
                                paddingRight: '5px',
                                marginLeft: '10px',
                                marginTop: '10px'
                            }}>10:00 AM</Button>
                            </Row>
                        </div>
                    </div>
                    </Row>
                    
                </Card>

                <Card style={{
                    borderRadius: '10px',
                    width: '30%',
                    height: '200px',
                    borderWidth: '1px',
                    borderColor: '#000',
                    backgroundColor: '#fff',
                    marginBottom: '20px',
                    paddingLeft: '10px'
                }}>
                    <Row style={{ justifyContent: 'space-between' }}>
                    <div style={{
                        backgroundColor: '#fff',
                        width: '130px',
                        height: '180px',
                        borderRadius: '10px',
                        marginTop: '10px',
                        marginLeft: '20px'
                    }}>
                        <AiOutlineHeart size={25} style={{
                            position: 'absolute',
                            color: '#fff',
                            marginLeft: '100px',
                            marginTop: '10px'
                        }} />
                        <Image src={Img2} style={{
                            width: '130px',
                            height: '180px',
                            borderRadius: '10px'
                        }} />
                        
                    </div>

                    <div style={{textAlign: 'start', marginTop: '20px', width: '200px', fontSize: '15px'}}>
                        <div color='gray' style={{marginBottom: '7px'}}><AiFillStar color='#BA3E49' style={{marginRight: '5px', marginBottom: '4px'}}/>4.96 (64). United States</div>
                        <div >
                            LGBTQ History with Drag Perfomances
                        </div>
                        <div style={{marginTop: '7px'}}><b>From $25</b> / Person</div>
                        <div>
                            <Row>
                            <Button style={{
                                backgroundColor: '#fff',
                                borderWidth: '0.1px',
                                borderRadius: '10px',
                                borderColor: '#000',
                                height: '40px',
                                color: '#000',
                                paddingLeft: '5px',
                                paddingRight: '5px',
                                marginLeft: '10px',
                                marginTop: '10px'
                            }}>8:30 AM</Button>
                            <Button style={{
                                backgroundColor: '#fff',
                                borderWidth: '0.1px',
                                borderRadius: '10px',
                                borderColor: '#000',
                                height: '40px',
                                color: '#000',
                                paddingLeft: '5px',
                                paddingRight: '5px',
                                marginLeft: '10px',
                                marginTop: '10px'
                            }}>10:00 AM</Button>
                            </Row>
                        </div>
                    </div>
                    </Row>
                    
                </Card>

                <Card style={{
                    borderRadius: '10px',
                    width: '30%',
                    height: '200px',
                    borderWidth: '0.1px',
                    borderColor: '#000',
                    backgroundColor: '#fff',
                    marginBottom: '20px',
                    paddingLeft: '10px'
                }}>
                    <Row style={{ justifyContent: 'space-between' }}>
                    <div style={{
                        backgroundColor: '#fff',
                        width: '130px',
                        height: '180px',
                        borderRadius: '10px',
                        marginTop: '10px',
                        marginLeft: '20px'
                    }}>
                        <AiOutlineHeart size={25} style={{
                            position: 'absolute',
                            color: '#fff',
                            marginLeft: '100px',
                            marginTop: '10px'
                        }} />
                        <Image src={Img3} style={{
                            width: '130px',
                            height: '180px',
                            borderRadius: '10px'
                        }} />
                    </div>

                    <div style={{textAlign: 'start', marginTop: '20px', width: '200px', fontSize: '15px'}}>
                        <div color='gray' style={{marginBottom: '7px'}}><AiFillStar color='#BA3E49' style={{marginRight: '5px', marginBottom: '4px'}}/>4.96 (64). United States</div>
                        <div >
                            LGBTQ History with Drag Perfomances
                        </div>
                        <div style={{marginTop: '7px'}}><b>From $25</b> / Person</div>
                        <div>
                            <Row>
                            <Button style={{
                                backgroundColor: '#fff',
                                borderWidth: '0.1px',
                                borderRadius: '10px',
                                borderColor: '#000',
                                height: '40px',
                                color: '#000',
                                paddingLeft: '5px',
                                paddingRight: '5px',
                                marginLeft: '10px',
                                marginTop: '10px'
                            }}>8:30 AM</Button>
                            <Button style={{
                                backgroundColor: '#fff',
                                borderWidth: '0.1px',
                                borderRadius: '10px',
                                borderColor: '#000',
                                height: '40px',
                                color: '#000',
                                paddingLeft: '5px',
                                paddingRight: '5px',
                                marginLeft: '10px',
                                marginTop: '10px'
                            }}>10:00 AM</Button>
                            </Row>
                        </div>
                    </div>
                    </Row>
                    
                </Card>
            </Row>
        </Container>
    )
}

export default HorizontalCards;

const styles = {
    cardPhotoDiv: {
        width: '200px',
        height: '280px',
        borderWidth: '1px',
        borderColor: '#000',
        borderRadius: 20,
        backgroundColor: '#000'
    }, 
    card: {
        marginLeft: '20px'
    }
}