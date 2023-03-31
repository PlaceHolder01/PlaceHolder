import React from 'react'
import {auth} from '../firebase';
import {RxAvatar} from'react-icons/rx';
import { signOut } from 'firebase/auth';
import {AiFillFolderAdd} from 'react-icons/ai';
import './navigation.css';
const Navigation = () => {
    const handleLogout=async ()=>{
        localStorage.clear();
        signOut(auth).then(() => {
                window.location="/login";
                console.log("Signed out successfully")
            }).catch((error) => {
                console.log(error);
            });
    }
    const checkAuth=()=>{
        console.log("hi");
        if(!localStorage.getItem('uid'))
        {
            window.location="/login";
        }
    }
  return (
    <section id="nav" onLoad={checkAuth()}>
                <button
                  className="logout-button"
                  type="submit"
                  onClick={()=>window.location="/donation"}
                >
                <AiFillFolderAdd /> Donate food
                </button>
        <div className='avatar-name'>Heyy! {localStorage.getItem('name')}&ensp;</div>
        <div className='avatar'><RxAvatar size={30}/></div>
                <button
                  className="logout-button"
                  type="submit"
                  onClick={handleLogout}
                >
                  Log out
                </button>
    </section>
  )
}

export default Navigation;
