import { useState } from 'react'

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const handleMenu = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <>
      <div className='header header--desktop'>
        <div className="header__container">
          <div className="header__nav">
            <p className="text">Home</p>
            <p className="text">Experience</p>
            <p className="text">Education</p>
            <p className="text">Contacts</p>
          </div>
          <div className="header__rightGroup">
            <div className="header__languages">
              <p className="text">en</p>
              <p className="text">ru</p>
              <p className="text">kg</p>
            </div>
            <div className='header__theme'>
              <p className="text">dark</p>
              <p className="text">light</p>
            </div>
          </div>
          </div>
      </div>      
      
      <div className={`header header--mobile ${mobileNav && 'header--mobileVisible'}`}>
        <div className='header__menuButton' onClick={handleMenu}>
          <p className='header__menuButtonDecoration'></p>
        </div> 

        <div className="header__mobileNav">
          <p className="header__mobileNavItem text">Home</p>
          <p className="header__mobileNavItem text">Experience</p>
          <p className="header__mobileNavItem text">Education</p>
          <p className="header__mobileNavItem text">Contacts</p>      
        </div>
      </div>

    </>
  )
}
export default Header