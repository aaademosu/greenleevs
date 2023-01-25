import axios from 'axios';
/* eslint-disable */

const token =  localStorage.getItem("token");
const cancelToken = axios.CancelToken.source();


export const LoginUser = async (body) => {
    try {
      const data = await axios.post(`${process.env.REACT_APP_BASEURL}/login`, body, {
        headers: { 
          'Content-Type': 'application/json' ,
        },
        cancelToken: cancelToken.token,
      });
      return data; 
    } catch (error) {
      if (axios.isCancel(err)) {
        console.log("Request canceled!");
      } else {
        console.log(error);
      }
    }
  
    return () => {
      cancelToken.cancel();
    };
  }

export const RegisterUser = async (body) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_BASEURL}/register`, body,
      {
        headers: { 
          'Content-Type': 'application/json' ,
        },
        cancelToken: cancelToken.token,
      });
    console.log('Register Data',data);
    return data; 
  } catch (error) {
    if (axios.isCancel(err)) {
      console.log("Request canceled!");
    } else {
      console.log(error);
    }
  }

  return () => {
    cancelToken.cancel();
  };
};

export const LogoutUser = async () => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_BASEURL}/logout`,
      {
        headers: { 
            "Content-Type": "application/json" ,
            "Authorization": `Bearer ${token}`
        },
        cancelToken: cancelToken.token,
      });
    return data; 
  } catch (error) {
    if (axios.isCancel(err)) {
      console.log("Request canceled!");
    } else {
      console.log(error);
    }
  }

  return () => {
    cancelToken.cancel();
  };
};

export const UpdateUser = async (body) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_BASEURL}/user`, body,
    {
      headers: { 
          "Content-Type": "application/json" ,
          "Authorization": `Bearer ${token}`
      },
      cancelToken: cancelToken.token,
    });
    return data; 
  } catch (error) {
    if (axios.isCancel(err)) {
      console.log("Request canceled!");
    } else {
      console.log(error);
    } 
  }
  return () => {
    cancelToken.cancel();
  };
};

export const UserForgotPassword = async (body) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_BASEURL}/password/forgot`,
    {
      cancelToken: cancelToken.token
    }, body);
    return data; 
  } catch (error) {
    if (axios.isCancel(err)) {
      console.log("Request canceled!");
    } else {
      console.log(error);
    }
  }
  return () => {
    cancelToken.cancel();
  };
};

export const UserResetPassword = async (body) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_BASEURL}/password/reset`, body,
      {
        headers: { 
          'Content-Type': 'application/json' ,
        },
        cancelToken: cancelToken.token,
      });
    console.log('Register Data',data);
    return data; 
  } catch (error) {
    if (axios.isCancel(err)) {
      console.log("Request canceled!");
    } else {
      console.log(error);
    }
  }
  return () => {
    cancelToken.cancel();
  };
};

export const GetProducts =  async () => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/products`,
       
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        // console.log("Get Products",data);
         return data; 
        } catch (error) {
          if (axios.isCancel(err)) {
            console.log("Request canceled!");
          } else {
            console.log(error);
          }
        }

    return () => {
      cancelToken.cancel();
    };
}
export const GetProductId = (id) => {
  try {
      const req = axios.get(`${process.env.REACT_APP_BASEURL}/products/${id}`,  {
        headers: { 
            "Content-Type": "application/json" ,
            "Authorization": `Bearer ${token}`
        },
      });

      console.log("Products By Id", req);
      return req;
  } catch (error) {
      console.log(error)  
  }
}


export const GetCategories = async () => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/categories`, 
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        console.log("Get categories",data);
         return data; 
        } catch (error) {
          if (axios.isCancel(err)) {
            console.log("Request canceled!");
          } else {
            console.log(error);
          }
        }
        return () => {
          cancelToken.cancel();
        };
}
export const GetCategoriesById = async (id) => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/categories/${id}`, 
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        console.log("Get Categories By Id",data);
         return data; 
        } catch (error) {
          if (axios.isCancel(err)) {
            console.log("Request canceled!");
          } else {
            console.log(error);
          }
        }
        return () => {
          cancelToken.cancel();
        };
}

export const PostNewsletter = async (body) => {
  try {
    const data = await axios.post(`${process.env.REACT_APP_BASEURL}/subscribe`, body,
      {
        headers: { 
          'Content-Type': 'application/json' ,
        },
        cancelToken: cancelToken.token,
      })
    console.log('News letter',data);
    return data; 
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log("Request canceled!");
    } else {
      console.log(err);
    }
  } 
  return () => {
    cancelToken.cancel();
  };
}

export const GetCart = async (user) => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/${user}/cart`, 
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        console.log("Get cart",data);
         return data; 
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log("Request canceled!");
          } else {
            console.log(err);
          }
        }
        return () => {
          cancelToken.cancel();
        };
}

export const PostCart = async (user, body) => {
  try {
      const data = await axios.post(`${process.env.REACT_APP_BASEURL}/${user}/cart`, 
      body,
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        console.log("Get cart",data);
         return data; 
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log("Request canceled!");
          } else {
            console.log(err);
          }
        }
        return () => {
          cancelToken.cancel();
        };
}


export const GetPopularByCategory = async (slug) => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/categories/${slug}/popular`, 
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        console.log("Get Popular By category",data);
         return data; 
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log("Request canceled!", err);
          } else {
            console.log(err);
          }
        }
        return () => {
          cancelToken.cancel();
        };
}

export const GetPopularProducts = async () => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/popular_products`, 
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        console.log("Get Popular",data);
         return data; 
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("Request canceled!");
          } else {
            console.log(error);
          }
        }
        return () => {
          cancelToken.cancel();
        };
}

export const GetRelatedProducts = async (id) => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/products/${id}/related`, 
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        console.log("Get Related Products",data);
         return data; 
        } catch (error) {
          if (axios.isCancel(err)) {
            console.log("Request canceled!");
          } else {
            console.log(error);
          }
        }
        return () => {
          cancelToken.cancel();
        };
}

export const GetRecentlyViewed = async () => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/recently_viewed`, 
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        console.log("Get Recently Viewed", data);
         return data; 
        } catch (error) {
          if (axios.isCancel(err)) {
            console.log("Request canceled!");
          } else {
            console.log(error);
          }
        }
        return () => {
          cancelToken.cancel();
        };
}

// export const FilterProducts = async (slug, plant, brand, potency, outOfStock) => {
//   try {
//       const data = await axios.get(`${process.env.REACT_APP_BASEURL}/categories/${slug}
//       /?plant_type=${plant}/?potency=${potency}&outofstock=${outOfStock}&brand=${brand}`, 
//           {
//             headers: { 
//                 "Content-Type": "application/json" ,
//                 "Authorization": `Bearer ${token}`
//             },
//             cancelToken: cancelToken.token,
//           })
//         console.log("Filter Products",data);
//          return data; 
//         } catch (error) {
//           if (axios.isCancel(err)) {
//             console.log("Request canceled!");
//           } else {
//             console.log(error);
//           }
//         }
//         return () => {
//           cancelToken.cancel();
//         };
// }

export const GetBrands= async () => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/marks`, 
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        console.log("Get Brands", data);
         return data; 
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log("Request canceled!");
          } else {
            console.log(err);
          }
        }
        return () => {
          cancelToken.cancel();
        };
}
export const GetProductsByBrand = async (id) => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/marks/${id}`, 
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        console.log("Get Products by Brands", data);
         return data; 
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log("Request canceled!");
          } else {
            console.log(err);
          }
        }
        return () => {
          cancelToken.cancel();
        };
}
export const GetSearchParams = async (searchTerm) => {
  try {
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/search?query=${searchTerm}`, 
          {
            headers: { 
                "Content-Type": "application/json" ,
                "Authorization": `Bearer ${token}`
            },
            cancelToken: cancelToken.token,
          })
        console.log("Get Search", data);
         return data; 
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log("Request canceled!");
          } else {
            console.log(err);
          }
        }
        return () => {
          cancelToken.cancel();
        };
}


// export const FilterProducts = async (id, plant, brand, potency, outOfStock) => {
//     let filters = {}
//     if (plant) {
//         filters.plan_type = plant;
//     }
//     if (brand) {
//         filters.brand = brand;
//     }
//     if (potency) {
//         filters.potency = potency;
//     }
//     if (outOfStock) {
//         filters.out_of_stock = outOfStock;
//     }
//     try {
//         const { data } = await axios.get(`${process.env.REACT_APP_BASEURL}/categories/${id}`, {
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${token}`
//             },
//             params: filters
//         });
//         return data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };
const FilterProducts = async (slug, plant, brand, potency, outOfStock, sort) => {
  try {
  let queryParams = "";
      if (plant !== 'all') {
          queryParams += `?plan_type=${plant}`;
      }
  
      if (brand) {
          queryParams += `${queryParams ? "&" : "?"}brand=${brand}`;
      }
  
      if (potency) {
          queryParams += `${queryParams ? "&" : "?"}potency=${potency}`;
      }
  
      if (outOfStock) {
          queryParams += `${queryParams ? "&" : "?"}out_of_stock=${outOfStock}`;
      }
      let order = '';
      if (sort !== 'default') {
        if (sort === 'lowest') order = '| order(price asc)';
        if (sort === 'highest') order = '| order(price desc)';
        if (sort === 'toprated') order = '| order(rating desc)';
      }
      queryParams+=`${queryParams ? "&" : "?"}sort=${sort}`;
  
      const data = await axios.get(`${process.env.REACT_APP_BASEURL}/categories/${slug}/${queryParams}`, {
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          },
          cancelToken: cancelToken.token
      });
      console.log("Filter Products", data);
      return data;
  } catch (error) {
      if (axios.isCancel(error)) {
          console.log("Request canceled!");
      } else {
          console.log(error);
      }
  }
  return () => {
      cancelToken.cancel();
  };
}