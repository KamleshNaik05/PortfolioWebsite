import React from 'react'
import './MySkills.css'
const MySkills = () => {
  return (
    <div>
      <div className='MySkills'>
        <div className='MySkills-Title'>
            <h1>My Skills</h1>
        </div>
        <div>
                <ul class="custom-list">
                    <li>
                        <span class="emoji">💻</span>
                        <span class="text">Programming Languages - Basic knowledge of HTML, CSS, and JavaScript.</span>
                    </li>
                    <li>
                        <span class="emoji">⚙</span>
                        <span class="text">Frameworks - Familiar with React.js.</span>
                    </li>
                </ul>
        </div>
      </div>
    </div>
  )
}

export default MySkills
