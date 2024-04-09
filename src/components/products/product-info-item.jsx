export const LabelContentItem = ({ label, content }) => {
  return (
    <div className="col">
      <div className="row">{label}</div>
      <div className="row">{content}</div>
    </div>
  );
};

export const SingleRowContent = ({ content }) => {
  return (
    <div className="row">
      <div className="col">{content}</div>
    </div>
  );
};

