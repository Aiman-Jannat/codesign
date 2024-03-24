import { NavLink } from "react-router-dom";
import { BsThreeDots, BsTwitter } from "react-icons/bs";
import { useState } from "react";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CgVoicemailO } from "react-icons/cg";
import Banner from "./Banner";
import Body from "./Body";

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
    return (
        <div className="max-w-7xl text-md font-semibold -mt-7 mx-auto  text-slate-500">
          <div className="drawer px-0">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col ">
    {/* Navbar */}
    <div className="w-full navbar ">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 -ms-3">
        <img className="w-fit h-10" src="https://imgbb.host/images/vwfFH.png" alt="" />
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal flex items-center ">
          {/* Navbar menu content here */}
          <li><NavLink to = "/" className={({ isActive}) =>
isActive ? "text-black text-md   rounded-md "  : ""
} >Explore</NavLink></li>
         <li><NavLink to = "" className={({ isActive}) =>
isActive ? " text-md  rounded-md "  : ""
} >Discover</NavLink></li> 
        <li>  <NavLink to = "" className={({ isActive}) =>
isActive ? " text-md   rounded-md "  : ""
} >For Professionals</NavLink></li>
         <li><NavLink to = "" className={({ isActive}) =>
isActive ? " text-md rounded-md "  : ""
} >For Professionals</NavLink></li> 
        <li className="tabIndex={0} dropdown flex justify-center"> 
        <NavLink to = "" onClick={toggleDropdown} className={({ isActive}) =>
isActive ? "text-md me-3 "  : "bg-none me-3"
} ><BsThreeDots></BsThreeDots>

{showDropdown && (
     <ul className=" text-slate-500 pt-4 text-sm ps-1 absolute top-1/3 left-0 bg-black center block nested-menu menu-sm dropdown-content  mt-8">
    <div className=" ms-3 w-4 h-4 -mt-5 bg-black absolute rotate-45"></div>
     <li className="block text-left  hover:bg-slate-600 hover:text-slate-300"><a>About Click Motto</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>Pricing</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>License</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>Partnership</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>Blog</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>Help</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>Join the team</a></li>
     <hr className="text-black mx-2" />
     <li >
        <div className="flex gap-3 py-2">
        <MdFacebook className="w-5 flex h-5  text-orange-500"></MdFacebook>
        <BsTwitter className="w-5 flex h-5 bg-orange-600 rounded-full p-1  text-black"></BsTwitter>
        <FaSquareInstagram className="w-5 flex h-5 rounded-full  text-orange-600"></FaSquareInstagram>
        <FaGithub className="w-5 flex h-5  rounded-full  text-orange-600"></FaGithub>
        <CgVoicemailO className="w-5 flex h-5  rounded-full  text-orange-600 "></CgVoicemailO>
        </div>
     </li>
   </ul>
                    )}

</NavLink></li> 
<button className="border border-slate-500 px-4 py-2 rounded-md">Submit Photos</button>
<hr className="
flex flex-col" />
<NavLink to = "" className={({ isActive}) =>
isActive ? " text-md px-4  rounded-md "  : "px-4"
} >Login</NavLink>
<button className="border px-4 py-2 rounded-md bg-orange-500 text-white text-md font-bold -mx-4">Join free</button>
          
        </ul>
      </div>
    </div>
    {/* Page content here */}
    <Banner></Banner>
    <Body></Body>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu flex-col justify-center items-center gap-1 p-4 min-h-screen bg-base-200">
      {/* Sidebar content here */}
      <li><NavLink to = "/" className={({ isActive}) =>
isActive ? "text-black text-md   rounded-md "  : ""
} >Explore</NavLink></li>
         <li><NavLink to = "" className={({ isActive}) =>
isActive ? " text-md  rounded-md "  : ""
} >Discover</NavLink></li> 
        <li>  <NavLink to = "" className={({ isActive}) =>
isActive ? " text-md   rounded-md "  : ""
} >For Professionals</NavLink></li>
         <li><NavLink to = "" className={({ isActive}) =>
isActive ? " text-md rounded-md "  : ""
} >For Professionals</NavLink></li> 
        <li className="tabIndex={0} dropdown flex justify-center"> <NavLink to = "" onClick={toggleDropdown} className={({ isActive}) =>
isActive ? "text-md w-fit "  : "w-fit"
} ><BsThreeDots className="w-fit "></BsThreeDots>

{showDropdown && (
     <ul className=" text-slate-500 pt-4 text-sm ps-1 absolute top-1/3 left-0 bg-black center block nested-menu menu-sm dropdown-content  mt-8">
    <div className=" ms-3 w-4 h-4 -mt-5 bg-black absolute rotate-45"></div>
     <li className="block text-left  hover:bg-slate-600 hover:text-slate-300"><a>About Click Motto</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>Pricing</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>License</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>Partnership</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>Blog</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>Help</a></li>
     <li className="block hover:bg-slate-600 hover:text-slate-300"><a>Join the team</a></li>
     <hr className="text-black mx-2" />
     <li >
        <div className="flex gap-3 py-2">
        <MdFacebook className="w-5 flex h-5  text-orange-500"></MdFacebook>
        <BsTwitter className="w-5 flex h-5 bg-orange-600 rounded-full p-1  text-black"></BsTwitter>
        <FaSquareInstagram className="w-5 flex h-5 rounded-full  text-orange-600"></FaSquareInstagram>
        <FaGithub className="w-5 flex h-5  rounded-full  text-orange-600"></FaGithub>
        <CgVoicemailO className="w-5 flex h-5  rounded-full  text-orange-600 "></CgVoicemailO>
        </div>
     </li>
   </ul>
                    )}

</NavLink></li> 
<button className="w-fit  border border-slate-500 px-4 py-2 rounded-md">Submit Photos</button>
<hr className="
flex flex-col" />
<NavLink to = "" className={({ isActive}) =>
isActive ? " text-md w-fit me-7 px-4 rounded-md "  : "me-7 px-4   w-fit"
} >Login</NavLink>
<button className="w-fit border px-4 py-2 rounded-md bg-orange-500 text-white text-md font-bold">Join free</button>
          
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;