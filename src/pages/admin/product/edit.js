import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../../api/productAPI";

const EditFormProduct = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();

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

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const fakeValue = {
      id: id,
      ...data
    };

    props.onEdit(fakeValue);
    history.push("/product");
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Cập nhật sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            // name="name"
            defaultValue={product.name}
            {...register("name", { required: true })}
            // onChange={onHandleChange}
          />
          {errors.name && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            defaultValue={product.price}
            type="number"
            className="form-control"
            // name="price"
            // onChange={onHandleChange}
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Tình trạng</label>
          <select
            className="form-control"
            // name="status"
            // onChange={onHandleChange}
            {...register("status")}
            defaultValue={product.status}
          >
            <option value="false">Hết hàng</option>
            <option value="true">Còn hàng</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Danh muc</label>
          <select className="form-control" {...register("cate_id")}>
            {props.category.map((cate) => {
              if (cate.id == product.cate_id) {
                return (
                  <option selected value={cate.id}>{cate.name}</option>
                )
              }
              return <option value={cate.id}>{cate.name}</option>
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};
export default EditFormProduct;
