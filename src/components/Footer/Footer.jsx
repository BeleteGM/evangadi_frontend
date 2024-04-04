import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import footerLogo from '../../images/evangadi-logo-footer (1).png';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
  } from "react-icons/fa6";

  
const Footer = () => {
    const socialLinks = [
        { label: "Facebook", icon: FaFacebook , to:'https://www.facebook.com/evangaditech' },
        { label: "Instagram", icon: FaInstagram, to:"https://www.instagram.com/evangaditech/"},
        { label: "YouTube", icon: FaYoutube, to:"https://www.youtube.com/@EvangadiTech" },
        
       
      
        
      ];
  return (
    <footer className='bg-[#3B455A] p-14 hover:animate-pulse'>
      <section className=' container-fluid sm:block md:flex flex-row justify-between md:max-w-[1200px] mx-auto '>
        <div className='container'>
        <img src={footerLogo} className='w-100 mb-10'/>
        <div className='flex flex-row '>
           
           
        
            <div className="footer-icons flex items-center space-x-3">
              {socialLinks.map((socialLink, index) => {
                const Icon = socialLink.icon;
                const to= socialLink.to;
                return (
                    
                  <Link to={to}>
                  <Icon
                    key={`social-${index}`}
                    className="w-14 h-14 p-2 rounded-full hover:bg-white hover:text-red-600 cursor-pointer"
                  />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className='container text-white'>
        <h3 className='text-white mb-10 text-2xl'>usefull Link</h3>
        <div className='opacity-50'>
        <p><a>How it works</a></p>
            <p><a>term of service</a></p>
            <p><a>Privacy policy</a></p>
        </div>
        </div>
        <div className='container text-white'>
             <h3 className='text-2xl mb-2'>contact information</h3>
             <div className='opacity-50'>
                <p className=''>Evangadi Networks</p>
                <p className=''>support@evangadi.com</p>
                 <p className=''>+1-202-386-2702</p>
             </div>
        </div>
     </section>
    </footer>
  );
}
export default Footer;
