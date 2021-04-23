import React, { Component } from "react";
import {Container,Row,Col,Image } from 'react-bootstrap';
export default class Profile extends Component {
    render() {
        return (            
            <Container >
                <Row>
                    <Col sm={8}>
                        <h3 style={{textAlign:'left',marginTop:32}} >About Me</h3>
                        <p style={{textAlign:'left',padding:0}}>
                        I`am Theofilus Christian Kuntolukito, Mobile Frontend App Developer.<br/>From Surakarta, Indonesia
                        </p>
                        <p style={{textAlign:'left',padding:0,fontSize:12}}>
                        I'm a Front-End programmer with a focus on mobile UI and website UI coding.<br/>
                        I'm hardworking, diligent, and dedicated—all qualities I put forward in everything I do.
                        </p>
                        
                        <h5 style={{textAlign:'left',marginTop:32}} >Experience</h5>
                        <p style={{textAlign:'left',padding:0,fontSize:12}}>
                        my experience mostly is making android mobile application interface.
                        </p>

                        <h6 style={{textAlign:'left'}} >Soku.id ( 2019 - 2021 )</h6>
                        <p style={{textAlign:'left',padding:0,fontSize:12}}>
                        My job is designing SOKU mobile app UI and SOKU website UI, developing SOKU mobile app and SOKU website<br/> and ensures SOKU mobile app and website is running well.                        
                        </p>
                        
                        <h6 style={{textAlign:'left'}} >IT Staff Intern PT. KUSUMAHADI SANTOSA ( 2014 - 2015 )</h6>
                        <p style={{textAlign:'left',padding:0,fontSize:12}}>
                        My job is design and developing employee management desktop app, ensures employee management desktop app is running well.                        
                        </p>
                        
                        <h5 style={{textAlign:'left',marginTop:32}} >What Skill I Have</h5>
                        
                        <p style={{textAlign:'left',padding:0,fontSize:12}} >
                            - React Native<br/>
                            - UI Design ( Figma, Adobe XD , Corel , Photoshop)<br/>
                        </p>

                        <h5 style={{textAlign:'left',marginTop:32}} >Let's Connect</h5>
                        
                        <p style={{textAlign:'left',padding:0,fontSize:12}} >
                            - Phone : +62-821-3613-2196<br/>
                            - Address : JL. Hasanudin GG IV NO.2 RT 03 / RW 13, Purwosari, Laweyan, Surakarta, 57142<br/>
                            - Email : theofilus.business@gmail.com<br/>
                            - Github : github.com/theokunto<br/>
                            - Instagram : @theokunto

                        </p>
                                                
                        </Col>
                    <Col sm={4}>
                        <Image src='images/mypict.webp' rounded style={{marginTop:32}}/>
                    </Col>
                </Row>
                
                
            </Container>            
        )}
}
