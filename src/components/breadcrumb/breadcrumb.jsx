
// TODO
export const DefaultBreadCrumb = ({page, subpage}) => {
  return (
    <div className="panel-heading">
      <div className="row justify-content-between">
        <div className="col">
          <ul class="breadcrumb">
            <li>
              <a href="#">Farm Ecommerce</a>
            </li>
            <li>
              <a href="#">{page}</a>
            </li>
            <li>
              <a href="#">{subpage}</a>
            </li>
            <li>Italy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};