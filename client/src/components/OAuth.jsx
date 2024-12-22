import React from 'react'
import {Button} from 'flowbite-react';
import {AiFillGoogleCircle} from 'react-icons/ai';
import {GoogleAuthProvider, signInWithPopup,getAuth} from 'firebase/auth';
import app from'../firebase.js';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice.js';
import {useNavigate} from 'react-router-dom';
export default function OAuth() {
    const auth=getAuth(app);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleGoogleClick=async()=>{
        const provider=new GoogleAuthProvider();
        provider.setCustomParameters({prompt:'select_account'});
         
            const resultsFromGoogle=await signInWithPopup(auth , provider);
            const res=await fetch('/api/auth/google',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    email:resultsFromGoogle.user.email,
                    name:resultsFromGoogle.user.displayName,                 
                    googlePhotoUrl:resultsFromGoogle.user.photoURL,
                }),
            })

            if(res.ok){
                dispatch(signInSuccess());
                navigate('/');
            }
        
    }
  return (
    <Button type='button' gradientDuoTone='purpleToBlue' outline onClick={handleGoogleClick}>
       <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google
    </Button>
  )
}
