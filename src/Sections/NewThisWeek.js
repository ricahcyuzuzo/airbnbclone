import React from 'react';
import { Row, Button, Container } from 'react-bootstrap'; 

const NextThisWeek = () => {
    return (
        <Container style={{marginTop: '25px', marginBottom: '25px'}}>
            <Row style={{justifyContent: 'space-between'}}>
                <h1 style={{marginTop: '20px'}}>New this week</h1>
                <div>
                    <Row>
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
                }}> { '<' } </Button>

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
                </div>
            </Row>
        </Container>
    )
}

export default NextThisWeek;
