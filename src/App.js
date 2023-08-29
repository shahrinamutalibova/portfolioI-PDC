import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Button, Card } from 'antd';
import { SearchOutlined ,PhoneOutlined ,FacebookFilled , YoutubeFilled , LinkedinFilled , InstagramFilled} from '@ant-design/icons';
import {Swiper , SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Logo from "./assets/photos/image-removebg-preview (10) 1.png"
import Family from "./assets/photos/t2PuBsfgkl__1_-removebg-preview (1) 1.png"
import Integrity from "./assets/photos/Circle Layer.png"
import Westin from "./assets/photos/image 3.png"
import Jummit from "./assets/photos/Frame 13.png"
import Holcim from "./assets/photos/image 5.png"
import ETV from "./assets/photos/Frame 15.png"
import Picture from "./assets/photos/Picture.png"
import Stakan from "./assets/photos/Image (1).png"
import Parashut from "./assets/photos/Image (2).png"
import Capilka from "./assets/photos/Image (3).png"
import Taxi from "./assets/photos/Image (4).png"
import Demonstrate from "./assets/photos/Scenery.png"
import Diversity from "./assets/photos/Object Ungroup.png"
import Teamwork from "./assets/photos/User Arrows.png"
import Technology from "./assets/photos/Rocket.png"
import Corporate from "./assets/photos/Bag.png"
import Digital from "./assets/photos/Cube.png"

const App = () => {
    return (
        <div>
          <div style={{position:"absolute",top:"-15px",zIndex:"2"}} className='container-fluid navbar'>
            <nav class="navbar container navbar-expand-lg ">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#"><img src={Logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-5 me-auto mb-2 mb-lg-0" style={{gap:"13px"}}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Retail</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">SME</a>
        </li>
        <li class="nav-link active" aria-current="page" href="#">
          <a>Corporate</a>
        </li>
        <li class="nav-link active" aria-current="page" href="#">
          <a>About Us </a>
        </li>
        <li class="nav-link active" aria-current="page" href="#">
             <a>Covid 19</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Campgains</a>
        </li>
      </ul>
      <SearchOutlined className='mx-3 text-danger'/>
        <button class="btn text-white" style={{background:"#ED027E",height:"30px"}} type="submit"><p style={{fontSize:"12px"}}>iSERVICE</p></button>
    </div>
  </div>
</nav>
            </div>
          <div className='container-fluid d-flex w-100 page'>
            <div className='white'>
              <h2 className='dream'>Chase Your <br />Dream with us</h2>
              <p style={{color:"#676767"}}>The harder you work for something, the greater you’ll feel when you achieve it.</p>
            <div className='py-2' style={{display:"flex",width:"100%"}}><Button className='px-3' style={{background:"#ED027E",height:"38px",color:"white"}}>APPLY ONLINE</Button>
            <Button className='px-3 mx-3' style={{border:"1px solid #ED027E",height:"38px",color:"#ED027E"}}>APPLY ONLINE</Button></div>
          <div style={{display:"flex",gap:"10px",height:"100%",position:"relative",bottom:"20px",alignItems:"center"}}>
          <PhoneOutlined className='text-danger' style={{rotate:"90deg"}}/><p style={{fontWeight:"700",marginTop:"15px"}}> 16519  </p><hr/>
         <FacebookFilled style={{background:"blue",color:"white"}}/>
         <YoutubeFilled style={{color:"red"}}/>
         <LinkedinFilled style={{color:"blue"}}/>
         <InstagramFilled/>
          </div>
            </div>
            <div className='pink'>
              <img className='imgFamily' src={Family}/>
            </div>
          </div>
          <div className='container py-5'>
            <h4 className='text-center' style={{fontWeight:"800"}}>Creating Extraordinary Customer Experience</h4>
            <p className='text-center text-secondary' style={{fontSize:"11px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi <br/> dignissim eu pharetra consequat montes, sagittis.</p>
          <div className='cards'>
            <Card className='card' style={{border:"none"}}>
               <img style={{width:"30px",height:"30px"}} src={Integrity}/>
               <h4 style={{fontWeight:"700",fontSize:"18px"}}>Integrity</h4>
               <p className='text-secondary' style={{fontSize:"12px"}}>Displaying the highest level of Integrity in the way we conduct our business</p>
            </Card>
            <Card className='card' style={{border:"none"}}>
               <img style={{width:"30px",height:"30px"}} src={Demonstrate}/>
               <h4 style={{fontWeight:"700",fontSize:"18px"}}>Teamwork</h4>
               <p className='text-secondary' style={{fontSize:"12px"}}>Displaying the highest level of Integrity in the way we conduct our business</p>
            </Card>  <Card className='card' style={{border:"none"}}>
               <img style={{width:"30px",height:"30px"}} src={Diversity}/>
               <h4 style={{fontWeight:"700",fontSize:"18px"}}>Diversity</h4>
               <p className='text-secondary' style={{fontSize:"12px"}}>Displaying the highest level of Integrity in the way we conduct our business</p>
            </Card>  <Card className='card' style={{border:"none"}}>
               <img style={{width:"30px",height:"30px"}} src={Teamwork}/>
               <h4 style={{fontWeight:"700",fontSize:"18px"}}>Teamwork</h4>
               <p className='text-secondary' style={{fontSize:"12px"}}>Displaying the highest level of Integrity in the way we conduct our business</p>
            </Card>  <Card className='card' style={{border:"none"}}>
               <img style={{width:"30px",height:"30px"}} src={Integrity}/>
               <h4 style={{fontWeight:"700",fontSize:"18px"}}>Collaboration</h4>
               <p className='text-secondary' style={{fontSize:"12px"}}>Displaying the highest level of Integrity in the way we conduct our business</p>
            </Card>  <Card className='card' style={{border:"none"}}>
               <img style={{width:"30px",height:"30px"}} src={Technology}/>
               <h4 style={{fontWeight:"700",fontSize:"18px"}}>Technology</h4>
               <p className='text-secondary' style={{fontSize:"12px"}}>Displaying the highest level of Integrity in the way we conduct our business</p>
            </Card>  <Card className='card' style={{border:"none"}}>
               <img style={{width:"30px",height:"30px"}}  src={Corporate}/>
               <h4 style={{fontWeight:"700",fontSize:"18px"}}>Corporate</h4>
               <p className='text-secondary' style={{fontSize:"12px"}}>Displaying the highest level of Integrity in the way we conduct our business</p>
            </Card>  <Card className='card' style={{border:"none"}}>
               <img style={{width:"30px",height:"30px"}}  src={Digital}/>
               <h4 style={{fontWeight:"700",fontSize:"18px"}}>Digital</h4>
               <p className='text-secondary' style={{fontSize:"12px"}}>Displaying the highest level of Integrity in the way we conduct our business</p>
            </Card>
          </div>
          </div>
          <div className="container-fluid text-center py-5" style={{background: "#FCE0EF33"}}>
              <h4>BUSINESS PARTNERS</h4>
              <Swiper
                 slides-per-view={3}
                 breakpoints={{
                   768: {
                     slidesPerView: 4,
                   },
                 }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
    >
      <SwiperSlide><img src={Westin}/></SwiperSlide>
      <SwiperSlide><img src={Jummit}/></SwiperSlide>
      <SwiperSlide><img src={Holcim}/></SwiperSlide>
      <SwiperSlide><img src={ETV}/></SwiperSlide>
      <SwiperSlide><img src={Westin}/></SwiperSlide>
      <SwiperSlide><img src={Jummit}/></SwiperSlide>
      <SwiperSlide><img src={Holcim}/></SwiperSlide>
      <SwiperSlide><img src={ETV}/></SwiperSlide>
    </Swiper>
          </div>
        <div className="container-fluid picture" >
          <div className='flowerimg'>
            <img src={Picture}/>
          </div>
          <div className='IPDC' >
            <h2 style={{fontWeight:"800"}}>IPDC AT A GLANCE</h2>
            <p style={{fontSize:"14px"}} className='text-secondary'>
            IPDC Finance Limited (previously known as "Industrial <br /> Promotion and Development Company of Bangladesh <br /> Limited") is the first private sector financial institution of <br /> the country established in 1981 by a distinguished group of <br /> shareholders namely International Finance Corporation <br /> (IFC), USA, German Investment and Development <br /> Company (DEG), Germany, The Aga Khan Fund for <br /> Economic Development (AKFED), Switzerland, <br /> Commonwealth Development Corporation (CDC), UK and <br /> the Government of Bangladesh
            </p>
            <button style={{color:"#ED017F",fontSize:"16px",fontWeight:"700",border:"none",background:"none"}}> Read More → </button>
          </div>
        </div>
        <div style={{background: "#FEF9FC"}} className='container-fluid py-5 text-center' height={"100vh"}>
             <h3 style={{fontWeight:"700"}}>Our Services</h3>
             <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
             <Swiper
         slides-per-view={3}
         breakpoints={{
           768: {
             slidesPerView: 4,
           },
         }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
    >
      <SwiperSlide><img style={{height:"60vh"}} src={Stakan}/></SwiperSlide>
      <SwiperSlide><img style={{height:"60vh"}} src={Parashut}/></SwiperSlide>
      <SwiperSlide><img style={{height:"60vh"}} src={Capilka}/></SwiperSlide>
      <SwiperSlide><img style={{height:"60vh"}} src={Taxi}/></SwiperSlide>
      <SwiperSlide><img style={{height:"60vh"}} src={Stakan}/></SwiperSlide>
      <SwiperSlide><img style={{height:"60vh"}} src={Parashut}/></SwiperSlide>
      <SwiperSlide><img style={{height:"60vh"}} src={Capilka}/></SwiperSlide>
      <SwiperSlide><img style={{height:"60vh"}} src={Taxi}/></SwiperSlide>
    </Swiper>
        </div>
        <div className='container text-center'>
        <h3 style={{fontWeight:"700"}}>Our best results for the year</h3>
        <p style={{fontSize:"12px"}} className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus <br/> mattis vel feugiat erat tortor eleifend.</p>
        <div className='cards'>
          <Card className='card' style={{border:"none"}}>
            <h2 style={{color: "#ED017F",fontWeight:"700"}}>57.6 bn</h2>
            <h6 style={{color:"grey"}}>LOAN PORTFOLIO</h6>
          </Card>   <Card className='card' style={{border:"none"}}>
            <h2 style={{color: "#ED017F",fontWeight:"700"}}>57.6 bn</h2>
            <h6 style={{color:"grey"}}>CLASSIFIED LOAN PORTFOLIO</h6>
          </Card>   <Card className='card'  style={{border:"none"}}>
            <h2 style={{color: "#ED017F",fontWeight:"700"}}>57.6 bn</h2>
            <h6 style={{color:"grey"}}>CLASSIFIED LOAN Coverage</h6>
          </Card>   <Card className='card'  style={{border:"none"}}>
            <h2 style={{color: "#ED017F",fontWeight:"700"}}>57.6 bn</h2>
            <h6 style={{color:"grey"}}>Deposit</h6>
          </Card>   <Card className='card'  style={{border:"none"}}>
            <h2 style={{color: "#ED017F",fontWeight:"700"}}>57.6 bn</h2>
            <h6 style={{color:"grey"}}>Shareholders equity</h6>
          </Card>   <Card  className='card' style={{border:"none"}}>
            <h2 style={{color: "#ED017F",fontWeight:"700"}}>57.6 bn</h2>
            <h6 style={{color:"grey"}}>Capital Adequacy Ratio</h6>
          </Card>   <Card className='card' style={{border:"none"}}>
            <h2 style={{color: "#ED017F",fontWeight:"700"}}>57.6 bn</h2>
            <h6 style={{color:"grey"}}>Market Capitalization</h6>
          </Card>   <Card className='card' style={{border:"none"}}>
            <h2 style={{color: "#ED017F",fontWeight:"700"}}>57.6 bn</h2>
            <h6 style={{color:"grey"}}>Credit Rating</h6>
          </Card>
        </div>
        </div>
        <div className='container-fluid py-5 text-center' style={{background: "#FEF9FC"}}>
             <h3 style={{fontWeight:"700"}}>Newsletter</h3>
             <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis aliquam arcu lacus.</p>
             <input style={{height:"35px",width:"300px",fontSize:"13px",border:"1px solid grey",borderRadius:"3px"}} placeholder='Your Email ' className='px-2'/> <button className='btn text-white' style={{background:"#ED017F",height:"35px",fontSize:"14px"}}><p>SUBSCRIBE</p></button>
        </div>
        <div className='container w-100 py-5 d-flex footer'>
          <div className='w-75'>
            <h6 style={{fontWeight:"700"}}>About the company</h6>
            <p style={{fontSize:"12px"}} className='text-secondary'>Learn To Love Growth <br /> And Change And You Will <br /> Be A Success. Microsoft <br /> Patch </p>
          </div>
          <div className='w-75'>
            <h6 style={{fontWeight:"700"}}>Products</h6>
            <p style={{fontSize:"13px"}} className='text-secondary'>CSR Activities</p>
            <p style={{fontSize:"13px"}} className='text-secondary'>Green Banking</p>
            <p style={{fontSize:"13px"}} className='text-secondary'>News</p>
            <p style={{fontSize:"13px"}} className='text-secondary'>Ongoing Campgain</p>
            <p style={{fontSize:"13px"}} className='text-secondary'>Updates</p>
          </div>
          <div className='w-75'>
            <h6 style={{fontWeight:"700"}}>Get Started</h6>
            <p style={{fontSize:"12px"}} className='text-secondary'>Career</p>
            <p style={{fontSize:"12px"}} className='text-secondary'>Contact Us</p>
            <p style={{fontSize:"12px"}} className='text-secondary'>Government Securities</p>
            <p style={{fontSize:"12px"}} className='text-secondary'>Examples</p>
            <p style={{fontSize:"12px"}} className='text-secondary'>NIS</p>
          </div>
          <div className='w-75'>
            <h6 style={{fontWeight:"700"}}>About</h6>
            <p style={{fontSize:"12px"}} className='text-secondary'>CSR Activities</p>
            <p style={{fontSize:"12px"}} className='text-secondary'>Green Banking</p>
            <p style={{fontSize:"12px"}} className='text-secondary'>News</p>
            <p style={{fontSize:"12px"}} className='text-secondary'>Ongoing Campgain</p>
            <p style={{fontSize:"12px"}} className='text-secondary'>Updates</p>
          </div>
          <div className='w-5'>
            <h6 style={{fontWeight:"700"}}>16519</h6>
          </div>
        </div>
        </div>
      
    );
}

export default App;
