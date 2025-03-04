// import React from "react";
// import { orders } from "../../constants";
// import { formatDateAndTme } from '../../utils/index'

// import { GrUpdate } from "react-icons/gr"
// import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { getOrders, updateOrder } from "../../https";

// const RecentOrders = () => {
//   const handleStatusChange = ({orderId, orderStatus}) => {
//     console.log("Updating order status:", orderId, orderStatus); // Debugging

//     orderStatusUpdateMutation.mutate({orderId, orderStatus});
//   };

//   const queryClient = useQueryClient();

//   const orderStatusUpdateMutation = useMutation({
    

//     mutationFn:( {orderId,orderStatus}) => updateOrder({orderId, orderStatus}),
//     onSuccess: (data) =>{
//       console.log("Mutation Success:", data); // Debugging

//       enqueueSnackbar("Order status updated Successfully!", {variant: "success"});
      
//       queryClient.invalidateQueries(["orders"]); //refressh order list  
//     },
//     onError: ()=>{
//       enqueueSnackbar("Failed to update order status!", {variant:"error"});
//     }
//   }

// )

//   const { data: resData, isError  } = useQuery({
//     queryKey: ["orders"],
//     queryFn: async() => {
//         return await getOrders();
//         onSuccess: (resData) =>{   console.log("Orders fetched:", resData)}// Debugging
//     },

//     placeholderData: keepPreviousData
// })

// if(isError){
//     enqueueSnackbar("something went wrong!", {variant:"error"})
// }

//   return (
//     <div className="container mx-auto bg-[#262626] p-4 rounded-lg">
//       <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
//         Recent Orders
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="w-full text-left text-[#f5f5f5]">
//           <thead className="bg-[#333] text-[#ababab]">
//             <tr>
//               <th className="p-3">Order ID</th>
//               <th className="p-3">Customer</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Date & Time</th>
//               <th className="p-3">Items</th>
//               <th className="p-3">Table No</th>
//               <th className="p-3">Total</th>
//               <th className="p-3 text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {resData?.data.data.map((order, index) => (
//               <tr
//                 key={index}
//                 className="border-b border-gray-600 hover:bg-[#333]"
//               >
//                 <td className="p-4">#{order.orderId?.orderId}</td>
//                 <td className="p-4">{order.customerDetails.name}</td>
//                 <td className="p-4">
//                   <select
//                     className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
//                       order.orderStatus === "Ready"
//                         ? "text-green-500"
//                         : "text-yellow-500"
//                     }`}
//                     value={order.status}
//                     onChange={(e) => handleStatusChange({orderId: order._id, orderStatus: e.target.value})}
//                   >
//                     console.log(orderStatus)
//                     <option className="text-yellow-500" value="In Progress">
//                       In Progress
//                     </option>
//                     <option className="text-green-500" value="Ready">
//                       Ready
//                     </option>
//                   </select>
//                 </td>
//                 <td className="p-4">{formatDateAndTme(order.createdAt)}</td>
//                 <td className="p-4">{order.items.length} Items</td>
//                 <td className="p-4">Table - {order.table.tableNo}</td>
//                 <td className="p-4">₹{order.bills.totalWithTax}</td>
//                 <td className="p-4 text-center">
//                   <button className="text-blue-400 hover:text-blue-500 transition">
//                     <GrUpdate size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;


// import React from "react";
// import { formatDateAndTme } from '../../utils/index';
// import { GrUpdate } from "react-icons/gr";
// import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { getOrders, updateOrder } from "../../https";
// import { enqueueSnackbar } from 'notistack'; // Ensure this is imported

// const RecentOrders = () => {
//   const handleStatusChange = ({ orderId, orderStatus }) => {
//     console.log("Updating order status - Order ID:", orderId, "New Status:", orderStatus); // Debugging
//     orderStatusUpdateMutation.mutate({ orderId, orderStatus });
//   };

//   const queryClient = useQueryClient();

//   const orderStatusUpdateMutation = useMutation({
//     mutationFn: ({ orderId, orderStatus }) => {
//       console.log("Mutation Function Called - Order ID:", orderId, "Status:", orderStatus); // Debugging
//       return updateOrder({ orderId, orderStatus });
//     },
//     onSuccess: (data) => {
//       console.log("Mutation Success - Response Data:", data); // Debugging
//       enqueueSnackbar("Order status updated Successfully!", { variant: "success" });
//       queryClient.invalidateQueries(['orders']).then(() => {
//         console.log("Orders query invalidated and refetched"); // Debugging
//       });
//     },
//     onError: (error) => {
//       console.error("Mutation Error:", error); // Debugging
//       enqueueSnackbar("Failed to update order status!", { variant: "error" });
//     },
//   });

//   const { data: resData, isError } = useQuery({
//     queryKey: ["orders"],
//     queryFn: async () => {
//       console.log("Fetching orders from the server..."); // Debugging
//       const data = await getOrders();
//       console.log("Fetched Orders:", data); // Debugging
//       return data;
//     },
//     placeholderData: keepPreviousData,
//     onSuccess: (data) => {
//       console.log("Orders fetched successfully:", data); // Debugging
//     },
//     onError: (error) => {
//       console.error("Error fetching orders:", error); // Debugging
//     },
//   });

//   if (isError) {
//     enqueueSnackbar("Something went wrong!", { variant: "error" });
//   }

//   return (
//     <div className="container mx-auto bg-[#262626] p-4 rounded-lg">
//       <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
//         Recent Orders
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="w-full text-left text-[#f5f5f5]">
//           <thead className="bg-[#333] text-[#ababab]">
//             <tr>
//               <th className="p-3">Order ID</th>
//               <th className="p-3">Customer</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Date & Time</th>
//               <th className="p-3">Items</th>
//               <th className="p-3">Table No</th>
//               <th className="p-3">Total</th>
//               <th className="p-3 text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {resData?.data.data.map((order, index) => (
//               <tr
//                 key={index}
//                 className="border-b border-gray-600 hover:bg-[#333]"
//               >
//                 <td className="p-4">#{order.orderId?.orderId}</td>
//                 <td className="p-4">{order.customerDetails.name}</td>
//                 <td className="p-4">
//                   <select
//                     className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
//                       order.orderStatus === "Ready"
//                         ? "text-green-500"
//                         : "text-yellow-500"
//                     }`}
//                     value={order.orderStatus} // Ensure this is order.orderStatus, not order.status
//                     onChange={(e) => handleStatusChange({ orderId: order._id, orderStatus: e.target.value })}
//                   >
//                     <option className="text-yellow-500" value="In Progress">
//                       In Progress
//                     </option>
//                     <option className="text-green-500" value="Ready">
//                       Ready
//                     </option>
//                   </select>
//                 </td>
//                 <td className="p-4">{formatDateAndTme(order.createdAt)}</td>
//                 <td className="p-4">{order.items.length} Items</td>
//                 <td className="p-4">Table - {order.table.tableNo}</td>
//                 <td className="p-4">Rs {order.bills.totalWithTax}</td>
//                 <td className="p-4 text-center">
//                   <button className="text-blue-400 hover:text-blue-500 transition">
//                     <GrUpdate size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;


import React from "react";
import { formatDateAndTme } from '../../utils/index';
import { GrUpdate } from "react-icons/gr";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getOrders, updateOrder } from "../../https";
import { enqueueSnackbar } from 'notistack'; // Ensure this is imported

const RecentOrders = () => {
  const handleStatusChange = ({ orderId, orderStatus }) => {
    console.log("Updating order status - Order ID:", orderId, "New Status:", orderStatus); // Debugging
    orderStatusUpdateMutation.mutate({ orderId, orderStatus });
  };

  const queryClient = useQueryClient();

  const orderStatusUpdateMutation = useMutation({
    mutationFn: ({ orderId, orderStatus }) => {
      console.log("Mutation Function Called - Order ID:", orderId, "Status:", orderStatus); // Debugging
      return updateOrder({ orderId, orderStatus });
    },
    onSuccess: (data) => {
      console.log("Mutation Success - Response Data:", data); // Debugging
      enqueueSnackbar("Order status updated Successfully!", { variant: "success" });
      queryClient.invalidateQueries(['orders']).then(() => {
        console.log("Orders query invalidated and refetched"); // Debugging
      });
    },
    onError: (error) => {
      console.error("Mutation Error:", error); // Debugging
      enqueueSnackbar("Failed to update order status!", { variant: "error" });
    },
  });

  const { data: resData, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      console.log("Fetching orders from the server..."); // Debugging
      const data = await getOrders();
      console.log("Fetched Orders:", data); // Debugging
      return data;
    },
    placeholderData: keepPreviousData,
    onSuccess: (data) => {
      console.log("Orders fetched successfully:", data); // Debugging
    },
    onError: (error) => {
      console.error("Error fetching orders:", error); // Debugging
    },
  });

  if (isError) {
    enqueueSnackbar("Something went wrong!", { variant: "error" });
  }

  return (
    <div className="container mx-auto bg-[#262626] p-4 rounded-lg">
      <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
        Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[#f5f5f5]">
          <thead className="bg-[#333] text-[#ababab]">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Items</th>
              <th className="p-3">Table No</th>
              <th className="p-3">Total</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {resData?.data.data.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-[#333]"
              >
                <td className="p-4">#{order.orderId?.orderId}</td>
                <td className="p-4">{order.customerDetails.name}</td>
                <td className="p-4">
                  <select
                    className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
                      order.orderStatus === "Ready"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                    value={order.orderStatus} // Ensure this is order.orderStatus, not order.status
                    onChange={(e) => handleStatusChange({ orderId: order._id, orderStatus: e.target.value })}
                  >
                    <option className="text-yellow-500" value="In Progress">
                      In Progress
                    </option>
                    <option className="text-green-500" value="Ready">
                      Ready
                    </option>
                  </select>
                </td>
                <td className="p-4">{formatDateAndTme(order.createdAt)}</td>
                <td className="p-4">{order.items.length} Items</td>
                <td className="p-4">
                  {/* Conditionally render table number or order type */}
                  {order.orderType === "Dine-In" ? (
                    `Table - ${order.table?.tableNo || "N/A"}`
                  ) : (
                    order.orderType // Display "Take Away" or "Delivery"
                  )}
                </td>
                <td className="p-4">Rs {order.bills.totalWithTax}</td>
                <td className="p-4 text-center">
                  <button className="text-blue-400 hover:text-blue-500 transition">
                    <GrUpdate size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;