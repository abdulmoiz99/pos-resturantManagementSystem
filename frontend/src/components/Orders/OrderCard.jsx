// import React from 'react'
// import { IoCheckmarkDone } from 'react-icons/io5'
// import { FaCircle } from 'react-icons/fa'
// import { getAvatarName, formatDateAndTme, formatDateAndTimeNew } from '../../utils/index'
// import { useSelector } from 'react-redux';
// import { FaLongArrowAltRight } from 'react-icons/fa'



// const OrderCard = ({key, order}) => {
//     const customerData = useSelector((state) => state.customer);
//     console.log("order data",order)
//   return (
//     <div>
//     <div className='w-[450px] bg-[#262626] p-4 rounded-lg mb-4'>
//             <div className='flex items-center gap-5'>
//             <button className='bg-[#f6b100] p-3 text-xl font-bold rounded-lg'>{getAvatarName(order.customerDetails.name)}</button>
//             <div className='flex items-center justify-between w-[100%]'> 
//                 <div className='flex flex-col items-start gap-1'>
//                     <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>{order.customerDetails.name}</h1>
//                     <p className='text-[#ababab] text-sm'>
//                         {/* {Math.floor(new Date(order.orderDate ).getTime())}/Dine in */}
//                         {order.orderId?.orderId} / Dine In
                       
//                         </p>
//                     <p className='text-[#ababab] text-sm'>
//                         Table <FaLongArrowAltRight
//                                          className='text-[#ababab] ml-2 inline'/>  {order.table.tableNo}
                       
//                         </p>
//                 </div>
//                 {/* <div>
//                     <h1 className='text-[#f6b100] font-semibold border rounded-lg p-1'>Table No : 3</h1>
//                 </div> */}
//                 <div className='flex flex-col items-end gap-2'>
//                    {
//                     order.orderStatus === "Ready" ?(
//                         <>
//                         <p className=' text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg'>
//                             <IoCheckmarkDone className='inline mr-2'/>{order.orderStatus}</p>
//                         <p className='text-[#ababab] text-sm'>
//                             <FaCircle className='inline mr-2 text-green-600'/>Your Order is Ready</p>
//                         </>
//                     ) : (
//                         <>
//                         <p className=' text-yellow-600 bg-[#4a452e] px-2 py-1 rounded-lg'>
//                             <FaCircle className='inline mr-2'/>{order.orderStatus}</p>
//                         <p className='text-[#ababab] text-sm'>
//                             <FaCircle className='inline mr-2 text-yellow-600'/>
//                             Now Cooking</p>
//                         </>
//                     )

//                    }
//                 </div>
//             </div>
        
//         </div>
//         <div className='flex justify-between items-center mt-4 text-[#ababab]'>
//             <p>{formatDateAndTme(order.createdAt)}</p>
//             <p>{order.items.length}</p>
//         </div>
//         <hr className='text-[#f5f5f5] mt-4 border-t-1 border-gray-500'/>

//         <div className='flex items-center justify-between mt-4'>
//             <h1 className='text-[#f5f5f5] text-lg semi-bold'>Total</h1>
//             <p className='text-[#f5f5f5] text-lg font-semi-bold'>Rs {order.bills.totalWithTax.toFixed(2)}</p>
//         </div>
//             </div>
        
//     </div>
//   )
// }

// export default OrderCard




import React from 'react'
import { IoCheckmarkDone } from 'react-icons/io5'
import { FaCircle } from 'react-icons/fa'
import { getAvatarName, formatDateAndTme, formatDateAndTimeNew } from '../../utils/index'
import { useSelector } from 'react-redux';
import { FaLongArrowAltRight } from 'react-icons/fa'



const OrderCard = ({key, order}) => {
    const customerData = useSelector((state) => state.customer);
    console.log("order data",order)
  return (
    <div>
    <div className='w-[450px] bg-[#262626] p-4 rounded-lg mb-20'>
            <div className='flex items-center gap-5'>
            <button className='bg-[#f6b100] p-3 text-xl font-bold rounded-lg'>{getAvatarName(order.customerDetails.name)}</button>
            <div className='flex items-center justify-between w-[100%]'> 
                <div className='flex flex-col items-start gap-1'>
                    <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>{order.customerDetails.name}</h1>
                    <p className='text-[#ababab] text-sm'>
                        {/* {Math.floor(new Date(order.orderDate ).getTime())}/Dine in */}
                        #{order.orderId?.orderId} / {order.customerDetails.orderType}
                       
                        </p>
                        {order.table && (
                                <p className='text-[#ababab] text-sm'>
                                    Table <FaLongArrowAltRight className='text-[#ababab] ml-2 inline' /> {order.table.tableNo}
                                </p>
                            )}
                </div>
                {/* <div>
                    <h1 className='text-[#f6b100] font-semibold border rounded-lg p-1'>Table No : 3</h1>
                </div> */}
                <div className='flex flex-col items-end gap-2'>
                   {
                    order.orderStatus === "Ready" ?(
                        <>
                        <p className=' text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg'>
                            <IoCheckmarkDone className='inline mr-2'/>{order.orderStatus}</p>
                        <p className='text-[#ababab] text-sm'>
                            <FaCircle className='inline mr-2 text-green-600'/>Your Order is Ready</p>
                        </>
                    ) : (
                        <>
                        <p className=' text-yellow-600 bg-[#4a452e] px-2 py-1 rounded-lg'>
                            <FaCircle className='inline mr-2'/>{order.orderStatus}</p>
                        <p className='text-[#ababab] text-sm'>
                            <FaCircle className='inline mr-2 text-yellow-600'/>
                            Now Cooking</p>
                        </>
                    )

                   }
                </div>
            </div>
        
        </div>
        <div className='flex justify-between items-center mt-4 text-[#ababab]'>
            <p>{formatDateAndTme(order.createdAt)}</p>
            <p>{order.items.length}</p>
        </div>
        <hr className='text-[#f5f5f5] mt-4 border-t-1 border-gray-500'/>

        <div className='flex items-center justify-between mt-4'>
            <h1 className='text-[#f5f5f5] text-lg semi-bold'>Total</h1>
            <p className='text-[#f5f5f5] text-lg font-semi-bold'>Rs {order.bills.totalWithTax.toFixed(2)}</p>
        </div>
            </div>
        
    </div>
  )
}

export default OrderCard

// import React from 'react';
// import { IoCheckmarkDone } from 'react-icons/io5';
// import { FaCircle, FaLongArrowAltRight } from 'react-icons/fa';
// import { getAvatarName, formatDateAndTme, formatDateAndTimeNew } from '../../utils/index';
// import { useSelector } from 'react-redux';

// const OrderCard = ({ order }) => {
//     console.log("order data", order);

//     return (
//         <div>
//             <div className='w-[450px] bg-[#262626] p-4 rounded-lg mb-4'>
//                 <div className='flex items-center gap-5'>
//                     <button className='bg-[#f6b100] p-3 text-xl font-bold rounded-lg'>{getAvatarName(order.customerDetails.name)}</button>
//                     <div className='flex items-center justify-between w-[100%]'>
//                         <div className='flex flex-col items-start gap-1'>
//                             <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>{order.customerDetails.name}</h1>
//                             <p className='text-[#ababab] text-sm'>
//                                 #{order.orderId?.orderId} / {order.customerDetails.orderType}
//                             </p>
//                             {order.table && (
//                                 <p className='text-[#ababab] text-sm'>
//                                     Table <FaLongArrowAltRight className='text-[#ababab] ml-2 inline' /> {order.table.tableNo}
//                                 </p>
//                             )}
//                         </div>
//                         <div className='flex flex-col items-end gap-2'>
//                             {order.orderStatus === "Ready" ? (
//                                 <>
//                                     <p className=' text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg'>
//                                         <IoCheckmarkDone className='inline mr-2' />{order.orderStatus}</p>
//                                     <p className='text-[#ababab] text-sm'>
//                                         <FaCircle className='inline mr-2 text-green-600' />Your Order is Ready</p>
//                                 </>
//                             ) : (
//                                 <>
//                                     <p className=' text-yellow-600 bg-[#4a452e] px-2 py-1 rounded-lg'>
//                                         <FaCircle className='inline mr-2' />{order.orderStatus}</p>
//                                     <p className='text-[#ababab] text-sm'>
//                                         <FaCircle className='inline mr-2 text-yellow-600' />
//                                         Now Cooking</p>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//                 {/* Add padding to the bottom of the main container */}
//                 <div className='pb-4'>
//                     <div className='flex justify-between items-center mt-4 text-[#ababab]'>
//                         <p>{formatDateAndTimeNew(order.createdAt)}</p>
//                         <p>{order.items.length}</p>
//                     </div>
//                     <hr className='text-[#f5f5f5] mt-4 border-t-1 border-gray-500' />
//                     <div className='flex items-center justify-between mt-4'>
//                         <h1 className='text-[#f5f5f5] text-lg semi-bold'>Total</h1>
//                         <p className='text-[#f5f5f5] text-lg font-semi-bold'>Rs {order.bills.totalWithTax.toFixed(2)}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OrderCard;


