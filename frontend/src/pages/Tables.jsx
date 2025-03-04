// import React from 'react'
// import BottomNav from '../components/shared/BottomNav'
// import BackButton from '../components/shared/BackButton'
// import TableCard from '../components/tables/TableCard'
// import { useState } from 'react'

// const Tables = () => {

//         const [status,setStatus] = useState("All")

//     return (
//         <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
//             <div className="flex items-center justify-between px-10 py-4 mt-2">
//                 <div className="flex items-center ">
//                     <BackButton />
//                     <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider ">
//                         Tables
//                     </h1>

//                 </div>
//                 <div className="flex items-center justify-around gap-4 ">
//                     <button onClick={() => setStatus("All")}
//                     className={`text-[#ababab] text-lg ${status === "All" && "bg-[#383838]"}
//                      rounded-lg px-5 py-1 font-semibold tracking-wide`}>All</button>
                    
//                     <button onClick={() => setStatus("Booked")}
//                      className={`text-[#ababab] text-lg ${status === "Booked" && "bg-[#383838]"}
//                       rounded-lg px-5 py-1 font-semibold tracking-wide`}>Booked</button>
                     
                    
//                 </div>
//             </div>
//             <div className='flex flex-wrap gap-6 px-4 py-4 overflow-y-scroll hidden-scrollbar h-[calc(100vh-14rem)]'>
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />
//             <TableCard />

//             </div>

//             <BottomNav />
//         </section>
//     )
// }

// export default Tables


// chatgpt code for responsiveness

// import React, { useState } from 'react';
// import BottomNav from '../components/shared/BottomNav';
// import BackButton from '../components/shared/BackButton';
// import TableCard from '../components/tables/TableCard';

// const Tables = () => {
//     const [status, setStatus] = useState("All");

//     return (
//         <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>

//             {/* Header */}
//             <div className="flex items-center justify-between px-5 sm:px-10 py-4 mt-2">
//                 <div className="flex items-center">
//                     <BackButton />
//                     <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
//                         Tables
//                     </h1>
//                 </div>
                
//                 {/* Status Filter Buttons */}
//                 <div className="flex items-center justify-around gap-2 sm:gap-4">
//                     <button 
//                         onClick={() => setStatus("All")}
//                         className={`text-[#ababab] text-lg rounded-lg px-5 py-1 font-semibold tracking-wide transition-all duration-200 ${
//                             status === "All" ? "bg-[#383838]" : ""
//                         }`}
//                     >
//                         All
//                     </button>
                    
//                     <button 
//                         onClick={() => setStatus("Booked")}
//                         className={`text-[#ababab] text-lg rounded-lg px-5 py-1 font-semibold tracking-wide transition-all duration-200 ${
//                             status === "Booked" ? "bg-[#383838]" : ""
//                         }`}
//                     >
//                         Booked
//                     </button>
//                 </div>
//             </div>

//             {/* Table Cards */}
//             <div className='flex flex-wrap justify-center gap-6 px-4 py-4 overflow-y-scroll hidden-scrollbar h-[calc(100vh-14rem)]'>
//                 {[...Array(20)].map((_, index) => (
//                     <TableCard key={index} />
//                 ))}
//             </div>

//             <BottomNav />
//         </section>
//     );
// };

// export default Tables;



import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'
import TableCard from '../components/tables/TableCard'
import { useState } from 'react'
import { tables } from "../constants";
import {keepPreviousData, useQuery} from "@tanstack/react-query"
import { getTable } from '../https'
import {enqueueSnackbar} from "notistack"

const Tables = () => {

        const [status,setStatus] = useState("All");

        const { data:resData, isError } = useQuery({
            queryKey: ["tables"],
            queryFn: async () => {
                return await getTable();

            },
            placeholderData: keepPreviousData

        });
        if(isError){
            enqueueSnackbar("something went wrong! ", { variant: "error"})
        }
        console.log(resData);


    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
            <div className="flex items-center justify-between px-5 sm:px-10 py-4 mt-2">
                <div className="flex items-center ">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider ">
                        Tables
                    </h1>

                </div>
                <div className="fflex items-center justify-around gap-2 sm:gap-4">
                    <button onClick={() => setStatus("All")}
                    className={`text-[#ababab] text-lg rounded-lg px-5 py-1 font-semibold tracking-wide transition-all duration-200 ${
                            status === "All" ? "bg-[#383838]" : ""
                        }`}>All</button>
                    
                    <button onClick={() => setStatus("Booked")}
                     className={`text-[#ababab] text-lg rounded-lg px-5 py-1 font-semibold tracking-wide transition-all duration-200 ${
                             status === "Booked" ? "bg-[#383838]" : ""
                         }`}>Booked</button>
                     
                    
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-6 px-4 py-4 overflow-y-scroll hidden-scrollbar h-[calc(100vh-14rem)]'>
           {
            resData?.data.data.map((table) =>{

                return(
                    <TableCard 
                    id={table._id} 
                    name ={table.tableNo} 
                    status = {table.status}
                    initials={table?.currentOrder?.customerDetails.name}
                    seats={table.seats}/>
                )
            })
           }
            

            </div>

            <BottomNav />
        </section>
    )
}

export default Tables