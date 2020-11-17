import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/home.css';
import { Link } from "react-router-dom";


class Home extends React.Component {


    render() {
      return (
        <div className="welcome">
            <h1 className="intro">Hello! My name is <span>Micah Mosley</span>!</h1>
            <p>I am a former Petroleum Engineer turned Software Engineer who specializes in React.js and Ruby on Rails!</p>
            <Button as={Link} to="/about">See More</Button>
        </div>
      )
    }
  }
  
export default Home