import React from 'react'
import './AboutMe.css'
import About_Me from "../../assets/About_Me.jpg";
const AboutMe = () => {
  return (
    <div className='AboutMe'>
      <div className='AboutMe-Title'>
        <h1>About Me</h1>
      </div>
      <div className='AboutMe-Sections'>
          <img width='220'src={About_Me} alt=''/>
          <p>Hi, I'm kamlesh Naik, a first year B.Tech student specializing in Computer Science and Engineering with Artificial Intelligence. I have keen interest in web development and programming, and I am on a journey to learn and grow in tech world this portfolio is my first project to show my initial steps into coding and development.</p>
      </div>
    </div>
  )
}

export default AboutMe
