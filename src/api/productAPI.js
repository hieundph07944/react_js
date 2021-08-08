import axiosClient from "./axiosClient";

export const getAll = () => {
  const url = `/product`;
  return axiosClient.get(url);
};
export const edit = (item) => {
  const url = `/product/${item.id}`;
  return axiosClient.put(url, item);
};
export const get = (id) => {
  const url = `/product/${id}`;
  return axiosClient.get(url);
};
export const remove = (id) => {
  const url = `/product/${id}`;
  return axiosClient.delete(url);
};
export const add = (product) => {
  const url = `/product  `;
  return axiosClient.post(url, product);
};


