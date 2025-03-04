// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getTotalPrice } from '../../redux/slice/cartSlice'
// import { enqueueSnackbar } from "notistack"
// import { useMutation } from "@tanstack/react-query"
// import { addOrder, updateTable } from '../../https'
// import { removeAllItems } from '../../redux/slice/cartSlice'
// import { removeCustomer } from '../../redux/slice/customerSlice'



// const BillInfo = () => {

//   const dispatch = useDispatch();

//    const customerData = useSelector(state => state.customer);
//   const cartData = useSelector(state => state.cart);
//   const total = useSelector(getTotalPrice);
//   const taxRate = 5.25;
//   const tax = (total * taxRate) / 100;
//   const totalPriceWithTax = total + tax;

//   const [paymentMethod, setPaymentMethod] = useState();

  

//   const handlePlaceOrder = async () => {
//     if (!paymentMethod) {
//       enqueueSnackbar("Please select payment method!", { variant: "warning" })
//       return;
//     }

//       // Check if a table is selected
//   if (!customerData.table) {
//     enqueueSnackbar("Please select a table!", { variant: "warning" });
//     return;
//   }

//   // Check if any items are selected
//   if (cartData.length === 0) {
//     enqueueSnackbar("Please add items to the cart!", { variant: "warning" });
//     return;
//   }

//     // place order
//     const orderData = {
//       orderId:{
//         orderId:customerData.orderId
//       },
//       customerDetails: {
//         name: customerData.customerName,
//         phone: customerData.customerPhone,
//         guests: customerData.guests
//       },
//       orderStatus: "In Progress",
//       bills: {
//         total: total,
//         tax: tax,
//         totalWithTax: totalPriceWithTax
//       },
//       items: cartData,
//       table: customerData.table.tableId
//     };

//     setTimeout(() => {
//       orderMutation.mutate(orderData);

//     }, 1500);

//   };

//   const orderMutation = useMutation({
//     mutationFn: (reqData) => addOrder(reqData),
//     onSuccess: (resData) => {
//       const { data } = resData.data;
//       console.log(data);

//       //update Table with Booked status 
//       const tableData = {
//         tableId: data.table,
//         status: "Booked",
//         orderId: data._id,
//       };
//       console.log("Table Data:", tableData);

//       setTimeout(() => {
//         tableUpdateMutation.mutate(tableData)
//       }, 1500);

//       enqueueSnackbar("Order Placed!", {
//         variant: "success"
//       });

//     },
//     onError: (error) => {
//       console.log(error)
//     }
//   });

//   const tableUpdateMutation = useMutation({
//     mutationFn: (reqData) => updateTable(reqData),
//     onSuccess: (resData) => {
//       // console.log(data);

//       dispatch(removeCustomer());
//       dispatch(removeAllItems());
//     },
//     onError: (error) => {
//       console.log(error);
//     }
//   })

//   return (
//     <>
//       <div className='flex items-center justify-between px-5 mt-2'>
//         <p className='text-xs text-[#ababab] font-medium mt-2'>Items({cartData.length})</p>
//         <h1 className='text-[#f5f5f5] text-md font-bold'>Rs {total.toFixed(2)}</h1>

//       </div>
//       <div className='flex items-center justify-between px-5 mt-2'>
//         <p className='text-xs text-[#ababab] font-medium mt-2'>Tax(5.25%)</p>
//         <h1 className='text-[#f5f5f5] text-md font-bold'>Rs {tax.toFixed(2)}</h1>

//       </div>
//       <div className='flex items-center justify-between px-5 mt-2'>
//         <p className='text-xs text-[#ababab] font-medium mt-2'>Total With Tax(5.25%)</p>
//         <h1 className='text-[#f5f5f5] text-md font-bold'>Rs {totalPriceWithTax.toFixed(2)}</h1>

//       </div>
//       <div className='flex items-center gap-3 px-5 mt-4'>
//         <button onClick={() => setPaymentMethod("Cash")} className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold
//           ${paymentMethod === "Cash" ? "bg-[#383737]" : ""}`}>Cash</button>
//         <button onClick={() => setPaymentMethod("Online")} className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold
//           ${paymentMethod === "Online" ? "bg-[#383737]" : ""}`}>Online </button>
//       </div>

//       <div className='flex items-center gap-3 px-5 mt-4'>
//         <button 
//         className='bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg'>Print Reciept</button>
//         <button
//         onClick={handlePlaceOrder}
//         className='bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg'>Place Order</button>
//       </div>
//     </>
//   )
// }

// export default BillInfo


// this is the code with changes of tax on cash and online button


// import React, { useState, useEffect } from 'react'; // Import useEffect
// import { useDispatch, useSelector } from 'react-redux';
// import { getTotalPrice } from '../../redux/slice/cartSlice';
// import { enqueueSnackbar } from 'notistack';
// import { useMutation } from '@tanstack/react-query';
// import { addOrder, updateTable } from '../../https';
// import { removeAllItems } from '../../redux/slice/cartSlice';
// import { removeCustomer } from '../../redux/slice/customerSlice';
// import Invoice from "../invoice/Invoice";


// function loadScript(src) {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   }

// const BillInfo = () => {
//     const dispatch = useDispatch();
//     const customerData = useSelector((state) => state.customer);
//     const cartData = useSelector((state) => state.cart);
//     const total = useSelector(getTotalPrice);

//     const [paymentMethod, setPaymentMethod] = useState('Cash'); // Default to Cash
//     const [tax, setTax] = useState(0);
//     const [totalPriceWithTax, setTotalPriceWithTax] = useState(0);
//     const [showInvoice,setShowInvoice] = useState(false)
//     const [orderInfo, setOrderInfo] = useState();


//     useEffect(() => {
//         let taxRate;
//         if (paymentMethod === 'Cash') {
//             taxRate = 15;
//         } else if (paymentMethod === 'Online') {
//             taxRate = 8;
//         } else {
//             taxRate = 0;
//         }

//         const calculatedTax = (total * taxRate) / 100;
//         setTax(calculatedTax);
//         setTotalPriceWithTax(total + calculatedTax);
//     }, [total, paymentMethod]); // Recalculate when total or paymentMethod changes

//     const handlePlaceOrder = async () => {
//         if (!paymentMethod) {
//             enqueueSnackbar('Please select payment method!', { variant: 'warning' });
//             return;
//         }

//         if (!customerData.table) {
//             enqueueSnackbar('Please select a table!', { variant: 'warning' });
//             return;
//         }

//         if (cartData.length === 0) {
//             enqueueSnackbar('Please add items to the cart!', { variant: 'warning' });
//             return;
//         }

//         const orderData = {
//           orderId:{
//                     orderId:customerData.orderId
//                   },
//             customerDetails: {
//                 name: customerData.customerName,
//                 phone: customerData.customerPhone,
//                 guests: customerData.guests,
//             },
//             orderStatus: 'In Progress',
//             bills: {
//                 total: total,
//                 tax: tax,
//                 totalWithTax: totalPriceWithTax,
//             },
//             items: cartData,
//             table: customerData.table.tableId,
//             paymentMethod: paymentMethod, // Include payment method
//         };

//         setTimeout(() => {
//             orderMutation.mutate(orderData);
//         }, 1500);
//     };

//     const orderMutation = useMutation({
//         mutationFn: (reqData) => addOrder(reqData),
//         onSuccess: (resData) => {
//             const { data } = resData.data;
//             console.log('Order data from API:',data);

//             const tableData = {
//                 tableId: data.table,
//                 status: 'Booked',
//                 orderId: data._id,
//             };
//             console.log('Table Data:', tableData);

//             setTimeout(() => {
//                 tableUpdateMutation.mutate(tableData);
//             }, 1500);

//             enqueueSnackbar('Order Placed!', {
//                 variant: 'success',
//             });
//         },
//         onError: (error) => {
//             console.log(error);
//         },
//     });

//     const tableUpdateMutation = useMutation({
//         mutationFn: (reqData) => updateTable(reqData),
//         onSuccess: (resData) => {
//             dispatch(removeCustomer());
//             dispatch(removeAllItems());
//         },
//         onError: (error) => {
//             console.log(error);
//         },
//     });

//     return (
//         <>
//             <div className="flex items-center justify-between px-5 mt-2">
//                 <p className="text-xs text-[#ababab] font-medium mt-2">Items({cartData.length})</p>
//                 <h1 className="text-[#f5f5f5] text-md font-bold">Rs {total.toFixed(2)}</h1>
//             </div>
//             <div className="flex items-center justify-between px-5 mt-2">
//                 <p className="text-xs text-[#ababab] font-medium mt-2">Tax({paymentMethod === 'Cash' ? '15%' : '8%'})</p>
//                 <h1 className="text-[#f5f5f5] text-md font-bold">Rs {tax.toFixed(2)}</h1>
//             </div>
//             <div className="flex items-center justify-between px-5 mt-2">
//                 <p className="text-xs text-[#ababab] font-medium mt-2">Total With Tax</p>
//                 <h1 className="text-[#f5f5f5] text-md font-bold">Rs {totalPriceWithTax.toFixed(2)}</h1>
//             </div>
//             <div className="flex items-center gap-3 px-5 mt-4">
//                 <button
//                     onClick={() => setPaymentMethod('Cash')}
//                     className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${
//                         paymentMethod === 'Cash' ? 'bg-[#383737]' : ''
//                     }`}
//                 >
//                     Cash
//                 </button>
//                 <button
//                     onClick={() => setPaymentMethod('Online')}
//                     className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${
//                         paymentMethod === 'Online' ? 'bg-[#383737]' : ''
//                     }`}
//                 >
//                     Online
//                 </button>
//             </div>

//             <div className="flex items-center gap-3 px-5 mt-4">
//                 <button 
//                 onClick={handlePrint}
//                 className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg">
//                     Print Reciept
//                 </button>
//                 <button
//                     onClick={handlePlaceOrder}
//                     className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg"
//                 >
//                     Place Order
//                 </button>
//             </div>
//             {showInvoice && (
//                 <Invoice orderInfo={orderInfo} setShowInvoice= {setShowInvoice}/>
//             )}
//         </>
//     );
// };

// export default BillInfo;



// import React, { useState, useEffect } from 'react'; // Import useEffect
// import { useDispatch, useSelector } from 'react-redux';
// import { getTotalPrice } from '../../redux/slice/cartSlice';
// import { enqueueSnackbar } from 'notistack';
// import { useMutation } from '@tanstack/react-query';
// import { addOrder, updateTable } from '../../https';
// import { removeAllItems } from '../../redux/slice/cartSlice';
// import { removeCustomer } from '../../redux/slice/customerSlice';
// import Invoice from "../invoice/Invoice";


// function loadScript(src) {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   }

// const BillInfo = () => {
//     const dispatch = useDispatch();
//     const customerData = useSelector((state) => state.customer);
//     const cartData = useSelector((state) => state.cart);
//     const total = useSelector(getTotalPrice);

//     const [paymentMethod, setPaymentMethod] = useState('Cash'); // Default to Cash
//     const [tax, setTax] = useState(0);
//     const [totalPriceWithTax, setTotalPriceWithTax] = useState(0);
//     const [showInvoice,setShowInvoice] = useState(false)
//     const [orderInfo, setOrderInfo] = useState(null);
//     const [placedOrderData, setPlacedOrderData] = useState(null); // Store order data


//     useEffect(() => {
//         let taxRate;
//         if (paymentMethod === 'Cash') {
//             taxRate = 15;
//         } else if (paymentMethod === 'Online') {
//             taxRate = 8;
//         } else {
//             taxRate = 0;
//         }

//         const calculatedTax = (total * taxRate) / 100;
//         setTax(calculatedTax);
//         setTotalPriceWithTax(total + calculatedTax);
//     }, [total, paymentMethod]); // Recalculate when total or paymentMethod changes

//     const handlePlaceOrder = async () => {
//         if (!paymentMethod) {
//             enqueueSnackbar('Please select payment method!', { variant: 'warning' });
//             return;
//         }

//         if (!customerData.table) {
//             enqueueSnackbar('Please select a table!', { variant: 'warning' });
//             return;
//         }

//         if (cartData.length === 0) {
//             enqueueSnackbar('Please add items to the cart!', { variant: 'warning' });
//             return;
//         }

//         const orderData = {
//           orderId:{
//                     orderId:customerData.orderId
//                   },
//             customerDetails: {
//                 name: customerData.customerName,
//                 phone: customerData.customerPhone,
//                 guests: customerData.guests,
//             },
//             orderStatus: 'In Progress',
//             bills: {
//                 total: total,
//                 tax: tax,
//                 totalWithTax: totalPriceWithTax,
//             },
//             items: cartData,
//             table: customerData.table.tableId,
//             paymentMethod: paymentMethod, // Include payment method
//         };

//         setTimeout(() => {
//             orderMutation.mutate(orderData);
//         }, 1500);
//     };

//     const orderMutation = useMutation({
//         mutationFn: (reqData) => addOrder(reqData),
//         onSuccess: (resData) => {
//             const { data } = resData.data;
//             console.log('Order data from API:',data);


//             const tableData = {
//                 tableId: data.table,
//                 status: 'Booked',
//                 orderId: data._id,
//             };
//             console.log('Table Data:', tableData);

//             setTimeout(() => {
//                 tableUpdateMutation.mutate(tableData);
//             }, 1500);

//             enqueueSnackbar('Order Placed!', {
//                 variant: 'success',
//             });
//         },
//         onError: (error) => {
//             console.log(error);
//         },
//     });

//     const tableUpdateMutation = useMutation({
//         mutationFn: (reqData) => updateTable(reqData),
//         onSuccess: (resData) => {
//             dispatch(removeCustomer());
//             dispatch(removeAllItems());
//         },
//         onError: (error) => {
//             console.log('Table update error:',error);
//         },
//     });

//     const handlePrintButton = () => {
//         if (placedOrderData) {
//             setOrderInfo(placedOrderData);
//             setShowInvoice(true);
//         } else {
//             enqueueSnackbar('Please place an order first!', { variant: 'warning' });
//         }
//     };

//     return (
//         <>
            // <div className="flex items-center justify-between px-5 mt-2">
            //     <p className="text-xs text-[#ababab] font-medium mt-2">Items({cartData.length})</p>
            //     <h1 className="text-[#f5f5f5] text-md font-bold">Rs {total.toFixed(2)}</h1>
            // </div>
            // <div className="flex items-center justify-between px-5 mt-2">
            //     <p className="text-xs text-[#ababab] font-medium mt-2">Tax({paymentMethod === 'Cash' ? '15%' : '8%'})</p>
            //     <h1 className="text-[#f5f5f5] text-md font-bold">Rs {tax.toFixed(2)}</h1>
            // </div>
            // <div className="flex items-center justify-between px-5 mt-2">
            //     <p className="text-xs text-[#ababab] font-medium mt-2">Total With Tax</p>
            //     <h1 className="text-[#f5f5f5] text-md font-bold">Rs {totalPriceWithTax.toFixed(2)}</h1>
            // </div>
            // <div className="flex items-center gap-3 px-5 mt-4">
            //     <button
            //         onClick={() => setPaymentMethod('Cash')}
            //         className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${
            //             paymentMethod === 'Cash' ? 'bg-[#383737]' : ''
            //         }`}
            //     >
            //         Cash
            //     </button>
            //     <button
            //         onClick={() => setPaymentMethod('Online')}
            //         className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${
            //             paymentMethod === 'Online' ? 'bg-[#383737]' : ''
            //         }`}
            //     >
            //         Online
            //     </button>
            // </div>

//             <div className="flex items-center gap-3 px-5 mt-4">
//                 <button 
//                onClick={handlePrintButton}
//                 className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg">
//                     Print Reciept
//                 </button>
//                 <button
//                     onClick={handlePlaceOrder}
//                     className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg"
//                 >
//                     Place Order
//                 </button>
//             </div>
//             {showInvoice && (
//                 <Invoice orderInfo={orderInfo} setShowInvoice= {setShowInvoice}/>
//             )}
//         </>
//     );
// };

// export default BillInfo;



// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTotalPrice } from '../../redux/slice/cartSlice';
// import { enqueueSnackbar } from 'notistack';
// import { useMutation } from '@tanstack/react-query';
// import { addOrder, updateTable } from '../../https';
// import { removeAllItems } from '../../redux/slice/cartSlice';
// import { removeCustomer } from '../../redux/slice/customerSlice';
// import Invoice from "../invoice/Invoice";

// const BillInfo = () => {
//     const dispatch = useDispatch();
//     const customerData = useSelector((state) => state.customer);
//     const cartData = useSelector((state) => state.cart);
//     const total = useSelector(getTotalPrice);

//     const [paymentMethod, setPaymentMethod] = useState('Cash');
//     const [tax, setTax] = useState(0);
//     const [totalPriceWithTax, setTotalPriceWithTax] = useState(0);
//     const [showInvoice, setShowInvoice] = useState(false);
//     const [orderInfo, setOrderInfo] = useState(null);
//     const [placedOrderData, setPlacedOrderData] = useState(null);

//     useEffect(() => {
//         let taxRate;
//         if (paymentMethod === 'Cash') {
//             taxRate = 15;
//         } else if (paymentMethod === 'Online') {
//             taxRate = 8;
//         } else {
//             taxRate = 0;
//         }

//         const calculatedTax = (total * taxRate) / 100;
//         setTax(calculatedTax);
//         setTotalPriceWithTax(total + calculatedTax);
//     }, [total, paymentMethod]);

//     const handlePlaceOrder = async () => {
//         if (!paymentMethod) {
//             enqueueSnackbar('Please select payment method!', { variant: 'warning' });
//             return;
//         }
    
//         // Check for table only if it's a Dine-in order
//         if (customerData.orderType === 'Dine-in' && !customerData.table) {
//             enqueueSnackbar('Please select a table!', { variant: 'warning' });
//             return;
//         }
    
//         if (cartData.length === 0) {
//             enqueueSnackbar('Please add items to the cart!', { variant: 'warning' });
//             return;
//         }
    
//         const orderData = {
//             orderId: { orderId: customerData.orderId },
//             customerDetails: {
//                 name: customerData.customerName,
//                 phone: customerData.customerPhone,
//                 guests: customerData.guests,
//                 orderType: customerData.orderType,
//             },
//             orderStatus: 'In Progress',
//             bills: {
//                 total: total,
//                 tax: tax,
//                 totalWithTax: totalPriceWithTax,
//             },
//             items: cartData,
//             paymentMethod: paymentMethod,
//         };
    
//         // Conditionally include table property
//         if (customerData.orderType === 'Dine-in') {
//             orderData.table = customerData.table.tableId;
//         }
    
//         orderMutation.mutate(orderData);
//     };

//     const orderMutation = useMutation({
//         mutationFn: (reqData) => addOrder(reqData),
//         onSuccess: (resData) => {
//             const { data } = resData.data;
//             console.log('Order data from API:', data);

//             setPlacedOrderData(data);
//             const tableData = {
//                 tableId: data.table,
//                 status: 'Booked',
//                 orderId: data._id,
//             };
//             console.log('Table Data:', tableData);

//             setTimeout(() => {
//                 tableUpdateMutation.mutate(tableData);
//             }, 1500);

//             enqueueSnackbar('Order Placed!', {
//                 variant: 'success',
//             });
//         },
//         onError: (error) => {
//             console.log(error);
//         },
//     });

//     const tableUpdateMutation = useMutation({
//         mutationFn: (reqData) => updateTable(reqData),
//         onSuccess: (resData) => {
//             dispatch(removeCustomer());
//             dispatch(removeAllItems());
//         },
//         onError: (error) => {
//             console.log(error);
//         },
//     });

//     const handlePrintButton = () => {
//         if (placedOrderData) {
//             setOrderInfo(placedOrderData);
//             setShowInvoice(true);
//         } else {
//             enqueueSnackbar('Please place an order first!', { variant: 'warning' });
//         }
//     };

//     return (
//         <>
        
//         <div className="flex items-center justify-between px-5 mt-2">
//                 <p className="text-xs text-[#ababab] font-medium mt-2">Items({cartData.length})</p>
//                 <h1 className="text-[#f5f5f5] text-md font-bold">Rs {total.toFixed(2)}</h1>
//             </div>
//             <div className="flex items-center justify-between px-5 mt-2">
//                 <p className="text-xs text-[#ababab] font-medium mt-2">Tax({paymentMethod === 'Cash' ? '15%' : '8%'})</p>
//                 <h1 className="text-[#f5f5f5] text-md font-bold">Rs {tax.toFixed(2)}</h1>
//             </div>
//             <div className="flex items-center justify-between px-5 mt-2">
//                 <p className="text-xs text-[#ababab] font-medium mt-2">Total With Tax</p>
//                 <h1 className="text-[#f5f5f5] text-md font-bold">Rs {totalPriceWithTax.toFixed(2)}</h1>
//             </div>
//             <div className="flex items-center justify-between px-5 mt-2">
//                 <p className="text-xs text-[#ababab] font-medium mt-2">Discount</p>
//                 <h1 className="text-[#f5f5f5] text-md font-bold">Rs {totalPriceWithTax.toFixed(2)}</h1>
//             </div>
//             <div className="flex items-center gap-3 px-5 mt-4">
//                 <button
//                     onClick={() => setPaymentMethod('Cash')}
//                     className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${
//                         paymentMethod === 'Cash' ? 'bg-[#383737]' : ''
//                     }`}
//                 >
//                     Cash
//                 </button>
//                 <button
//                     onClick={() => setPaymentMethod('Online')}
//                     className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${
//                         paymentMethod === 'Online' ? 'bg-[#383737]' : ''
//                     }`}
//                 >
//                     Online
//                 </button>
//             </div>
//             <div className="flex items-center gap-3 px-5 mt-4">
//                 <button
//                     onClick={handlePrintButton}
//                     className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg"
//                 >
//                     Print Receipt
//                 </button>
//                 <button
//                     onClick={handlePlaceOrder}
//                     className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg"
//                 >
//                     Place Order
//                 </button>
//             </div>
//             {showInvoice && <Invoice orderInfo={orderInfo} setShowInvoice={setShowInvoice} />}
//         </>
//     );
// };

// export default BillInfo;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPrice } from '../../redux/slice/cartSlice';
import { enqueueSnackbar } from 'notistack';
import { useMutation } from '@tanstack/react-query';
import { addOrder, updateTable } from '../../https';
import { removeAllItems } from '../../redux/slice/cartSlice';
import { removeCustomer } from '../../redux/slice/customerSlice';
import Invoice from "../invoice/Invoice";

const BillInfo = () => {
    const dispatch = useDispatch();
    const customerData = useSelector((state) => state.customer);
    const cartData = useSelector((state) => state.cart);
    const total = useSelector(getTotalPrice);

    const [paymentMethod, setPaymentMethod] = useState('Cash');
    const [tax, setTax] = useState(0);
    const [totalPriceWithTax, setTotalPriceWithTax] = useState(0);
    const [showInvoice, setShowInvoice] = useState(false);
    const [orderInfo, setOrderInfo] = useState(null);
    const [placedOrderData, setPlacedOrderData] = useState(null);
    const [discountPercentage, setDiscountPercentage] = useState(0); // State for percentage discount

    useEffect(() => {
        let taxRate;
        if (paymentMethod === 'Cash') {
            taxRate = 15;
        } else if (paymentMethod === 'Online') {
            taxRate = 8;
        } else {
            taxRate = 0;
        }

        const calculatedTax = (total * taxRate) / 100;
        const totalWithTax = total + calculatedTax;
        const discountAmount = (totalWithTax * discountPercentage) / 100; // Calculate discount on total with tax
        setTax(calculatedTax);
        setTotalPriceWithTax(totalWithTax - discountAmount); // Subtract discount from total with tax
    }, [total, paymentMethod, discountPercentage]); // Add discountPercentage to dependency array

    const handlePlaceOrder = async () => {
        if (!paymentMethod) {
            enqueueSnackbar('Please select payment method!', { variant: 'warning' });
            return;
        }
    
        // Check for table only if it's a Dine-in order
        if (customerData.orderType === 'Dine-in' && !customerData.table) {
            enqueueSnackbar('Please select a table!', { variant: 'warning' });
            return;
        }
    
        if (cartData.length === 0) {
            enqueueSnackbar('Please add items to the cart!', { variant: 'warning' });
            return;
        }
    
        const orderData = {
            orderId: { orderId: customerData.orderId },
            customerDetails: {
                name: customerData.customerName,
                phone: customerData.customerPhone,
                guests: customerData.guests,
                orderType: customerData.orderType,
            },
            orderStatus: 'In Progress',
            bills: {
                total: total,
                tax: tax,
                totalWithTax: totalPriceWithTax,
                discountPercentage: discountPercentage, // Include discount percentage in order data
            },
            items: cartData,
            paymentMethod: paymentMethod,
        };
    
        // Conditionally include table property
        if (customerData.orderType === 'Dine-in') {
            orderData.table = customerData.table.tableId;
        }
    
        orderMutation.mutate(orderData);
    };

    const orderMutation = useMutation({
        mutationFn: (reqData) => addOrder(reqData),
        onSuccess: (resData) => {
            const { data } = resData.data;
            console.log('Order data from API:', data);

            setPlacedOrderData(data);
            const tableData = {
                tableId: data.table,
                status: 'Booked',
                orderId: data._id,
            };
            console.log('Table Data:', tableData);

            setTimeout(() => {
                tableUpdateMutation.mutate(tableData);
            }, 1500);

            enqueueSnackbar('Order Placed!', {
                variant: 'success',
            });
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const tableUpdateMutation = useMutation({
        mutationFn: (reqData) => updateTable(reqData),
        onSuccess: (resData) => {
            dispatch(removeCustomer());
            dispatch(removeAllItems());
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handlePrintButton = () => {
        if (placedOrderData) {
            setOrderInfo(placedOrderData);
            setShowInvoice(true);
        } else {
            enqueueSnackbar('Please place an order first!', { variant: 'warning' });
        }
    };
    const handleDiscountChange = (e) => {
        const value = parseFloat(e.target.value) || 0;
        if (value >= 0 && value <= 100) {
            setDiscountPercentage(value);
        }
    };


    return (
        <>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Items({cartData.length})</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">Rs {total.toFixed(2)}</h1>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Tax({paymentMethod === 'Cash' ? '15%' : '8%'})</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">Rs {tax.toFixed(2)}</h1>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Discount</p>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        value={discountPercentage}
                        // onChange={(e) => setDiscountPercentage(parseFloat(e.target.value) || 0)}
                        onChange={handleDiscountChange}
                        className="text-[#f5f5f5] text-md font-bold bg-transparent border border-[#555] rounded-lg px-2 py-1 w-20"
                        
                    />
                </div>
            </div>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Total With Tax</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">Rs {totalPriceWithTax.toFixed(2)}</h1>
            </div>
           
            <div className="flex items-center gap-3 px-5 mt-4">
                <button
                    onClick={() => setPaymentMethod('Cash')}
                    className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${
                        paymentMethod === 'Cash' ? 'bg-[#383737]' : ''
                    }`}
                >
                    Cash
                </button>
                <button
                    onClick={() => setPaymentMethod('Online')}
                    className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold ${
                        paymentMethod === 'Online' ? 'bg-[#383737]' : ''
                    }`}
                >
                    Online
                </button>
            </div>
            <div className="flex items-center gap-3 px-5 mt-4">
                <button
                    onClick={handlePrintButton}
                    className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg"
                >
                    Print Receipt
                </button>
                <button
                    onClick={handlePlaceOrder}
                    className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg"
                >
                    Place Order
                </button>
            </div>
            {showInvoice && <Invoice orderInfo={orderInfo} setShowInvoice={setShowInvoice} />}
        </>
    );
};

export default BillInfo;