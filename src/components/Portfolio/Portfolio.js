import React from 'react'
import './Style4.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Portfolio = () => {
  return (
    <div className='main  container-fluid'>
    <nav><h1><a href="#project">project</a></h1></nav>
    <div class="col-xl-12 col-sm-4 " style={{backgroundColor:''}}><br></br>
    <h1 style={{textAlign:'center',color:'black',fontStyle:'italic'}}><u>Naveena Viswanath</u></h1>
    <p style={{textAlign:'center',color:'black'}}>
    I am a Mern full stack software developer  . and I can adapt onto any
technology rapidly making myself flexible upon
any tech stack. A passionate, diligent person
who wants to learn continuously.</p>

  <div className='row'style={{color:'white',height:'300px'}}>
  <div class="col-xl-12 col-sm-4 " >
   <div class='im' >
  
   <div className="card" style={{width: "11rem" ,marginLeft:'100px',paddingTop:'50px', float:'left',backgroundColor:'transparent'}}>
  <img className="card-img-top" src="naveena.jpeg" alt="Card image cap" style={{width: "11rem",height:'8rem'}}/>
  <div className="card-body">
  </div></div>

  <div class="col-xl-12 col-sm-4 " style ={{paddingLeft:'300px'}} >
<h1 style={{textAlign:'center'}}>About</h1>
<p >
     Internship in Mern Full Stack (Present)<br/>
     PGP in JAVA SPECIALIZATION from NIIT,Palakkad in 2018 with 95%.<br/>
     B-TECH in ELECTRONICS AND COMMUNICATION from Jawaharlal College Of Engineering and Technology,Lakkidi <br/>
      in 2017 under Calicut University with CGPA 6.3.<br/>
      </p>
  
</div>
  
  <div id='project'>
  <h1 style={{textAlign:'center'}}> Projects</h1>
  <div class="card-group" style={{paddingTop:'0%'}} >
  <div class="card" style={{backgroundColor:'blue'}}>
    <img class="card-img-top" src="hospital.jpg" alt="Card image cap"  />
    <div class="card-body">
      <h5 class="card-title">Hospital Management</h5>
     </div>
  </div>
  <div class="card" style={{backgroundColor:'tomato'}}>
    <img class="card-img-top" src="download.jpg" alt="Card image cap" style={{height:'150px'}}/>
    <div class="card-body">
      <h5 class="card-title" style={{paddingBottom:'50px'}}>Zomato Website</h5>
       </div>
  </div>
  <div class="card" style={{backgroundColor:'chocolate'}}>
    <img class="card-img-top" src="coff2.jpg" alt="Card image cap" style={{height:'150px'}} />
    <div class="card-body">
      <h5 class="card-title">Cafe blog</h5>
       </div>
  </div>
</div>
</div>


  
 


    </div>
    </div>
</div>
   </div>
   </div> 
   
  )
}

export default Portfolio
