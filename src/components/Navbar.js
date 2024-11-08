import React from 'react';
import "../styles/navbar.css";
import Instagram from '@mui/icons-material/Instagram';
import Facebook  from '@mui/icons-material/Facebook';
import X  from '@mui/icons-material/X';
import YouTube from '@mui/icons-material/YouTube';
import WhatsApp from '@mui/icons-material/WhatsApp';
import LinkedIn from '@mui/icons-material/LinkedIn';
import logo from "../assets/G-Space.png";
import PhoneIcon from '@mui/icons-material/Phone';
function Navbar() {
  return (
    <div className='navbar'>
<div className="navbar-top">
  <img src={logo} alt='logo'  />
  <h1 style={styles.title}>G-Space Technologies</h1> 
  <h1 style={styles.phone}><PhoneIcon/> +254742196109</h1>
<h1><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' className='instagram'><Instagram/> </a> </h1>
<h1> <a href='https://m.facebook.com/higal.ekombe.3/' target='_blank' rel='noopener noreferrer' className='facebook'><Facebook/></a></h1>
<h1><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' className='x'><X/> </a></h1>
<h1><a href='https://youtube.com/@reagan3938?si=lgaVMxmyg7eJ_gBs' target='_blank' rel='noopener noreferrer' className='youtube'><YouTube/></a> </h1>
<h1> <a href='https://www.linkedin.com/in/higal-ekombe-83172b278/' target='_blank' rel='noopener noreferrer' className='linkedin'><LinkedIn/></a></h1>
<h1> </h1>
<h1> <a href='https://wa.me/+254742106109' target='_blank' rel='noopener noreferer' className='whatsapp'><WhatsApp/>  </a></h1>



  
 </div>
<div className="navbar-bottom">
  <h1>yes Higal</h1>
</div>
    </div>
  )
}
const styles = {
  phone: {
    color: "red",
    fontSize: "15px"
  },
  title: {
    color: "blue",
    fontSize: "25px",
    fontFamily: "cursive"
  }
}
export default Navbar
