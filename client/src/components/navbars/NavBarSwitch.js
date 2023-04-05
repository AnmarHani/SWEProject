import CustomLink from '../CustomLink'
import Button from '../Button'
import Icon from '../Icon'
import { useState } from 'react';
import axiosInstance from '../../services/axios';





const NavBarSwitch = (props) => {
  let customNavStyles = {
    margin: "1em"
  }
  let customIconStyles = {
    color: "black",
  }
  let customButtonStyles = {
    width: "fit-content",
    margin: ".5em",
    marginBottom: "1em"
  }

  const [show, setShow] = useState(false)

  if(!props.user){
    return <></>
  }
  const logout = () => {
    axiosInstance.defaults.headers.common['Authorization'] = "";
    localStorage.removeItem('token')
    props.setUser(null)

    props.navigate("/login")
  }
  return (
    <nav className="custom-navbar-switch">
        <Button onClick={() => setShow(!show)} style={customButtonStyles} type="primary"><Icon style={customIconStyles} icon="bi bi-list"/></Button>
        {show &&
            <div className="navbar-show">
                <CustomLink to="/contents" style={customNavStyles}>المنشورات</CustomLink>
                <CustomLink to="/leaderboard" style={customNavStyles}>قائمة المتصدرين</CustomLink>
                <CustomLink to={`/users/${props.user._id}`} style={customNavStyles}>حسابي</CustomLink>
                <CustomLink to="/" style={customNavStyles}>تواصل معنا</CustomLink>
                {props.user.isAdmin && <CustomLink style={customNavStyles} to="/dashboard">لوحة التحكم</CustomLink>}
                <Button onClick={logout} style={customNavStyles} type="secondary">تسجيل الخروج</Button>
            </div>
        }    
    </nav>
  )
}

export default NavBarSwitch