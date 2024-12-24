import React from 'react'
import './Info.css'
import profile_img from '../../assets/profile_img.jpg'
const Info = () => {
  return (
    <div className='Info'>
        <img width="250px" height="250px"src={profile_img} alt="" />
        <h1>I'm Kamlesh Naik</h1>
        <p>A first-year B.Tech in Computer Science and Engineering with a specialisation in Artificial Intelligence.</p>
    </div>
  )
}

export default Info
