import { useEffect, useState } from "react";
import { getAll, remove, add, edit } from "./api/productAPI";
import { getAllCate, removeCate, addCate, editCate } from "./api/categoryAPI";
import "./styles.css";
import Routes from "./routes";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // call api
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProducts();
  }, []);
  // Xóa sản phẩm
  const onRemoveHandler = async (id) => {
    try {
      await remove(id);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  // Thêm sản phẩm
  const onAddHandler = async (item) => {
    try {
      const { data } = await add(item); 
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  }; 
  const onEditHandler = async (item) => {
    try {
      const { data } = await edit(item);
      const newProducts = products.map((product) =>
        product.id === item.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {}
  };


  // Danh mục
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();
        setCategory(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getCategory();
  }, []);
  // Xóa danh mục
  const onRemoveCate = async (id) => {
    try {
      await removeCate(id);
      const newCategory = category.filter((item) => item.id !== id);
      setCategory(newCategory);
    } catch (error) {
      console.log(error);
    }
  };
  // Thêm danh mục
  const onAddCate = async (item) => {
    try {
      const { data } = await addCate(item); 
      setCategory([...category, data]);
    } catch (error) {
      console.log(error);
    }
  }; 
  const onEditCate = async (item) => {
    try {
      const { data } = await editCate(item);
      const newCategory = category.map((category) =>
        category.id === item.id ? data : category
      );
      setCategory(newCategory);
    } catch (error) {}
  };
  // ví dụ: promise
  return (
    <Routes
      category={category}
      onRemoveCate={onRemoveCate}
      onAddCate={onAddCate}
      onEditCate={onEditCate}

      products={products}
      onRemove={onRemoveHandler}
      onAdd={onAddHandler}
      onEdit={onEditHandler}

      
    />
  );
}
