import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/Orders/OrderCard";
import BackButton from "../components/shared/BackButton";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOrders } from "../https/index";
import { enqueueSnackbar } from "notistack";

const Orders = () => {

    const [status,setStatus] = useState("All")

    const { data: resData, isError } = useQuery({
        queryKey: ["orders"],
        queryFn: async() => {
            return await getOrders();
        },
        placeholderData: keepPreviousData
    })

    if(isError){
        enqueueSnackbar("something went wrong!", {variant:"error"})
    }

    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">

            <div className="flex items-center justify-between px-10 py-4 mt-2">
                <div className="flex items-center ">
                    <BackButton/>
                <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider ">Orders</h1>

                </div>
                <div className="flex items-center justify-around gap-4 ">

                    <button onClick={()=> setStatus("All")} className={`text-[#ababab] text-lg ${status === "All" && "bg-[#383838]"} rounded-lg px-5 py-1 font-semibold tracking-wide`}>All</button>

                    <button onClick={()=> setStatus("In Progress")} className={`text-[#ababab] text-lg ${status === "In Progress" && "bg-[#383838]"} rounded-lg px-5 py-1 font-semibold tracking-wide`}>In Progress</button>

                    <button onClick={()=> setStatus("Ready")} className={`text-[#ababab] text-lg ${status === "Ready" && "bg-[#383838]"} rounded-lg px-5 py-1 font-semibold tracking-wide`}>Ready</button>

                    <button onClick={()=> setStatus("Completed")} className={`text-[#ababab] text-lg ${status === "Completed" && "bg-[#383838]"} rounded-lg px-5 py-1 font-semibold tracking-wide`}>Completed</button>
                    
                </div>
            </div>

            <div className=" flex flex-wrap gap-6 px-4 py-4 overflow-y-scroll hidden-scrollbar h-[calc(100vh-5rem-5rem)]">
                
                {
                    resData?.data.data.length > 0 ? (
                        resData.data.data.map((order) => {
                            return <OrderCard key={order._id} order={order} />
                        })
                    ) : <p className=" text-lg col-span-3 text-gray-400 ">No orders avaliable</p>
                }
              
              
            </div>


            <BottomNav />
        </section >
    )
}

export default Orders













// code for to track state

// import React, { useState } from "react";
// import BottomNav from "../components/shared/BottomNav";

// const Orders = () => {
//     const [selectedCategory, setSelectedCategory] = useState("All"); // State to track selected category

//     const categories = ["All", "In Progress", "Ready", "Completed"];

//     return (
//         <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">

//             <div className="flex items-center justify-between px-10 py-4 mt-2">
//                 <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">Orders</h1>
//                 <div className="flex items-center justify-around gap-4">
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             onClick={() => setSelectedCategory(category)}
//                             className={`text-[#ababab] text-lg rounded-lg px-5 py-1 font-semibold tracking-wide transition-all duration-200 ${
//                                 selectedCategory === category ? "bg-[#383838]" : "bg-transparent"
//                             }`}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             <BottomNav />
//         </section>
//     );
// }

// export default Orders;
