import { Link } from "react-router-dom";

export default function List(props) {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            to="/product/add"
            type="button"
            className="btn btn-sm btn-outline-primary"
          >
            Thêm sản phẩm
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Trạng thái</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
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
                  <button
                    className="btn btn-danger"
                    onClick={() => props.onRemove(product.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-primary ms-1"
                    to={`/product/${product.id}/edit`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
