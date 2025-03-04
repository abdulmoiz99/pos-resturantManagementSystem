import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

//API End point

export const login = (data) => api.post("/api/user/login", data);
export const register = (data) => api.post("/api/user/register", data);
export const getUserData = (data) => api.get("/api/user");
export const logout = (data) => api.post("/api/user/logout");

// Table Endpoint 
export const addTable = (data) => api.post("/api/table/", data);
export const getTable = (data) => api.get("/api/table");
// export const updateTable = (tableId, ...tableData) => api.put(`/api/table/${tableId}`, tableData);
export const updateTable = (tableData) => {
    const { tableId, ...rest } = tableData; // Destructure tableId and other data
    return api.put(`/api/table/${tableId}`, rest); // Use tableId in URL and rest as body
  };


// Order endpoint 
export const addOrder = (data) => api.post ("/api/order", data);
export const getOrders = () => api.get("/api/order");
export const updateOrder = ({orderId, orderStatus}) => api.put(`/api/order/${orderId}`,{orderStatus});


// export const updateOrderStatus = ({ orderId, orderStatus }) =>
//     api.put(`/orders/${orderId}`, { orderStatus }); // Use /orders/:id to match the backend route

// export const updateOrderStatus = async ({ orderId, orderStatus }) => {
//     console.log("Updating order status:", orderId, orderStatus); // Debugging
//     const response = await axios.put(`/api/orders/${orderId}`, { status: orderStatus });
//     return response.data;
//   };


// Category endpoint
export const addCategory = (data) => api.post("/api/category", data);
export const getCategories = () => api.get("/api/category")

//Dish endpoint
export const addDish = (data) => api.post("/api/dish", data);
// export const getDishes = () => api.get("api/dish")
export const getDishes = (categoryId) => api.get(`api/dish/category/${categoryId}`);
