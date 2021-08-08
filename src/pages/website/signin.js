import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { signin, signup } from "../../api/authAPI";
import { authenticate, isAuthenticated } from "../../auth";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (user) => {
    try {
      const { data } = await signin(user);
      authenticate(data);
      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.response.data);
    }
  };

  const redirectUser = () => {
    if (success) {
      const id = isAuthenticated().user.id;
      if (id == 1) {
        return <Redirect to="/admin" />;
      } else {
        return <Redirect to="/product" />;
      }
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <h2>Dang Nhap</h2>
      {error && <div className="alert alert-danger">{error}</div>}
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
      <button className="btn btn-primary">Dang Nhap</button>
    </form>
  );
};

export default Signin;