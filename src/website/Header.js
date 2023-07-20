import React, { Component } from 'react'
import Home from './pages/Home';
import About from './pages/About'
import Courses from './pages/Courses';
import Payfee from './pages/Payfee';
import Contactus from './pages/Contactus'

export default class Header extends Component {
    state = {
        homeShow: false,
        aboutUsShow: false,
        coursesShow: false,
        payFeeShow: false,
        contactUsShow: false,
    }
     
    renderHome = () =>{
        const {homeShow} = this.state;
        return(
            <div>
                <button onClick={() => this.setState({homeShow: !this.state.homeShow})}>Home</button>
                {homeShow && <Home/>}
            </div>
        )
    }
    renderAboutUs = () =>{
        const {aboutUsShow} = this.state;
        return(
            <div>
                <button onClick={() => this.setState({aboutUsShow: !this.state.aboutUsShow})}>About US</button>
                {aboutUsShow &&<About/>}
            </div>
        )
    }
    renderCourses = () =>{
        const {coursesShow} = this.state;
        return(
            <div>
                <button onClick={() => this.setState({coursesShow: !this.state.coursesShow})}>Courses</button>
                {coursesShow && <Courses/>}
            </div>
        )
    }
    renderPayFee = () =>{
        const {payFeeShow} = this.state;
        return(
            <div>
                <button onClick={() => this.setState({payFeeShow: !this.state.payFeeShow})}>Pay Fee</button>
                {payFeeShow && <Payfee/>}
            </div>
        )
    }
    renderContactUs = () =>{
        const {contactUsShow} = this.state;
        return(
            <div>
                <button onClick={() => this.setState({contactUsShow: !this.state.contactUsShow})}>Contact Us</button>
                {contactUsShow && <Contactus/>}
            </div>
        )
    }



    render() {
    return (
        <div>
        {/* <button>Home</button> */}
        {/* <button>About Us</button> */}
        {/* <button>Courses</button>
        <button>Pay Fee</button>
        <button>Contact Us</button> */}
        {this.renderHome()}
        {this.renderAboutUs()}
        {this.renderCourses()}
        {this.renderPayFee()}
        {this.renderContactUs()}
    </div>

    )
  }
}
