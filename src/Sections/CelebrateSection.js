import React from 'react';
import { Row, Button, Container } from 'react-bootstrap'; 

const CelebrateSection = () => {
    return (
        <Container>
            <Row style={{justifyContent: 'space-between'}}>
                <h4 style={{marginTop: '20px'}}>Celebrate Pride around the world</h4>
                <div>
                    <Row>
                        <b style={{marginTop: '20px'}}><u>Show (12)</u></b>
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

export default CelebrateSection;
