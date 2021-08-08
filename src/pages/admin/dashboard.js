import { Link } from "react-router-dom";
export default function DashBoard(props) {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Danh mục</th>
              <th scope="col">Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>
                {props.category.map((cate) => {
                    if (cate.id == product.cate_id) return cate.name;
                  })}
                </td>
                <td>
                  <Link
                    className="btn btn-primary ms-1"
                    to={`/product/${product.id}/detail`}
                  >
                    Detail
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
