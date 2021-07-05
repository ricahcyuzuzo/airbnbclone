import React from 'react';
import { Container, Row, Image, Button, Col } from 'react-bootstrap';
import BigImage from './image/bigImage.jpg';
import BigImage2 from './image/bigImage1.jpg';

const BigCards = () => {
    return (
        <div style={{marginBottom: '40px', width: '200%', flexDirection:'row', marginLeft: '100px'}}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <div style={{
                    width: '700px',
                    height: '350px',
                    backgroundColor: '#000',
                    borderRadius: '20px',
                    marginRight: '20px',
                    alignItems: 'start'
                }}>
                    <div style={{
                    position: 'absolute',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    width: '700px',
                    height: '350px',
                    borderRadius: '20px',
                    alignItems: 'start',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                    }}>
                        <Col style={{
                            textAlign: 'start',
                            color: '#fff',
                            marginTop: '20px'
                        }}>
                            <div>Collection</div>
                            <h4>
                                Tour before you travel
                            </h4>
                        </Col>
                        <Col style={{
                            textAlign: 'start',
                            color: '#fff',
                            marginTop: '220px',
                        }}>
                            <Button variant='light'>Show all</Button>
                        </Col>
                </div>
                    <Image src={BigImage} style={{
                        width: '700px',
                        height: '350px',
                        borderRadius: '20px'
                    }} />
                </div>
                <div style={{
                    width: '700px',
                    height: '350px',
                    backgroundColor: '#000',
                    borderRadius: '20px',
                    marginRight: '20px'
                }}>

                <div style={{
                    position: 'absolute',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    width: '700px',
                    height: '350px',
                    borderRadius: '20px',
                    alignItems: 'start',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                    }}>
                     <Col style={{
                            textAlign: 'start',
                            color: '#fff',
                            marginTop: '20px'
                        }}>
                            <div>Collection</div>
                            <h4>
                                Tour before you travel
                            </h4>
                        </Col>
                        <Col style={{
                            textAlign: 'start',
                            color: '#fff',
                            marginTop: '220px',
                        }}>
                            <Button variant='light'>Show all</Button>
                        </Col>
                        </div>
                    <Image src={BigImage2} style={{
                        width: '700px',
                        height: '350px',
                        borderRadius: '20px'
                    }} />

                </div>
            </div>
        </div>
    )
}

export default BigCards;
