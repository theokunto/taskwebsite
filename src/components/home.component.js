import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
    componentDidMount() {
    fetch("https://simple-contact-crud.herokuapp.com/contact",
    {
        method: 'GET',
        headers: { 'Accept': 'application/json'},
    }
    )
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
            isLoaded: true,
            items: result.data
            });
        },        
        (error) => {
            this.setState({
            isLoaded: true,
            error
            });
        }
        )
    }

    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (    
            <>
            <h5 style={{marginTop:'2%',marginBottom:'5%'}}>My Friends</h5>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
              >
             {items.map((item) => (                                        
                <div>
                  <img src={item.photo == "N/A" || item.photo == "123"  ? "/images/defaultperson.png" : item.photo} />
                  <div className="myCarousel">
                    <h3>{item.firstName}</h3>
                    <h4>{item.lastName}</h4>
                    <p>
                      My Ages is {item.age}
                    </p>
                  </div>
                </div>
             
               
                ))}
            </Carousel>
            </>
            )
        }
    }    
            
            
    
}