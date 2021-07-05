import React, { useState } from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import { RiGlobalLine } from 'react-icons/ri'
import { BsList, BsPeopleCircle } from 'react-icons/bs';
import Logo from './logo.png';
import './navbar.css';

const NavbarSection = () => {

    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    const onHover2 = () => {
        setHover2(!hover2);
    }

    const onHover3 = () => {
        setHover3(!hover3);
    }
        
    const btnStylesHovers = { 
            paddingLeft: '10px',
            paddingRight: '10px',
            borderRadius: '50px',
            backgroundColor: '#DBE1F3',
            color: '#000',
            borderWidth: '0px',
            fontWeight: '600',
            height: '40px',
            marginTop: '10px',
            cursor: 'pointer'
    }
    const btnStyles = { 
        borderRadius: '50px',
        paddingLeft: '10px',
        paddingRight: '10px',
        backgroundColor: '#fff',
        color: '#000',
        borderWidth: '0px',
        fontWeight: '600',
        height: '40px',
        marginTop: '10px',
        cursor: 'pointer'
}

    const scndBtnStyles = {
        fontWeight: 'bold',
        borderWidth: '0.1px',
        backgroundColor: '#fff',
        color: 'gray',
        borderRadius: '20px',
        borderColor: 'gray',
    }

    const scndBtnStylesHover = {
        fontWeight: 'bold',
        borderWidth: '0.1px',
        backgroundColor: '#fff',
        color: 'gray',
        borderRadius: '20px',
        borderColor: 'gray',
        boxShadow: '1px 1px 1px gray'
    }

    const thrdButtonStyles = {
        marginTop: '20px',
        color: '#000'
    }

    const thrdButtonStylesHover = {
        marginTop: '20px',
        color: '#000'
    }

    return (
        <Navbar style={{
            paddingLeft: '100px',
            paddingRight: '100px',
            boxShadow: '0px 0px 5px gray'
        }}>
            <Navbar.Brand href="#home">
                <img
                    src={Logo}
                    width='100'
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />

            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav><Button 
                className='btnNavbar' 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                style={hover ? btnStylesHovers : btnStyles }
                >Become a host</Button></Nav>
                <Nav.Link href="#features" onMouseEnter={onHover3} onMouseLeave={onHover3}><RiGlobalLine style={{
                    marginTop: '10px'
                }} size='25' /></Nav.Link>
                <Nav.Link href="#pricing">
                    <Button 
                        style={hover2 ? scndBtnStylesHover : scndBtnStyles } 
                        onMouseEnter={onHover2} 
                        onMouseLeave={onHover2}
                    >
                        <BsList size='25' />
                        <BsPeopleCircle size='25' />
                    </Button>
                </Nav.Link>
            </Nav>
        </Navbar>
        
    )
}

export default NavbarSection;
