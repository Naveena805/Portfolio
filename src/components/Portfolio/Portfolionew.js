import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './Style4.css'
import Sub from './Sub';


const Portfolionew = () => {
  return (
   
    <div className='container-fluid'>
    <div className='one container-fluid' >
   

              
              <div className="container-fluid sidenav " >
                 
    <a href="#home" ><img src='home.png' className=' container-fluid rounded-circle ' style={{height:'30px',width:'50px' ,marginLeft:'-50px' }}/> Home</a><br/><br/><br/>
     <a href="#about"><img src='about.png' className=' container-fluid rounded-circle sidenav' style={{height:'30px',width:'50px' ,marginLeft:'-50px' }}/> About</a><br/><br/><br/>
    <a href="#experience"> <img src='exp.png' className='container-fluid  rounded-circle sidenav' style={{height:'30px',width:'50px' ,marginLeft:'-50px' }}/> Experience</a><br/><br/><br/>
    <a href="#projects"> <img src='pro.png' className='container-fluid  rounded-circle sidenav' style={{height:'30px',width:'50px' ,marginLeft:'-50px' }}/> Projects</a>


    <a href="#home" > </a><br/><br/><br/>
    <a href="#about"> </a><br/><br/><br/>
   
    </div>

    <Sub/>











</div>

              <div id='about' className='three' >
               <div className="container-fluid sidenav ">

              <a href="#home" ><img src='home.png' className=' container-fluid rounded-circle ' style={{height:'30px',width:'50px' ,marginLeft:'-50px' }}/> <span style={{backgroundColor:'black'}}>Home</span></a><br/><br/><br/>
              
    </div>
  


              <h1 style={{textAlign:'center',color:'brown',fontStyle:'italic',fontSize:'50px'}}><u>About</u></h1><br/><br/><br/>
<p style={{color:'black',fontStyle:'italic',fontSize:'20px'}} >
     Internship in Mern Full Stack (Present)<br/>
     PGP in JAVA SPECIALIZATION from NIIT,Palakkad in 2018 with 95%.<br/>
     B-TECH in ELECTRONICS AND COMMUNICATION from Jawaharlal College Of 

    Engineering and Technology,Lakkidi <br/>in 2017 under Calicut University with CGPA 6.3.<br/>
      </p>
  

              </div>


              <div id='experience' className='exp container-fluid' >
              <div className="container-fluid sidenav ">

<a href="#home" style={{color:'black'}}><img src='home.png' className=' container-fluid rounded-circle ' style={{height:'30px',width:'50px'  }}/><span  style={{backgroundColor:'white'}}> Home</span></a><br/><br/><br/>

</div>




              <h1 style={{textAlign:'center',color:'white',fontStyle:'italic',fontSize:'50px'}}><u>Experience</u></h1>
              <p className='container-fluid' style={{color:'white',fontStyle:'italic',fontSize:'20px',marginTop:'150px'}} >One year hand on experience as Java Developer.Having good understanding of OOPs and Database concepts with deep understanding of technology with focus on delivering business<br/> solutions requirements, Highly ethical and trustworthy.</p>
              </div>
              


              <div className='pro' id='projects'>
              <div className="container-fluid sidenav ">

<a href="#home" style={{color:'black'}}><img src='home.png' className=' container-fluid rounded-circle ' style={{height:'30px',width:'50px' ,marginLeft:'-50px' }}/><span  style={{backgroundColor:'white'}}> Home</span></a><br/><br/><br/>

</div>
              <h1 style={{textAlign:'center',color:'white',fontStyle:'italic',fontSize:'50px'}}><u>Projects</u></h1>

              

              <div className="card-group" style={{paddingTop:'8%'}} >
              
  <div className="card" style={{backgroundColor:'blue'}}>
    <img className="card-img-top" src="hospital.jpg" alt="Card image cap" style={{height:'150px'}}/>
    <div className="card-body">
      <h5 className="card-title">Hospital Management</h5>
     </div>
  </div>
  <div className="card" style={{backgroundColor:'tomato',marginLeft:'10px'}}>
    <img className="card-img-top" src="download.jpg" alt="Card image cap" style={{height:'150px'}}/>
    <div className="card-body">
      <h5 className="card-title" style={{paddingBottom:'50px'}}>Zomato Website</h5>
       </div>
  </div>
  <div className="card" style={{backgroundColor:'chocolate' ,marginLeft:'10px'}}>
    <img className="card-img-top" src="coff2.jpg" alt="Card image cap" style={{height:'150px'}} />
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
