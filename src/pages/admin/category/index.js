import { Link } from "react-router-dom";

export default function ListCate(props) {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý danh mục</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            to="/category/add"
            type="button"
            className="btn btn-sm btn-outline-primary"
          >
            Thêm danh mục
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên danh mục</th>
              <th scope="col">Ảnh</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.category.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => props.onRemoveCate(category.id)}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-primary ms-1"
                    to={`/category/${category.id}/edit`}
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
