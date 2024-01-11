
// TODO
export const BreadCrumb = ({items}) => {
  return (
    <div className="panel-heading">
      <div className="row justify-content-between">
        <div className="col">
          <ol className="breadcrumb">
            <li>
              <a className="breadcrumb-item" href="/">
                Farm Ecommerce
              </a>
            </li>
            {items.map((item, index) => (
              <li key={index}>
                <a className="breadcrumb-item active" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};