const BASE_URL = 'http://10.58.3.253:8000';
export const API = {
  login: `${BASE_URL}/users/login`,
  register: `${BASE_URL}/users/signup`,
  product: `${BASE_URL}/products`,
  productlist: `${BASE_URL}/products/productlist`,
  reviews: [
    `${BASE_URL}/reviews`,
    `${BASE_URL}/reviews/post`,
    `${BASE_URL}/reviews/delete`,
    `${BASE_URL}/reviews/update`,
  ],
};
