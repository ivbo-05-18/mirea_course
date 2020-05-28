import React from 'react'
import SRLLogo from '../assets/images/SRL_Logo.png'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="row  align-items-center">
        

          <div className="col-md-4 ml-auto">
            {/* Check the Button component to see how it implements the High Order Component */}
            <Button />
          </div>

          <div className="col-12">
            <nav>
              <ul>
                
                <li>
                  <Link to="/with-thumbs/">Gallery with thumbs</Link>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
