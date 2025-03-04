// import React from 'react'
// import { FaSearch } from 'react-icons/fa'
// import OrderList from './OrderList'
// import {keepPreviousData, useQuery} from "@tanstack/react-query"
// import {enqueueSnackbar} from "notistack"
// import  {getOrders} from "../../https/index"


// const RecentOrder = () => {

//     const { data: resData, isError } = useQuery({
//         queryKey: ["orders"],
//         queryFn: async() => {
//             return await getOrders();
//         },
//         placeholderData: keepPreviousData
//     })

//     if(isError){
//         enqueueSnackbar("something went wrong!", {variant:"error"})
//     }


//     return (
//         <div className='px-8 mt-6'>
//             <div className='bg-[#1a1a1a] w-full h-[450px] rounded-lg'>
//                 <div className='flex justify-between items-center px-6 py-4'>
//                     <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wider'>Recent Orders</h1>
//                     <a href="" className='text-[#025cca] text-sm font-semibold'>View All</a>
//                 </div>


//                 {/* home page recent order search box */}
//                 <div className="flex items-center gap-4  bg-[#302f2f] rounded-[15px] px-6  py-3 mx-6">
//                     <FaSearch className="text-[#f5f5f5]" />
//                     <input
//                         type="text"
//                         placeholder="Search recent orders "
//                         className="bg-[#302f2f] outline-none text-[#f5f5f5] " />
//                 </div>

//                 {/* order list */}
//                 <div className='mt-4 px-6 overflow-y-scroll h-[300px] hidden-scrollbar'>
                
//                 {
//                     resData?.data.data.length > 0 ? (
//                         resData.data.data.map((order) => {
//                             return <OrderList key={order._id} order={order} />
//                         })
//                     ) : <p className=" text-lg col-span-3 text-gray-400 ">No orders avaliable</p>
//                 }
                
//                 </div>
               

//             </div>

//         </div>
//     )
// }

// export default RecentOrder


import React from 'react';
import { FaSearch } from 'react-icons/fa';
import OrderList from './OrderList';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { getOrders } from '../../https/index';

const RecentOrder = () => {
  const { data: resData, isError, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      return await getOrders();
    },
    placeholderData: keepPreviousData,
  });

  if (isError) {
    enqueueSnackbar('Something went wrong!', { variant: 'error' });
  }

  return (
    <div className="px-8 mt-6">
      <div className="bg-[#1a1a1a] w-full h-[450px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wider">Recent Orders</h1>
          <a href="" className="text-[#025cca] text-sm font-semibold">
            View All
          </a>
        </div>

        {/* Search Box */}
        <div className="flex items-center gap-4 bg-[#302f2f] rounded-[15px] px-6 py-3 mx-6">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search recent orders"
            className="bg-[#302f2f] outline-none text-[#f5f5f5] w-full"
          />
        </div>

        {/* Order List */}
        <div className="mt-4 px-6 overflow-y-scroll h-[300px] hidden-scrollbar">
          {isLoading ? (
            <p className="text-lg text-gray-400">Loading orders...</p>
          ) : resData?.data?.data?.length > 0 ? (
            resData.data.data.map((order) => (
              <OrderList
                key={order._id} // React uses `key` internally
                order={{
                  ...order,
                  orderType: order.orderType || 'Dine-In', // Fallback for orderType
                  table: order.table || { tableNo: null }, // Fallback for table
                }}
              />
            ))
          ) : (
            <p className="text-lg text-gray-400">No orders available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;