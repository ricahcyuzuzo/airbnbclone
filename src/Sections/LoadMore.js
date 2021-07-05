import React from 'react'
import { Button, Container } from 'react-bootstrap'
const LoadMore = () => {
    return (
        <Container style={{
            marginBottom: '40px',
            marginTop: '40px',
        }}>
            <Button variant='dark' style={{
                borderRadius: '20px',
                paddingRight: '20px',
                paddingLeft: '20px'
            }}>Load More</Button>
        </Container>
    )
}

export default LoadMore
