import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './Style4.css'

import video1 from './assets/video1.mp4'
import navee from './assets/navee.JPG'
import im10 from './assets/im10.png'
import download1 from './assets/download1.png'
import download3 from './assets/download3.png'
import download2 from './assets/download2.jpg'
import result1 from './assets/result1.gif'
import download from './assets/download.jpg'
import coff2 from './assets/coff2.jpg'
import hospital from './assets/hospital.jpg'
const Portfolionew = () => {
  return (
   
    <div className='main container-fluid' id='home'>
      <video className='main' src={video1} autoPlay loop muted/>
    
  


    <br/>
    <nav className=" container-fluid navbar navbar-expand-lg navbar-transparent bg-black  navbar-fixed-top " style={{marginTop:'-25px'}}>
  <div className=" container-fluid ">
    
  <a className="navbar-brand container-fluid " href="#home"><img  className='imdrop container-fluid' src={im10}  /></a>
    <div className="collapse navbar-collapse container-fluid " id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid">
        <li className="nav-item container-fluid">
          <a className="nav-link container-fluid" style={{color:'red'}}  href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link a" style={{color:'red',paddingLeft:'50px'}}  href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:'red' ,paddingLeft:'50px'}}  href='#experience'>Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:'red' ,paddingLeft:'50px'}} href='#projects'>Projects</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>



<div className="card container-fluid bg-transparent" style={{width: '20rem',height:'32rem',top:'100px'}} >
  <img src={navee} className="card-img-top rounded" alt="..." style={{width: '100px',height:'150px',marginLeft:'90px'}}/>
  <div className="card-body">
    <h3 className="card-title" style={{textAlign:'center',color:'white'}}>NAVEENA V <img src={result1} style={{backgroundColor:'transparent',width:'300PX',marginLeft:'-10PX'}}/></h3>
    <p className="card-text"> <nav><a href='https://www.instagram.com/accounts/login/'> <img src={download1} ait='' className='rounded' style={{height:'30px',width:'30px' ,marginLeft:'50PX'}}></img></a><a href='https://www.linkedin.com/'><img src={download3} className='rounded-circle' style={{height:'30px',width:'30px' ,marginLeft:'30px'}}></img></a><a href='https://twitter.com/i/flow/login'><img src={download2} className='rounded-circle'
                 style={{height:'30px',width:'30px' ,marginLeft:'20px'}}></img></a></nav><br/><br/>
       </p>
  
  </div>
</div>












              <div id='about' className='three' >
              <nav className=" container-fluid navbar navbar-expand-lg navbar-dark bg-dark  navbar-fixed-top ">
  <div className="container-fluid ">
    
  <a className="navbar-brand " href="#home"><img className='imdrop' src={im10} ></img></a>
    <div className="collapse navbar-collapse  " id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link " style={{color:'red'}}  href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link a" style={{color:'red',paddingLeft:'50px'}}  href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:'red' ,paddingLeft:'50px'}}  href='#experience'>Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:'red' ,paddingLeft:'50px'}} href='#projects'>Projects</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

              <br/>

<div className='container-fluid' style={{height:'450px' ,width:'400px',backgroundColor:'white',opacity:'.6',borderRadius:'25px'}}>
              <h1 style={{textAlign:'center',color:'brown',fontStyle:'italic',fontSize:'50px'}}><u>About</u></h1><br/><br/><br/>
<p style={{color:'black',fontStyle:'italic',fontSize:'20px'}} >
     Internship in Mern Full Stack (Present)<br/>
     PGP in JAVA SPECIALIZATION from NIIT,Palakkad in 2018 with 95%.<br/>
     B-TECH in ELECTRONICS AND COMMUNICATION from Jawaharlal College Of 

    Engineering and Technology,Lakkidi <br/>in 2017 under Calicut University with CGPA 6.3.<br/>
      </p>
      </div>

              </div>


              <div id='experience' className='exp container-fluid' >
              <nav className=" container-fluid navbar navbar-expand-lg navbar-dark bg-black  navbar-fixed-top ">
  <div className="container-fluid ">
    
  <a className="navbar-brand " href="#home"><img className='imdrop' src={im10} ></img></a>
    <div className="collapse navbar-collapse  " id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link " style={{color:'red'}}  href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link a" style={{color:'red',paddingLeft:'50px'}}  href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:'red' ,paddingLeft:'50px'}}  href='#experience'>Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:'red' ,paddingLeft:'50px'}} href='#projects'>Projects</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

<br/>

<div className='container-fluid' style={{height:'450px' ,width:'400px',backgroundColor:'white',opacity:'.6',borderRadius:'25px'}}>
 
              <h1 style={{textAlign:'center',color:'brown',fontStyle:'italic',fontSize:'50px'}}><u>Experience</u></h1>
              <p className='container-fluid' style={{color:'black',fontStyle:'italic',fontSize:'20px',marginTop:'50px'}} >One year hand on experience as Java Developer.Having good understanding of 

              <br/>OOPs and Database concepts with deep understanding of technology with focus<br/> on delivering business solutions requirements, Highly ethical and trustworthy.</p>
             </div> </div>
              


              <div className='pro' id='projects'>

              <nav className=" container-fluid navbar navbar-expand-lg navbar-dark bg-dark  navbar-fixed-top ">
  <div className="container-fluid ">
    
    <a className="navbar-brand " href="#home"><img className='imdrop' src={im10} ></img></a>
    <div className="collapse navbar-collapse  " id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link " style={{color:'red'}}  href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link a" style={{color:'red',paddingLeft:'50px'}}  href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:'red' ,paddingLeft:'50px'}}  href='#experience'>Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " style={{color:'red' ,paddingLeft:'50px'}} href='#projects'>Projects</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<br/>
              <h1 style={{textAlign:'center',color:'white',fontStyle:'italic',fontSize:'50px'}}><u>Projects</u></h1>

              

              <div className="card-group" style={{paddingTop:'8%'}} >
              
  <div className="card" style={{backgroundColor:'blue'}}>
    <img className="card-img-top" src={hospital}alt="Card image cap" style={{height:'150px'}}/>
    <div className="card-body">
      <h5 className="card-title">Hospital Management</h5>
     </div>
  </div>
  <div className="card" style={{backgroundColor:'tomato',marginLeft:'10px'}}>
    <img className="card-img-top" src={download} alt="Card image cap" style={{height:'150px'}}/>
    <div className="card-body">
      <h5 className="card-title" style={{paddingBottom:'50px'}}>Zomato Website</h5>
       </div>
  </div>
  <div className="card" style={{backgroundColor:'chocolate' ,marginLeft:'10px'}}>
    <img className="card-img-top" src={coff2} alt="Card image cap" style={{height:'150px'}} />
    <div className="card-body">
      <h5 className="card-title">Cafe blog</h5>
       </div>

  </div>
</div>



              </div>
    </div>
  )
}

export default Portfolionew
