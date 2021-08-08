import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddFormProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const history = useHistory();

  const {category} = props;
  const onSubmit = (data) => {
    const product = {
      id: Math.random().toString(5).substring(2),
      ...data
    };
    props.onAdd(product);
    history.push("/product");
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Thêm sản phẩm</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            // name="name"
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
            defaultValue="0"
          >
            <option value="0">Hết hàng</option>
            <option value="1">Còn hàng</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Danh muc</label>
          <select className="form-control" {...register("cate_id")}>
            {props.category.map((cate) => (
              <option value={cate.id}>{cate.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};
export default AddFormProduct;
