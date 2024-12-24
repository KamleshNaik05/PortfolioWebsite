import React from 'react'
import './MyResume.css'
import Resume from '../../assets/Resume.pdf'
const MyResume = () => {
  return (
    <div>
      <div className='MyResume'>
        <h1>My Resume</h1>
        <div class="pdf-container">
          <iframe src={Resume} width="100%" height="400px" frameborder="0" title='My Resume PDF'></iframe>
        </div>
        <div className="Download">
        <a href={Resume} download="Resume.pdf">
        <button>Download Resume</button>
        </a>
        </div>
      </div>
    </div>
  )
}

export default MyResume
