import React, { useContext } from 'react';
import { userAuth } from '../provider/AuthProvider';

const Navbar = () => {

    let {googlePopUp, logOut} = useContext(userAuth)

    let handelPopUp = ()=>{
        googlePopUp()
        .then(res=>{
            let name = res.user.displayName;
            let email = res.user.email
            let photo = res.user.photoURL;
            let role = 'new'

            let member = {name, email, photo, role}
            console.log(member);
            fetch(`https://spot-server-sifat-e-sadakin.vercel.app/member`, {
                method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify(member),
            })
            .then(res=> res.json())
            .then(data=> console.log(data))
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    

    let item = <>
    <li><a>Item 1</a></li>
   
    <li><a>Item 3</a></li>
    <li><button onClick={logOut}>signOut</button></li>
</>;
    
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {item}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Spot</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {item}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={handelPopUp}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;