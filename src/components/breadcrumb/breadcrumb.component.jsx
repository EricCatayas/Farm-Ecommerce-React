
// TODO
export const BreadCrumb = ({items}) => {
  return (
    <nav aria-label="breadcrumb" >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item active" aria-current="page">
            {item}
          </li>
        ))}
      </ol>
    </nav>
  );
};