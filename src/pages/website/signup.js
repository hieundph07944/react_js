import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signup } from "../../api/authAPI";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (user) => {
    try {
      const response = await signup(user);
      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <h2>Dang Ky</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && (
        <div className="alert alert-success">
          Ban da dang ky thanh cong!. Click <Link to="/signin">vao day</Link> de
          dang nhap
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Ten
        </label>
        <input type="text" className="form-control" {...register("name")} />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="d-block mt-2 text-danger">
            Email khong duoc de trong
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="d-block mt-2 text-danger">
            Password khong duoc de trong
          </span>
        )}
      </div>
      <button className="btn btn-primary">Dang Ky</button>
    </form>
  );
};

export default Signup;