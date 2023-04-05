import CustomLink from '../CustomLink'
import Button from '../Button'
import axiosInstance from '../../services/axios'

const NavBar = (props) => {
  let customNavStyles = {
    margin: "1em"
  }
  let customDivStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }

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
    <div style={customDivStyles}>
      <nav className="custom-navbar">
        <CustomLink to="/contents" style={customNavStyles}>المنشورات</CustomLink>
        <CustomLink to="/leaderboard" style={customNavStyles}>قائمة المتصدرين</CustomLink>
        <CustomLink to={`/users/${props.user._id}`} style={customNavStyles}>حسابي</CustomLink>
        <CustomLink to="/" style={customNavStyles}>تواصل معنا</CustomLink>
        {props.user.isAdmin && <CustomLink to="/dashboard">لوحة التحكم</CustomLink>}
      </nav>
        <Button onClick={logout} style={customNavStyles} type="secondary hide">تسجيل الخروج</Button>
    </div>
  )
}

export default NavBar