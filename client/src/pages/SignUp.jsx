import {Link } from 'react-router-dom';
import {TextInput,Label,Button} from 'flowbite-react';
export default function SignUp(){
    return (
        <div className="min-h-screen mt-20">
            <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
            <div className="flex-1">
            <Link to="/" className='whitespace-nowrap font-bold dark:text-white text-4xl'>
                <span className='px-2 py-1 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 rounded-lg text-white'>NITC's</span>
                Talk
            </Link>
            <p className='text-sm mt-5'>
                This is a demo project. You can sign up with your email and 
                password 
                or with Google.
            </p>
            </div>
            <div className="flex-1">
                <form className='flex flex-col gap-4'>
                    <div className="">
                        <Label value="Your username"/>
                            <TextInput type="text" placeholder='Username' id='username'/>
                        
                    </div>
                    <div className="">
                        <Label value="Your email"/>
                            <TextInput type="text" placeholder='name@company.com' id='email'/>
                        
                    </div>
                    <div className="">
                        <Label value="Your password"/>
                            <TextInput type="text" placeholder='Password' id='Password'/>
                        
                    </div>
                    <Button gradientDuoTone='purpleToPink' type='submit'>
                        Sign Up
                    </Button>
                    <div>
                        <span>Have an account?</span>
                          <Link to='/sign-in' className='text-blue-500'>
                            Sign In
                          </Link>
                    </div>
                </form>
            </div>

            </div>

        </div>
    )
}