import { 
  useState, 
  useEffect
 } from 'react';
import { 
  Routes,
  Route,
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import axiosInstance from './services/axios'

import Login from './pages/users/guest/Login'
import Register from './pages/users/guest/Register'
import Profile from './pages/users/authenticated/Profile';
import EditProfile from './pages/users/authenticated/EditProfile';

import NotFound from './pages/NotFound';
import NavBar from './components/navbars/NavBar';
import Home from './pages/Home';
import ResetPassword from './pages/users/guest/ResetPassword';
import Users from './pages/users/authenticated/Users';
import Leaderboard from './pages/users/authenticated/Leaderboard';
import Content from './pages/contents/authenticated/Content';
import Contents from './pages/contents/authenticated/Contents';
import CreateContent from './pages/contents/admin/CreateContent';
import EditContent from './pages/contents/admin/EditContent';
import Dashboard from './pages/contents/admin/Dashboard';
import {fetchThisUser} from './services/fetchThisUser';
import NavBarSwitch from './components/navbars/NavBarSwitch';



 
const App = () => {
  let navigate = useNavigate();
  
  const [user, setUser] = useState();
  
  useEffect(() => {
    (async () => {
      const storedToken = localStorage.getItem('token');
      if(storedToken) {
        axiosInstance.defaults.headers.common['Authorization'] = storedToken;
        const user = await fetchThisUser();
        setUser(user);
      }else{
        navigate("login")
      }
    })()
  }, []);

  return (
    <>
      <NavBar navigate={navigate} setUser={setUser} user={user} />
      <NavBarSwitch navigate={navigate} setUser={setUser} user={user} />
      <Routes>
        <Route exact path="/" element={<Home />} />

        {!user &&
          <>
                <Route path="login" element={<Login setUser={setUser} user={user} navigate={navigate} />} />
                <Route path="register" element={<Register setUser={setUser} user={user} navigate={navigate} />} />
                
                <Route path="reset-password" element={<ResetPassword navigate={navigate} />} />
          </>
        }
        {
          user && 
          <>
                <Route path="/users" element={<Users user={user} />} />
                <Route path="/users/update" element={<EditProfile user={user} />} />
                <Route path="/users/:id" element={<Profile user={user} />} />
                
                <Route path="/leaderboard" element={<Leaderboard user={user} />} />

                <Route path="/contents" element={<Contents user={user} />} />
                <Route path="/contents/:id" element={<Content user={user} />} />
          </>
        }
        {
          user && user.isAdmin && 
          <>
                <Route path="/contents/create" element={<CreateContent user={user} navigate={navigate}/>} />
                <Route path="/contents/update/:id" element={<EditContent user={user} />} />
                
                <Route path="/dashboard" element={<Dashboard user={user} />} />
          </>
        }
      </Routes>
    </>
  );
}

export default App;
