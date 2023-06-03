import React from 'react'
import Card from 'react-bootstrap/Card';
import './Style4.css'
const Sub = () => {
  return (
    
      <Card className='container-fluid  pl-6 mt-5 bg-transparent sub'>
      <Card.Img style={{height:'100px', width:'100px'}} id='home' variant="top" src="naveena.jpeg" className=' container-fluid rounded-circle ' />
      <Card.Body>
        
        <Card.Text className='container-fluid  rounded'>
        <h5 className='container-fluid' >Iam a Mern stack developer</h5><br/>
                
              <nav><a href='https://www.instagram.com/accounts/login/'> <img src='download1.png' ait='' className='rounded' style={{height:'30px',width:'30px' ,marginLeft:'30px'}}></img></a><a href='https://www.linkedin.com/'><img src='download3.png' className='rounded-circle' style={{height:'30px',width:'30px' ,marginLeft:'30px'}}></img></a><a href='https://twitter.com/i/flow/login'><img src='download 2.jpg' className='rounded-circle'
                 style={{height:'30px',width:'30px' ,marginLeft:'20px'}}></img></a></nav><br/><br/>
        </Card.Text>
        
      </Card.Body>
    </Card>
    
  )
}

export default Sub
