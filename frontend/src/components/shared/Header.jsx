// import React from "react";
// import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Header = () =>{

//     return (
//         <header>
//           <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 text-white">
//             <div className="flex flex-wrap justify-between items-center">
//               <div className="flex justify-start items-center">
//                 <Link to="/" className="text-lg font-bold">Restaurant POS</Link>
//               </div>
//               <div className="flex items-center lg:order-2">
//                 <Link className="mx-5" to="">
//                   Restaurants
//                 </Link>
//                 <Link className="mx-5" to="">
//                   Menus
//                 </Link>
//                 <Link className="mx-5" to="">
//                   Menu Items
//                 </Link>
//                 <Link className="mx-5" to="">
//                   Tables
//                 </Link>
//                 <Link className="mx-5 flex items-center" to="/login">
//                   <FaSignInAlt className="mr-1" /> Login
//                 </Link>
//                 <Link className="mx-5 flex items-center" to="/register">
//                   <FaUser className="mr-1" /> Register
//                 </Link>
//               </div>
//             </div>
//           </nav>
//         </header>
//       );
// }

// export default Header

// import React from "react";
// import { FaSignInAlt, FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png"

// const Header = () => {
//   return (
//     <header className="sticky top-0 z-50 w-full bg-gray-900 shadow-md">
//       <nav className="container mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white">
//           <img src={logo} alt="Restaurant Logo" className="h-10  w-10 object-contain" />  

//         </Link>

//         {/* Nav Links */}
//         <div className="hidden md:flex space-x-8 text-white font-medium">
//           <Link className="hover:text-gray-300 transition" to="">Restaurants</Link>
//           <Link className="hover:text-gray-300 transition" to="">Menus</Link>
//           <Link className="hover:text-gray-300 transition" to="">Menu Items</Link>
//           <Link className="hover:text-gray-300 transition" to="">Tables</Link>
//         </div>

//         {/* Auth Links */}
//         <div className="flex space-x-4">
//           <Link to="/login" className="flex items-center text-white hover:text-gray-300 transition">
//             <FaSignInAlt className="mr-2" /> Login
//           </Link>
//           <Link to="/register" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
//             <FaUser className="mr-2" /> Register
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";
// import { FaBell } from "react-icons/fa";
// import logo from "../../assets/logo.png"

// const Header = () => {

//     return (

//         <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">


//             {/* LOGO */}
//             <div className="flex items-center gap-2">
//                 <img src={logo} alt="restaurant logo" className="h-8 w-8" />
//                 <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
//             </div>

//             {/* LOGGED USER DETAILS  */}
//             <div className="flex items-center gap-4">
//                 <div className="bg-[#302f2f] rounded-[15px] p-3 cursor-pointer">
//                     <FaBell className="text-[#f5f5f5] text-2xl" />

//                 </div>
//                 <div className="flex item-center gap-3 cursor-pointer">
//                     <FaUserCircle className="text-[#f5f5f5] text-4xl translate-y-.5" />
//                     <div className="flex flex-col items-start">
//                         <h1 className="text-md text-[#f5f5f5] font-semibold">uzair</h1>
//                         <p className="text-xs text-[#ababab] font-medium">Admin</p>
//                     </div>

//                 </div>
//             </div>

//         </header>
//     )


// };
// export default Header;

import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/logo.png"
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../https";
import { Navigate, useNavigate } from "react-router-dom";
import { removeUser } from "../../redux/slice/userSlice"
import { MdSpaceDashboard } from "react-icons/md";





const Header = () => {

    const userData = useSelector(state => state.user);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const logoutMutation = useMutation({
        mutationFn: () => logout(),
        onSuccess: (data)=> {
            console.log(data);
            dispatch(removeUser());
            navigate("/auth")
            

        },
        onError: (error) => {
            console.log(error)
        }
    })
    const handleLogout = () =>{
        logoutMutation.mutate();
    }

    return (

        <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">


            {/* LOGO */}
            <div onClick={()=> navigate('/')} className="flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="restaurant logo"
                 className="h-auto w-auto max-h-10 max-w-10 object-contain " />
                <h1 className="text-lg font-semibold text-[#f5f5f5] ">Savory Bites</h1>
            </div>


            {/* SEARCH  */}
            <div className="flex items-center gap-4  bg-[#302f2f] rounded-[15px] px-5 w-[500px] h-8">
                <FaSearch className="text-[#f5f5f5]"/>
                <input
                type = "text"
                placeholder="Search"
                className="bg-[#302f2f] outline-none text-[#f5f5f5] "/>
            </div>


            {/* LOGGED USER DETAILS  */}
            <div className="flex items-center gap-4">
               { 
                userData.role === "admin" && (
                    <div onClick={() => navigate("/dashboard")} className="bg-[#302f2f] rounded-[15px] p-3 cursor-pointer">
                    <MdSpaceDashboard className="text-[#f5f5f5] text-2xl" />

                </div>
                )
               }
                <div className="bg-[#302f2f] rounded-[15px] p-3 cursor-pointer">
                    <FaBell className="text-[#f5f5f5] text-2xl" />

                </div>
                <div className="flex item-center gap-3 cursor-pointer">
                    <FaUserCircle className="text-[#f5f5f5] text-4xl translate-y-.5" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-md text-[#f5f5f5] font-semibold">{userData.name || "Test User"}</h1>
                        <p className="text-xs text-[#ababab] font-medium">{userData.role || "Role"}</p>
                    </div>

                    <TbLogout onClick={handleLogout} className="text-[#f5f5f5] ml-2 "size={40}/>
                </div>
            </div>

        </header>
    )


};
export default Header;