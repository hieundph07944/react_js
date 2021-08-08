import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { getCate } from "../../../api/categoryAPI";

const EditFormCate = (props) => {
  const [category, setCategory] = useState({});
  const { id } = useParams();
  const history = useHistory();

  // call API
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getCate(id);
        setCategory(data);
      } catch (error) {}
    };
    getCategory();
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

    props.onEditCate(fakeValue);
    history.push("/category");
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Cập nhật danh mục</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên danh mục</label>
          <input
            type="text"
            className="form-control"
            // name="name"
            defaultValue={category.name}
            {...register("name", { required: true })}
            // onChange={onHandleChange}
          />
          {errors.name && (
            <span className="d-block text-danger mt-3">
              This field is required
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Lưu danh mục
        </button>
      </form>
    </div>
  );
};
export default EditFormCate;
