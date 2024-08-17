import React from 'react'
import './work.css';

const Work = () => {
  return (
    <div className='work'>
        <div className='work-container'>
          <div className='work-card'>
            <h5>HOW WE WORK</h5>
            <h3>Making Your Projects <br/>Look Awesome</h3>
            <p>Technical skills, design, business understanding, ability to <br/>put themselves in the merchant's shoes.</p>
            <h6>Read more</h6>
          </div>

          <div>
            <div  className='work-cards'>
              <div className='work-cards-1'>
                <h1>1</h1>
              </div>
              <div className='work-cards-2'>
                <h4>Full service range including</h4>
              </div>
            </div>

            <div  className='work-cards'>
              <div className='work-cards-1'>
                <h1>2</h1>
              </div>
              <div className='work-cards-2'>
                <h4>Technical skills, design, business</h4>
              </div>
            </div>

            <div  className='work-cards'>
              <div className='work-cards-1'>
                <h1>3</h1>
              </div>
              <div className='work-cards-2'>
                <h4>Themselves in the merchant's</h4>
              </div>
            </div>
            
          </div>
          
       </div>
       <hr className='work-border'/>
    </div>
  )
}

export default Work