import axios from "axios";

const token =  localStorage.getItem("token");

export const UploadFiles = async (body) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_BASEURL}/admin/upload/files`, body, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const LoginUser = async (body) => {
    try {
    const data = await axios.post(`${process.env.REACT_APP_BASEURL}/login`, body,  {
        headers: { 
            "Content-Type": "application/json" ,
        },
      })
     return data; 
    } catch (error) {
        console.log(error)  
    }
};

export const RegisterUser = async (body) => {
    try {
      const data = await axios.post(`${process.env.REACT_APP_BASEURL}/register`, body,
          {
            headers: { 
                "Content-Type": "application/json" ,
            },
          })
        console.log("Register Data",data);
         return data; 
        } catch (error) {
            console.log(error)  
        }
  };

export const LogoutUser = async () => {
    try {
        const data = await axios.post(`${process.env.REACT_APP_BASEURL}/logout`,
          {
            Headers: {
                authorization: token
            }
          })          
    return data; 
        } catch (error) {
            console.log(error)  
        }
};

export const UpdateUser = async (body) => {
    try {
        const data = await axios.post(`${process.env.REACT_APP_BASEURL}/v1/user`, body,
          {
            Headers: {
                authorization: token
            }
          })
    return data; 
        } catch (error) {
            console.log(error)  
        }
};

export const UserForgotPassword = async (body) => {
    try {
        const data = await axios.post(`${process.env.REACT_APP_BASEURL}/password/forgot`, body)
    return data; 
        } catch (error) {
            console.log(error)  
        }
};

export const UserResetPassword = async (body) => {
    try {
      const data = await axios.post(`${process.env.REACT_APP_BASEURL}/password/reset`, body,
          {
            headers: { 
                "Content-Type": "application/json" ,
            },
          })
        console.log("Register Data",data);
         return data; 
        } catch (error) {
            console.log(error)  
        }
  };

  export const GetOrders = async () => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/orders`,
            {
              headers: { 
                  "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${token}`
              },
            })
          console.log("Get Orders",data);
           return data; 
          } catch (error) {
              console.log(error)  
          }
  }

  export const UpdateOrderStatus = async (body) => {
    try {
        const data = await axios.post(`${process.env.REACT_APP_BASEURL}/admin/order`, body,
            {
              headers: { 
                  "Content-Type": "application/json" ,
              },
            })
          console.log("Update Order Status",data);
           return data; 
          } catch (error) {
              console.log(error)  
          }
  }

  export const DeleteOrders = async (id) => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/orders/${id}/delete`,
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
          })
        console.log("Edit Product",data);
         return data; 
        } catch (error) {
            console.log(error)  
        }
  }

  export const CreateProducts = async (body) => {
    try {
        const data = await axios.post(`${process.env.REACT_APP_BASEURL}/admin/product`, body,
            {
              headers: { 
                  "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${token}`
              },
            })
          console.log("Create Products",data);
           return data; 
          } catch (error) {
              console.log(error)  
          }
  }

  export const GetProducts = async () => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/products`, 
            {
              headers: { 
                  "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${token}`
              },
            })
          console.log("Get Products",data);
           return data; 
          } catch (error) {
              console.log(error)  
          }
  }


export const getProductId = (id) => {
  try {
      const req = axios.get(`${process.env.REACT_APP_BASEURL}/admin/product?sku=${id}`,  {
        headers: { 
            "Content-Type": "application/json" ,
            "Authorization": `Bearer ${token}`
        },
      });

      console.log("Details", req);
      return req;
  } catch (error) {
      console.log(error)  
  }
}

export const EditProduct = async (id, body) => {
    try {
        const data = await axios.post(`${process.env.REACT_APP_BASEURL}/admin/product/${id}/edit`, body,
            {
              headers: { 
                  "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${token}`
              },
            })
          console.log("Edit Product",data);
           return data; 
          } catch (error) {
              console.log(error)  
          }
  }

  export const DeleteProduct = async (id) => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/product/${id}/delete`,
            {
              headers: { 
                  "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${token}`
              },
            })
          console.log("Edit Product",data);
           return data; 
          } catch (error) {
              console.log(error)  
          }
  }


  export const GetCustomers = async () => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/customers`, 
            {
              headers: { 
                  "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${token}`
              },
            })
          console.log("Get Customers",data);

           return data; 
          } catch (error) {
              console.log(error)  
          }
  }

  export const CreateCustomers = async (body) => {
    try {
        const data = await axios.post(`${process.env.REACT_APP_BASEURL}/admin/customers`, body,
            {
              headers: { 
                  "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${token}`
              },
            })
          console.log("Create Products",data);
           return data; 
          } catch (error) {
              console.log(error)  
          }
  }
  export const DeleteCustomers = async (id) => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/customers/${id}/delete`,
            {
              headers: { 
                  "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${token}`
              },
            })
          console.log("Delete Customer", data);
           return data; 
          } catch (error) {
              console.log(error)  
          }
  }
  export const GetCategories = async () => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/categories`, 
            {
              headers: { 
                  "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${token}`
              },
            })
          console.log("Get categories",data);
           return data; 
          } catch (error) {
              console.log(error)  
          }
  }
  export const GetCategoryById = async (id) => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/categories/fetch/${id}`, 
            {
              headers: { 
                  "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${token}`
              },
            })
          console.log("Get categories by Id",data);
           return data; 
          } catch (error) {
              console.log(error)  
          }
  }
  export const PostCategories = async (body) => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/categories`, body,
            {
              headers: { 
                  "Content-Type": "application/json" ,
                  "Authorization": `Bearer ${token}`
              },
            })
          console.log("Post categories",data);
           return data; 
          } catch (error) {
              console.log(error)  
          }
  }
export const EditCategories = async (id, body) => {
  try {
      const data = await axios.post(`${process.env.REACT_APP_BASEURL}/admin/categories/${id}/edit`, body,
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
          })
        console.log("Edit Categories",data);
         return data; 
        } catch (error) {
            console.log(error)  
        }
}
export const DeleteCategories = async (id) => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/categories/${id}/delete`,
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
          });
        console.log("Delete Categories", data);
         return data; 
        } catch (error) {
            console.log(error);
        }
}
export const GetBrands = async () => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/marks`, 
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
          })
        console.log("Get Brands",data);
         return data; 
        } catch (error) {
            console.log(error)  
        }
}
export const DeleteBrands = async (id) => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin//marks/${id}/delete`,
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
          });
        console.log("Delete Brands", data);
         return data; 
        } catch (error) {
            console.log(error);
        }
}
export const PostBrand = async (body) => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/admin/marks`, body,
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
          })
        console.log("Post Brands",data);
         return data; 
        } catch (error) {
            console.log(error)  
        }
}