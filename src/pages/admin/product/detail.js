import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../../api/productAPI";

export default function DetailProduct(props) {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  // call API
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
      } catch (error) {}
    };
    getProduct();
  }, []);
  return (
    <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Trạng thái</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}đ</td>
                <td>
                {props.category.map((cate) => {
                    if (cate.id == product.cate_id) return cate.name;
                  })}
                </td>

                <td>
                  {product.status ? (
                    <span className="text-primary">Còn hàng</span>
                  ) : (
                    <span className="text-danger">Hết hàng</span>
                  )}
                </td>
                <td>
                  
                </td>
              </tr>

          </tbody>
        </table>
        <Link
            className="btn btn-primary"
            to={`/`}
        >Quay lại</Link>
      </div>
      
  );
}
