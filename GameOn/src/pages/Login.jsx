/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import first from "../assert/ff01.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchingSuccess } from '../components/redux/userSlice';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  axios.defaults.withCredentials = true;
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://backend-1-otqg.onrender.com/api/login`, { email, password });
      if (res.data.success === true) {
        setTimeout(() => {
          toast.success(res.data.message);
        }, 1500);
        navigate("/home");
        dispatch(fetchingSuccess(res.data));
        localStorage.setItem('user', JSON.stringify(res.data));

      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  axios.defaults.withCredentials = true;
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    // try {
      const res = await axios.post(`https://backend-1-otqg.onrender.com/api/register`, { userName, email, password });
      if (res.data.success === true) {
        toast.success(res.data.message);
        setIsLogin(true); 
      } else {
        toast.error(res.data.message || 'Wrong');
      }
    // } catch (error) {
    //   toast.error("Something went wrong 3");
    // }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <Toaster />
      <div className="relative text-center w-full">
        <img
          src={first}
          alt="Placeholder Image"
          className="rounded-lg shadow-lg w-full h-screen object-cover filter blur-sm"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-[330px] w-full">
            <h1 className="text-3xl font-bold text-gray-700 mb-8">{isLogin ? '𝕲𝖆𝖒𝖊𝖔𝖓 Login' : '𝕲𝖆𝖒𝖊𝖔𝖓 Register'}</h1>
            {isLogin ? (
              <form onSubmit={handleSubmitLogin} className="w-full">
                <div className="flex items-center mb-4">
                  <AccountCircleIcon className="text-black mr-2" style={{ fontSize: 30 }} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-lg border-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="flex items-center mb-6">
                  <LockIcon className="text-black mr-2" style={{ fontSize: 30 }} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-2 rounded-lg border-2 bg-opacity-50 text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-yellow-400 hover:bg-yellow-200 font-bold rounded-lg"
                >
                  Login
                </button>
                <p className="mt-4 text-sm text-gray-400">Don't have an account? <span className="cursor-pointer text-black font-bold" onClick={toggleForm}>Register here</span></p>
              </form>
            ) : (
              <form onSubmit={handleSubmitRegister} className="w-full">
                <div className="flex items-center mb-4">
                  <AccountCircleIcon className="text-black mr-2" style={{ fontSize: 30 }} />
                  <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg text-black border-2 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <EmailIcon className="text-black mr-2" style={{ fontSize: 30 }} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 text-black py-2 rounded-lg border-2 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <div className="flex items-center mb-6">
                  <LockIcon className="text-black mr-2" style={{ fontSize: 30 }} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full text-black px-4 py-2 rounded-lg border-2 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-yellow-400 hover:bg-yellow-200 font-bold rounded-lg"
                >
                  Register
                </button>
                <p className="mt-4 text-sm text-gray-500">Already have an account? <span className="cursor-pointer text-black font-bold" onClick={toggleForm}>Login here</span></p>
              </form>
            )}
            <Link to={"/home"}>HOME</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
