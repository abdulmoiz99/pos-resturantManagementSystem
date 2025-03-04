// // import React, { useState } from 'react'
// // import { menus } from '../../constants'

// // import { GrRadialSelected } from "react-icons/gr";
// // import { FaOpencart } from "react-icons/fa6";
// // import { GiShoppingCart } from "react-icons/gi";
// // import { useDispatch } from 'react-redux';
// // // import { addItem } from '../../redux/slice/cartSlice'; 
// // import { addItems } from '../../redux/slice/cartSlice'
// // import { v4 as uuidv4 } from 'uuid';
// // import { useQuery, keepPreviousData } from '@tanstack/react-query';
// // import { getCategories } from '../../https';
// // import { enqueueSnackbar } from 'notistack';




// // const MenuContainer = () => {


// //   const { data: resData, isError, isLoading } = useQuery({
// //     queryKey: ["category"],
// //     queryFn: async () => {
// //       return await getCategories();
// //     },
// //     placeholderData: keepPreviousData
// //   });
// //   if (isError) {
// //     enqueueSnackbar("Something went wrong!", { variant: "error" })
// //   }
// //   if(isLoading){
// //     return <div>Loading categories...</div>; // Show a loading state
// //   }
// //   console.log(resData)

// //   const [selected, setSelected] = useState(menus[0]);
// //   const [itemCount, setItemCount] = useState(0);
// //   const [itemId, setItemId] = useState();
// //   const dispatch = useDispatch();


// //   const increment = (id) => {
// //     setItemId(id);
// //     if (itemCount >= 100) return;
// //     setItemCount((prev) => prev + 1)

// //   }
// //   const decrement = (id) => {
// //     setItemId(id);
// //     if (itemCount <= 0) return;
// //     setItemCount((prev) => prev - 1)

// //   }

// //   const handleAddToCart = (item) => {
// //     if (itemCount === 0) return;

// //     const { name, price } = item;
// //     const newObj = { id: uuidv4(), name, pricePerQuantity: price, quantity: itemCount, price: price * itemCount };
// //     dispatch(addItems(newObj));
// //     setItemCount(0);


// //   }

// //   return (
// //     <>

// //       <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%] hidden-scrollbar' >
// //         {
// //           resData?.data.map((category) => {
// //             return (
// //               <div

// //                 key={category._id}
// //                 className='flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer transition-transform hover:scale-104 hidden-scrollbar'
// //                 style={{ background: category.bgColor }}
// //                 onClick={() => {
// //                   setSelected(category);
// //                   setItemId(0);
// //                   setItemCount(0);
// //                 }}
// //               >

// //                 <div className='flex items-center justify-between w-full'>
// //                   <h1 className='text-[#f5f5f5] text-lg font-semibold '> {category.name}  </h1>
// //                   {selected.id === category._id && <GrRadialSelected className='text-white size={20}' />}
// //                 </div>
// //                 <p className='text-[#ababab] text-sm font-semibold'>{menu.items.length} Items</p>
// //               </div>
// //             )
// //           })
// //         }
// //       </div>
// //       <hr className='border-[#2a2a2a] border-t-2 mt-4' />

// //       {/* <div>
// //         <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]' >
// //           {
// //             selected?.items.map((item) => {
// //               return (
// //                 <div key={item.id} className='flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer 
// //                 transition-transform hover:scale-104 hover:bg-[#2a2a2a] bg-[#1a1a1a]'


// //                 >

// //                   <div className='flex items-start justify-between w-full'>
// //                     <h1 className='text-[#f5f5f5] text-lg font-semibold '>{item.name}  </h1>
// //                     <button onClick={() => handleAddToCart(item)}
// //                       className=' text-[#02ca3a] cursor-pointer'>  <GiShoppingCart size={30} />
// //                     </button>
// //                   </div>

// //                   <div className='flex items-center justify-between w-full'>

// //                     <p className='text-[#f5f5f5] text-xl font-bold'>Rs{item.price}</p>
// //                     <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-20">
// //                       <button
// //                         onClick={() => decrement(item.id)}
// //                         className="text-yellow-500 text-2xl cursor-pointer">&minus;
// //                       </button>

// //                       <span className=" text-white ">
// //                         {item.id === itemId ? itemCount : "0"}</span>
// //                       <button
// //                         onClick={() => increment(item.id)}
// //                         className="text-yellow-500 text-2xl cursor-pointer">&#43;
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               );
// //             })
// //           }
// //         </div>
// //       </div> */}



// //     </>
// //   )
// // }

// // export default MenuContainer


// // // // chatgpt code
// // // import React, { useState } from "react";
// // // import { menus } from "../../constants";
// // // import { GrRadialSelected } from "react-icons/gr";

// // // const MenuContainer = () => {
// // //   const [selected, setSelected] = useState(menus[0]);

// // //   // Track item counts per menu item
// // //   const [itemCounts, setItemCounts] = useState({});

// // //   const increment = (id) => {
// // //     setItemCounts((prev) => ({
// // //       ...prev,
// // //       [id]: (prev[id] || 0) + 1 > 100 ? 100 : (prev[id] || 0) + 1,
// // //     }));
// // //   };

// // //   const decrement = (id) => {
// // //     setItemCounts((prev) => ({
// // //       ...prev,
// // //       [id]: (prev[id] || 0) - 1 < 0 ? 0 : (prev[id] || 0) - 1,
// // //     }));
// // //   };

// // //   return (
// // //     <>
// // //       {/* Menu Categories */}
// // //       <div className="grid grid-cols-4 gap-4 px-10 py-4 w-full">
// // //         {menus.map((menu) => (
// // //           <div
// // //             key={menu.id}
// // //             className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer transition-transform hover:scale-105"
// // //             style={{ background: menu.bgColor }}
// // //             onClick={() => {
// // //               setSelected(menu);
// // //               setItemCounts({});
// // //             }}
// // //           >
// // //             <div className="flex items-center justify-between w-full">
// // //               <h1 className="text-[#f5f5f5] text-lg font-semibold">
// // //                 {menu.icon} {menu.name}
// // //               </h1>
// // //               {selected.id === menu.id && <GrRadialSelected size={20} className="text-white" />}
// // //             </div>
// // //             <p className="text-[#ababab] text-sm font-semibold">{menu.items.length} Items</p>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <hr className="border-[#2a2a2a] border-t-2 mt-4" />

// // //       {/* Selected Menu Items */}
// // //       <div className="grid grid-cols-4 gap-4 px-10 py-4 w-full">
// // //         {selected?.items.map((menuItem) => (
// // //           <div
// // //             key={menuItem.id}
// // //             className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer transition-transform hover:scale-105 hover:bg-[#2a2a2a] bg-[#1a1a1a]"
// // //           >
// // //             <h1 className="text-[#f5f5f5] text-lg font-semibold">{menuItem.name}</h1>
// // //             <div className="flex items-center justify-between w-full">
// // //               <p className="text-[#f5f5f5] text-xl font-bold">Rs {menuItem.price}</p>
// // //               <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-20">
// // //                 <button
// // //                   onClick={() => decrement(menuItem.id)}
// // //                   className="text-yellow-500 text-2xl cursor-pointer"
// // //                 >
// // //                   &minus;
// // //                 </button>
// // //                 <span className="text-white">{itemCounts[menuItem.id] || 0}</span>
// // //                 <button
// // //                   onClick={() => increment(menuItem.id)}
// // //                   className="text-yellow-500 text-2xl cursor-pointer"
// // //                 >
// // //                   &#43;
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default MenuContainer;


// // import React, { useState, useEffect } from 'react';
// // import { GrRadialSelected } from 'react-icons/gr';
// // import { GiShoppingCart } from 'react-icons/gi';
// // import { useDispatch } from 'react-redux';
// // import { addItems } from '../../redux/slice/cartSlice';
// // import { v4 as uuidv4 } from 'uuid';
// // import { useQuery } from '@tanstack/react-query';
// // import { getCategories, getDishes } from '../../https'; // Ensure this is imported
// // import { enqueueSnackbar } from 'notistack';

// // const MenuContainer = () => {
// //   const dispatch = useDispatch();


// //   // State for selected category and dishes
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [dishes, setDishes] = useState([]);
// //   const [itemCount, setItemCount] = useState(0);
// //   const [itemId, setItemId] = useState();

// //   // Fetch categories
// //   const { data: categories, isError: isCategoriesError, isLoading: isCategoriesLoading } = useQuery({
// //     queryKey: ['categories'],
// //     queryFn: async () => {
// //       const response = await getCategories();
// //       console.log('Categories Response:', response); // Log the response
// //       return response.data; // Ensure the response contains the categories array
// //     },
// //     onSuccess: (data) => {
// //       // Set the first category as the default selected category
// //       if (data && data.length > 0) {
// //         setSelectedCategory(data[0]);
// //       }}
// //   });



// //   // Fetch dishes for the selected category
// //   useEffect(() => {
// //     if (selectedCategory) {
// //       const fetchDishes = async () => {
// //         try {
// //           const response = await getDishes(selectedCategory._id);
// //           console.log('Dishes Response:', response);
// //           setDishes(response.data); // Ensure the response contains the dishes array
// //         } catch (error) {
// //           console.error('Error fetching dishes:', error);
// //           enqueueSnackbar('Failed to fetch dishes!', { variant: 'error' });
// //         }
// //       };
// //       fetchDishes();
// //     }
// //   }, [selectedCategory]);

// //   // Handle errors for categories fetch
// //   if (isCategoriesError) {
// //     enqueueSnackbar('Failed to fetch categories!', { variant: 'error' });
// //   }

// //   // Show loading state while fetching categories
// //   if (isCategoriesLoading) {
// //     return <div>Loading categories...</div>;
// //   }

// //   // Increment item count
// //   const increment = (id) => {
// //     setItemId(id);
// //     if (itemCount >= 100) return;
// //     setItemCount((prev) => prev + 1);
// //   };

// //   // Decrement item count
// //   const decrement = (id) => {
// //     setItemId(id);
// //     if (itemCount <= 0) return;
// //     setItemCount((prev) => prev - 1);
// //   };

// //   // Add item to cart
// //   const handleAddToCart = (item) => {
// //     if (itemCount === 0) return;
// //     const { dishName, dishPrice } = item;
// //     const newObj = {
// //       id: uuidv4(),
// //       name: dishName,
// //       pricePerQuantity: dishPrice,
// //       quantity: itemCount,
// //       price: dishPrice * itemCount,
// //     };
// //     dispatch(addItems(newObj));
// //     setItemCount(0);
// //   };

// //   return (
// //     <>
// //       {/* Menu Categories */}
// //       <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] hidden-scrollbar">
// //         {categories?.data?.data?.map((category) => (
// //           <div
// //             key={category._id}
// //             className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer transition-transform hover:scale-104"
// //             style={{ background: '#b73e3e' }} // Add dynamic background colors if needed
// //             onClick={() => {
// //               setSelectedCategory(category);
// //               setItemId(0);
// //               setItemCount(0);
// //             }}
// //           >
// //             <div className="flex items-center justify-between w-full">
// //               <h1 className="text-[#f5f5f5] text-lg font-semibold">
// //                 {category.categoryName}
// //               </h1>
// //               {selectedCategory?._id === category._id && (
// //                 <GrRadialSelected className="text-white size={20}" />
// //               )}
// //             </div>
// //             <p className="text-[#ababab] text-sm font-semibold">
// //               {dishes.length} Items
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //       <hr className="border-[#2a2a2a] border-t-2 mt-4" />

// //       {/* Dishes for Selected Category */}
// //       <div>
// //         <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
// //           {dishes.map((item) => (
// //             <div
// //               key={item._id}
// //               className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer transition-transform hover:scale-104 hover:bg-[#2a2a2a] bg-[#1a1a1a]"
// //             >
// //               <div className="flex items-start justify-between w-full">
// //                 <h1 className="text-[#f5f5f5] text-lg font-semibold">
// //                   {item.dishName}
// //                 </h1>
// //                 <button
// //                   onClick={() => handleAddToCart(item)}
// //                   className="text-[#02ca3a] cursor-pointer"
// //                 >
// //                   <GiShoppingCart size={30} />
// //                 </button>
// //               </div>

// //               <div className="flex items-center justify-between w-full">
// //                 <p className="text-[#f5f5f5] text-xl font-bold">
// //                   Rs{item.dishPrice}
// //                 </p>
// //                 <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-20">
// //                   <button
// //                     onClick={() => decrement(item._id)}
// //                     className="text-yellow-500 text-2xl cursor-pointer"
// //                   >
// //                     &minus;
// //                   </button>
// //                   <span className="text-white">
// //                     {item._id === itemId ? itemCount : '0'}
// //                   </span>
// //                   <button
// //                     onClick={() => increment(item._id)}
// //                     className="text-yellow-500 text-2xl cursor-pointer"
// //                   >
// //                     &#43;
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default MenuContainer;


// // import React, { useState, useEffect } from 'react';
// // import { GrRadialSelected } from 'react-icons/gr';
// // import { GiShoppingCart } from 'react-icons/gi';
// // import { useDispatch } from 'react-redux';
// // import { addItems } from '../../redux/slice/cartSlice';
// // import { v4 as uuidv4 } from 'uuid';
// // import { useQuery } from '@tanstack/react-query';
// // import { getCategories, getDishes } from '../../https'; // Ensure this is imported
// // import { enqueueSnackbar } from 'notistack';

// // const MenuContainer = () => {
// //   const dispatch = useDispatch();

// //   // State for selected category and dishes
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [dishes, setDishes] = useState([]);
// //   const [itemCount, setItemCount] = useState(0);
// //   const [itemId, setItemId] = useState();

// //   // Fetch categories
// //   const { data: categories, isError: isCategoriesError, isLoading: isCategoriesLoading } = useQuery({
// //     queryKey: ['categories'],
// //     queryFn: async () => {
// //       const response = await getCategories();
// //       console.log('Categories Response:', response); // Log the response
// //       return response.data.data; // Access the nested data
// //     },
// //     onSuccess: (data) => {
// //       // Set the first category as the default selected category
// //       if (data && data.length > 0) {
// //         setSelectedCategory(data[0]);
// //       }
// //     },
// //   });

// //   // Fetch dishes for the selected category
// //   useEffect(() => {
// //     if (selectedCategory) {
// //       const fetchDishes = async () => {
// //         try {
// //           const response = await getDishes(selectedCategory._id); // Pass categoryId
// //           console.log('Dishes Response:', response); // Log the response
// //           setDishes(response.data.data); // Access the nested data
// //         } catch (error) {
// //           console.error('Error fetching dishes:', error);
// //           enqueueSnackbar('Failed to fetch dishes!', { variant: 'error' });
// //         }
// //       };
// //       fetchDishes();
// //     }
// //   }, [selectedCategory]);

// //   // Handle errors for categories fetch
// //   if (isCategoriesError) {
// //     enqueueSnackbar('Failed to fetch categories!', { variant: 'error' });
// //   }

// //   // Show loading state while fetching categories
// //   if (isCategoriesLoading) {
// //     return <div>Loading categories...</div>;
// //   }

// //   // Increment item count
// //   const increment = (id) => {
// //     setItemId(id);
// //     if (itemCount >= 100) return;
// //     setItemCount((prev) => prev + 1);
// //   };

// //   // Decrement item count
// //   const decrement = (id) => {
// //     setItemId(id);
// //     if (itemCount <= 0) return;
// //     setItemCount((prev) => prev - 1);
// //   };

// //   // Add item to cart
// //   const handleAddToCart = (item) => {
// //     if (itemCount === 0) return;
// //     const { dishName, dishPrice } = item;
// //     const newObj = {
// //       id: uuidv4(),
// //       name: dishName,
// //       pricePerQuantity: dishPrice,
// //       quantity: itemCount,
// //       price: dishPrice * itemCount,
// //     };
// //     dispatch(addItems(newObj));
// //     setItemCount(0);
// //   };

// //   return (
// //     <>
// //       {/* Menu Categories */}
// //       <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] hidden-scrollbar">
// //         {categories?.map((category) => {
// //           console.log('Rendering Category:', category); // Log each category being rendered
// //           return (
// //             <div
// //               key={category._id}
// //               className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer transition-transform hover:scale-104"
// //               style={{ background: '#b73e3e' }} // Add dynamic background colors if needed
// //               onClick={() => {
// //                 setSelectedCategory(category);
// //                 console.log('Selected Category:', category); // Log the selected category
// //                 setItemId(0);
// //                 setItemCount(0);
// //               }}
// //             >
// //               <div className="flex items-center justify-between w-full">
// //                 <h1 className="text-[#f5f5f5] text-lg font-semibold">
// //                   {category.categoryName}
// //                 </h1>
// //                 {selectedCategory?._id === category._id && (
// //                   <GrRadialSelected className="text-white size={20}" />
// //                 )}
// //               </div>
// //               <p className="text-[#ababab] text-sm font-semibold">
// //                 {dishes.length} Items
// //               </p>
// //             </div>
// //           );
// //         })}
// //       </div>
// //       <hr className="border-[#2a2a2a] border-t-2 mt-4" />

// //       {/* Dishes for Selected Category */}
// //       <div>
// //         <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
// //           {dishes.map((item) => {
// //             console.log('Rendering Dish:', item); // Log each dish being rendered
// //             return (
// //               <div
// //                 key={item._id}
// //                 className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer transition-transform hover:scale-104 hover:bg-[#2a2a2a] bg-[#1a1a1a]"
// //               >
// //                 <div className="flex items-start justify-between w-full">
// //                   <h1 className="text-[#f5f5f5] text-lg font-semibold">
// //                     {item.dishName}
// //                   </h1>
// //                   <button
// //                     onClick={() => handleAddToCart(item)}
// //                     className="text-[#02ca3a] cursor-pointer"
// //                   >
// //                     <GiShoppingCart size={30} />
// //                   </button>
// //                 </div>

// //                 <div className="flex items-center justify-between w-full">
// //                   <p className="text-[#f5f5f5] text-xl font-bold">
// //                     Rs{item.dishPrice}
// //                   </p>
// //                   <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-20">
// //                     <button
// //                       onClick={() => decrement(item._id)}
// //                       className="text-yellow-500 text-2xl cursor-pointer"
// //                     >
// //                       &minus;
// //                     </button>
// //                     <span className="text-white">
// //                       {item._id === itemId ? itemCount : '0'}
// //                     </span>
// //                     <button
// //                       onClick={() => increment(item._id)}
// //                       className="text-yellow-500 text-2xl cursor-pointer"
// //                     >
// //                       &#43;
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default MenuContainer;


// // import React, { useState, useEffect } from 'react';
// // import { GrRadialSelected } from 'react-icons/gr';
// // import { GiShoppingCart } from 'react-icons/gi';
// // import { useDispatch } from 'react-redux';
// // import { addItems } from '../../redux/slice/cartSlice';
// // import { v4 as uuidv4 } from 'uuid';
// // import { useQuery } from '@tanstack/react-query';
// // import { getCategories, getDishes } from '../../https'; // Ensure this is imported
// // import { enqueueSnackbar } from 'notistack';

// // const MenuContainer = () => {
// //   const dispatch = useDispatch();

// //   // State for selected category and dishes
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [dishes, setDishes] = useState([]);
// //   const [itemCount, setItemCount] = useState(0);
// //   const [itemId, setItemId] = useState();

// //   // Fetch categories
// //   const { data: categories, isError: isCategoriesError, isLoading: isCategoriesLoading } = useQuery({
// //     queryKey: ['categories'],
// //     queryFn: async () => {
// //       const response = await getCategories();
// //       console.log('Categories Response:', response); // Log the full response
// //       return response.data.data; // Access the nested data
// //     },
// //     onSuccess: (data) => {
// //       // Set the first category as the default selected category
// //       if (data && data.length > 0) {
// //         setSelectedCategory(data[0]);
// //       }
// //     },
// //   });

// //   // Fetch dishes for the selected category
// //   useEffect(() => {
// //     if (selectedCategory) {
// //       const fetchDishes = async () => {
// //         try {
// //           const response = await getDishes(selectedCategory._id); // Pass categoryId
// //           console.log('Dishes Response:', response); // Log the response
// //           setDishes(response.data.data); // Access the nested data
// //         } catch (error) {
// //           console.error('Error fetching dishes:', error);
// //           enqueueSnackbar('Failed to fetch dishes!', { variant: 'error' });
// //         }
// //       };
// //       fetchDishes();
// //     }
// //   }, [selectedCategory]);

// //   // Handle errors for categories fetch
// //   if (isCategoriesError) {
// //     enqueueSnackbar('Failed to fetch categories!', { variant: 'error' });
// //   }

// //   // Show loading state while fetching categories
// //   if (isCategoriesLoading) {
// //     return <div>Loading categories...</div>;
// //   }

// //   // Increment item count
// //   const increment = (id) => {
// //     setItemId(id);
// //     if (itemCount >= 100) return;
// //     setItemCount((prev) => prev + 1);
// //   };

// //   // Decrement item count
// //   const decrement = (id) => {
// //     setItemId(id);
// //     if (itemCount <= 0) return;
// //     setItemCount((prev) => prev - 1);
// //   };

// //   // Add item to cart
// //   const handleAddToCart = (item) => {
// //     if (itemCount === 0) return;
// //     const { dishName, dishPrice } = item;
// //     const newObj = {
// //       id: uuidv4(),
// //       name: dishName,
// //       pricePerQuantity: dishPrice,
// //       quantity: itemCount,
// //       price: dishPrice * itemCount,
// //     };
// //     dispatch(addItems(newObj));
// //     setItemCount(0);
// //   };

// //   return (
// //     <>
// //       {/* Menu Categories */}
// //       <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] hidden-scrollbar">
// //         {categories?.map((category) => {
// //           console.log('Rendering Category:', {
// //             id: category._id,
// //             name: category.categoryName,
// //           }); // Log each category being rendered
// //           return (
// //             <div
// //               key={category._id}
// //               className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer transition-transform hover:scale-104"
// //               style={{ background: '#b73e3e' }} // Add dynamic background colors if needed
// //               onClick={() => {
// //                 setSelectedCategory(category);
// //                 console.log('Selected Category:', {
// //                   id: category._id,
// //                   name: category.categoryName,
// //                 }); // Log the selected category
// //                 setItemId(0);
// //                 setItemCount(0);
// //               }}
// //             >
// //               <div className="flex items-center justify-between w-full">
// //                 <h1 className="text-[#f5f5f5] text-lg font-semibold">
// //                   {category.categoryName}
// //                 </h1>
// //                 {selectedCategory?._id === category._id && (
// //                   <GrRadialSelected className="text-white size={20}" />
// //                 )}
// //               </div>
// //               <p className="text-[#ababab] text-sm font-semibold">
// //                 {dishes.length} Items
// //               </p>
// //             </div>
// //           );
// //         })}
// //       </div>
// //       <hr className="border-[#2a2a2a] border-t-2 mt-4" />

// //       {/* Dishes for Selected Category */}
// //       <div>
// //         <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
// //           {dishes.map((item) => {
// //             console.log('Rendering Dish:', {
// //               id: item._id,
// //               name: item.dishName,
// //               price: item.dishPrice,
// //             }); // Log each dish being rendered
// //             return (
// //               <div
// //                 key={item._id}
// //                 className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer transition-transform hover:scale-104 hover:bg-[#2a2a2a] bg-[#1a1a1a]"
// //               >
// //                 <div className="flex items-start justify-between w-full">
// //                   <h1 className="text-[#f5f5f5] text-lg font-semibold">
// //                     {item.dishName}
// //                   </h1>
// //                   <button
// //                     onClick={() => handleAddToCart(item)}
// //                     className="text-[#02ca3a] cursor-pointer"
// //                   >
// //                     <GiShoppingCart size={30} />
// //                   </button>
// //                 </div>

// //                 <div className="flex items-center justify-between w-full">
// //                   <p className="text-[#f5f5f5] text-xl font-bold">
// //                     Rs{item.dishPrice}
// //                   </p>
// //                   <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-20">
// //                     <button
// //                       onClick={() => decrement(item._id)}
// //                       className="text-yellow-500 text-2xl cursor-pointer"
// //                     >
// //                       &minus;
// //                     </button>
// //                     <span className="text-white">
// //                       {item._id === itemId ? itemCount : '0'}
// //                     </span>
// //                     <button
// //                       onClick={() => increment(item._id)}
// //                       className="text-yellow-500 text-2xl cursor-pointer"
// //                     >
// //                       &#43;
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default MenuContainer;


// import React, { useState, useEffect } from 'react';
// import { GrRadialSelected } from 'react-icons/gr';
// import { GiShoppingCart } from 'react-icons/gi';
// import { useDispatch } from 'react-redux';
// import { addItems } from '../../redux/slice/cartSlice';
// import { v4 as uuidv4 } from 'uuid';
// import { useQuery } from '@tanstack/react-query';
// import { getCategories, getDishes } from '../../https'; // Ensure this is imported
// import { enqueueSnackbar } from 'notistack';

// const MenuContainer = () => {
//   const dispatch = useDispatch();

//   // State for selected category and dishes
//   const [selectedCategory, setSelectedCategory] = useState();
//   // const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const [dishes, setDishes] = useState([]);
//   const [itemCount, setItemCount] = useState(0);
//   const [itemId, setItemId] = useState();

//   // Fetch categories
//   const { data: categories, isError: isCategoriesError, isLoading: isCategoriesLoading } = useQuery({
//     queryKey: ['categories'],
//     queryFn: async () => {
//       const response = await getCategories();
//       console.log('Categories Response:', response); // Log the full response
//       return response.data.data; // Access the nested data
//     },
//     onSuccess: (data) => {
//       // Set the first category as the default selected category
//       if (data && data.length > 0) {
//         setSelectedCategory(data[0]);
//       }
//     },
//   });
  
//   // Fetch dishes for the selected category
//   useEffect(() => {
//     if (selectedCategory) {
//       const fetchDishes = async () => {
//         try {
//           const response = await getDishes(selectedCategory._id); // Pass categoryId
//           console.log('Dishes Response:', response); // Log the response
//           setDishes(response.data.data); // Access the nested data
//         } catch (error) {
//           console.error('Error fetching dishes:', error);
//           enqueueSnackbar('Failed to fetch dishes!', { variant: 'error' });
//         }
//       };
//       fetchDishes();
//     }
//   }, [selectedCategory]);

//   // Handle errors for categories fetch
//   if (isCategoriesError) {
//     enqueueSnackbar('Failed to fetch categories!', { variant: 'error' });
//   }

//   // Show loading state while fetching categories
//   if (isCategoriesLoading) {
//     return <div>Loading categories...</div>;
//   }

//   // Increment item count
//   const increment = (id) => {
//     setItemId(id);
//     if (itemCount >= 100) return;
//     setItemCount((prev) => prev + 1);
//   };

//   // Decrement item count
//   const decrement = (id) => {
//     setItemId(id);
//     if (itemCount <= 0) return;
//     setItemCount((prev) => prev - 1);
//   };

//   // Add item to cart
//   const handleAddToCart = (item) => {
//     if (itemCount === 0) return;
//     const { dishName, dishPrice } = item;
//     const newObj = {
//       id: uuidv4(),
//       name: dishName,
//       pricePerQuantity: dishPrice,
//       quantity: itemCount,
//       price: dishPrice * itemCount,
//     };
//     dispatch(addItems(newObj));
//     setItemCount(0);
//   };

//   return (
//     <>
//       {/* Menu Categories */}
//       <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] hidden-scrollbar">
//         {categories?.map((category) => {
//           console.log('Rendering Category:', {
//             id: category._id,
//             name: category.categoryName,
//           }); // Log each category being rendered
//           return (
//             <div
//               key={category._id}
//               className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer transition-transform hover:scale-104"
//               style={{ background: '#b73e3e' }} // Add dynamic background colors if needed
//               onClick={() => {
//                 setSelectedCategory(category);
//                 console.log('Selected Category:', {
//                   id: category._id,
//                   name: category.categoryName,
//                 }); // Log the selected category
//                 setItemId(0);
//                 setItemCount(0);
//               }}
//             >
//               <div className="flex items-center justify-between w-full">
//                 <h1 className="text-[#f5f5f5] text-lg font-semibold">
//                   {category.categoryName}
//                 </h1>
//                 {selectedCategory?._id === category._id && (
//                   <GrRadialSelected className="text-white size={20}" />
//                 )}
//               </div>
//               {/* Display the correct item count for each category */}
//               <p className="text-[#ababab] text-sm font-semibold">
//                 {selectedCategory?._id === category._id ? dishes.length : '0'} Items
//               </p>
//             </div>
//           );
//         })}
//       </div>
//       <hr className="border-[#2a2a2a] border-t-2 mt-4" />

//       {/* Dishes for Selected Category */}
//       <div>
//         <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
//           {dishes.map((item) => {
//             console.log('Rendering Dish:', {
//               id: item._id,
//               name: item.dishName,
//               price: item.dishPrice,
//             }); // Log each dish being rendered
//             return (
//               <div
//                 key={item._id}
//                 className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer transition-transform hover:scale-104 hover:bg-[#2a2a2a] bg-[#1a1a1a]"
//               >
//                 <div className="flex items-start justify-between w-full">
//                   <h1 className="text-[#f5f5f5] text-lg font-semibold">
//                     {item.dishName}
//                   </h1>
//                   <button
//                     onClick={() => handleAddToCart(item)}
//                     className="text-[#02ca3a] cursor-pointer"
//                   >
//                     <GiShoppingCart size={30} />
//                   </button>
//                 </div>

//                 <div className="flex items-center justify-between w-full">
//                   <p className="text-[#f5f5f5] text-xl font-bold">
//                     Rs{item.dishPrice}
//                   </p>
//                   <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-20">
//                     <button
//                       onClick={() => decrement(item._id)}
//                       className="text-yellow-500 text-2xl cursor-pointer"
//                     >
//                       &minus;
//                     </button>
//                     <span className="text-white">
//                       {item._id === itemId ? itemCount : '0'}
//                     </span>
//                     <button
//                       onClick={() => increment(item._id)}
//                       className="text-yellow-500 text-2xl cursor-pointer"
//                     >
//                       &#43;
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MenuContainer;


import React, { useState, useEffect } from 'react';
import { GrRadialSelected } from 'react-icons/gr';
import { GiShoppingCart } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { addItems } from '../../redux/slice/cartSlice';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@tanstack/react-query';
import { getCategories, getDishes } from '../../https'; // Ensure this is imported
import { enqueueSnackbar } from 'notistack';

const MenuContainer = () => {
  const dispatch = useDispatch();

  // State for selected category and dishes
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState();

  // Fetch categories
  const { data: categories, isError: isCategoriesError, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await getCategories();
      console.log('Categories Response:', response); // Log the full response
      return response.data.data; // Access the nested data
    },
    onSuccess: (data) => {
      // Set the first category as the default selected category
      if (data && data.length > 0) {
        setSelectedCategory(data[0]); // Set the default category
      }
    },
  });

  // Fetch dishes for the selected category
  useEffect(() => {
    if (selectedCategory && selectedCategory._id) {
      const fetchDishes = async () => {
        try {
          const response = await getDishes(selectedCategory._id); // Pass categoryId
          console.log('Dishes Response:', response); // Log the response
          setDishes(response.data.data); // Access the nested data
        } catch (error) {
          console.error('Error fetching dishes:', error);
          enqueueSnackbar('Failed to fetch dishes!', { variant: 'error' });
        }
      };
      fetchDishes();
    }
  }, [selectedCategory]);

  // Handle errors for categories fetch
  if (isCategoriesError) {
    enqueueSnackbar('Failed to fetch categories!', { variant: 'error' });
  }

  // Show loading state while fetching categories
  if (isCategoriesLoading) {
    return <div>Loading categories...</div>;
  }

  // Increment item count
  const increment = (id) => {
    setItemId(id);
    if (itemCount >= 100) return;
    setItemCount((prev) => prev + 1);
  };

  // Decrement item count
  const decrement = (id) => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };

  // Add item to cart
  const handleAddToCart = (item) => {
    if (itemCount === 0) return;
    const { dishName, dishPrice } = item;
    const newObj = {
      id: uuidv4(),
      name: dishName,
      pricePerQuantity: dishPrice,
      quantity: itemCount,
      price: dishPrice ,
    };
    dispatch(addItems(newObj));
    setItemCount(0);
  };

  return (
    <>
      {/* Menu Categories */}
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] hidden-scrollbar">
        {categories?.map((category) => {
          console.log('Rendering Category:', {
            id: category._id,
            name: category.categoryName,
          }); // Log each category being rendered
          return (
            <div
              key={category._id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer transition-transform hover:scale-104"
              style={{ background: '#b73e3e' }} // Add dynamic background colors if needed
              onClick={() => {
                setSelectedCategory(category);
                console.log('Selected Category:', {
                  id: category._id,
                  name: category.categoryName,
                }); // Log the selected category
                setItemId(0);
                setItemCount(0);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {category.categoryName}
                </h1>
                {selectedCategory?._id === category._id && (
                  <GrRadialSelected className="text-white size={20}" />
                )}
              </div>
              {/* Display the correct item count for each category */}
              <p className="text-[#ababab] text-sm font-semibold">
                {selectedCategory?._id === category._id ? dishes.length : '0'} Items
              </p>
            </div>
          );
        })}
      </div>
      <hr className="border-[#2a2a2a] border-t-2 mt-4" />

      {/* Dishes for Selected Category */}
      <div>
        <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
          {dishes.map((item) => {
            console.log('Rendering Dish:', {
              id: item._id,
              name: item.dishName,
              price: item.dishPrice,
            }); // Log each dish being rendered
            return (
              <div
                key={item._id}
                className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer transition-transform hover:scale-104 hover:bg-[#2a2a2a] bg-[#1a1a1a]"
              >
                <div className="flex items-start justify-between w-full">
                  <h1 className="text-[#f5f5f5] text-lg font-semibold">
                    {item.dishName}
                  </h1>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="text-[#02ca3a] cursor-pointer"
                  >
                    <GiShoppingCart size={30} />
                  </button>
                </div>

                <div className="flex items-center justify-between w-full">
                  <p className="text-[#f5f5f5] text-xl font-bold">
                    Rs{item.dishPrice}
                  </p>
                  <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-1">
                    <button
                      onClick={() => decrement(item._id)}
                      className="text-yellow-500 text-2xl cursor-pointer"
                    >
                      &minus;
                    </button>
                    <span className="text-white">
                      {item._id === itemId ? itemCount : '0'}
                    </span>
                    <button
                      onClick={() => increment(item._id)}
                      className="text-yellow-500 text-2xl cursor-pointer"
                    >
                      &#43;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuContainer;