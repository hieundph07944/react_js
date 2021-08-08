import axiosClient from "./axiosClient";

export const getAllCate = () => {
    const url = `/category`;
    return axiosClient.get(url);
  };
  export const editCate = (item) => {
    const url = `/category/${item.id}`;
    return axiosClient.put(url, item);
  };
  export const getCate = (id) => {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  };
  export const removeCate = (id) => {
    const url = `/category/${id}`;
    return axiosClient.delete(url);
  };
  export const addCate = (category) => {
    const url = `/category  `;
    return axiosClient.post(url, category);
  };