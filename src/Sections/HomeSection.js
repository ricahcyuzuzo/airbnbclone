import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Image from './airbnb.PNG';
import { IoMdOptions } from 'react-icons/io';

const HomeSection = () => {
    return (
        <Container style={{marginLeft: '80px'}}>
            <Row>
                <Col className='col-4' style={{paddingRight: '80px'}}>
                    <h4 style={{fontSize:  70, textAlign: 'left', marginTop:'150px'}}>Online Experience</h4>
                    <p style={{textAlign: 'left', width: '300px'}}>Find unique activities led by one-of-a-kind hosts — all without leaving home.</p>
                </Col>
                <Col className='col-8' style={{marginTop: '50px'}}>
                    <img src={Image} width='110%' />
                </Col>
            </Row>
            <Row style={{
                marginTop: '10px',
                justifyContent: 'space-between'
            }}>
                <Button style={{
                    backgroundColor: '#fff',
                    borderWidth: '0.01px',
                    borderRadius: '25px',
                    borderColor: '#000',
                    height: '40px',
                    color: '#000',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}> <IoMdOptions style={{
                        rotate: 90,
                        marginRight: '10px',
                        fontWeight: 'bold'
                    }} />Filters</Button>

                <Button style={{
                    backgroundColor: '#fff',
                    borderWidth: '0.1px',   
                    borderRadius: '25px',
                    borderColor: '#000',
                    height: '40px',
                    color: '#000',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>Dates</Button>

                <Button style={{
                    backgroundColor: '#fff',
                    borderWidth: '0.1px',
                    borderRadius: '25px',
                    borderColor: '#000',
                    height: '40px',
                    color: '#000',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>Group Size</Button>
                <div style={{
                    height: '40px',
                    width: 1,
                    backgroundColor: '#909090',
                    marginLeft: '10px',
                    marginRight: '10px',
                    marginTop: '10px'
                }}></div>

                <Button style={{
                    backgroundColor: '#09090909',
                    borderWidth: 0,
                    borderRadius: '25px',
                    borderColor: '#000',
                    height: '40px',
                    color: '#000',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>Size</Button>

                <Button style={{
                    backgroundColor: '#09090909',
                    borderWidth: 0,
                    borderRadius: '25px',
                    borderColor: '#000',
                    height: '40px',
                    color: '#000',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>Family</Button>

                <Button style={{
                    backgroundColor: '#09090909',
                    borderWidth: 0,
                    borderRadius: '25px',
                    borderColor: '#000',
                    height: '40px',
                    color: '#000',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>Family</Button>

                <Button style={{
                    backgroundColor: '#09090909',
                    borderWidth: 0,
                    borderRadius: '25px',
                    borderColor: '#000',
                    height: '40px',
                    color: '#000',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>Size</Button>

                <Button style={{
                    backgroundColor: '#09090909',
                    borderWidth: 0,
                    borderRadius: '25px',
                    borderColor: '#000',
                    height: '40px',
                    color: '#000',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>Group Size</Button>
                
                <Button style={{
                    backgroundColor: '#09090909',
                    borderWidth: 0,
                    borderRadius: '25px',
                    borderColor: '#000',
                    height: '40px',
                    color: '#000',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>Group Size</Button>

                <Button style={{
                    backgroundColor: '#09090909',
                    borderWidth: 0,
                    borderRadius: '25px',
                    borderColor: '#000',
                    height: '40px',
                    color: '#000',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}>Group Size</Button>

                <Button style={{
                    backgroundColor: '#fff',
                    borderWidth: 0.1,
                    fontWeight: 'bold',
                    borderRadius: '25px',
                    borderColor: '#000',
                    height: '40px',
                    width: '40px',
                    color: '#000',
                    marginLeft: '10px',
                    marginTop: '10px'
                }}> { '>' } </Button>


            </Row>         
        </Container>
    )
}

export default HomeSection;
