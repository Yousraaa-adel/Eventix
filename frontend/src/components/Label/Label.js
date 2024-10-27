import './Label.css';

function Label({ children }) {
  return (
    <>
      <div className="label">
        <div className="wrapper">{children}</div>
      </div>
    </>
  );
}

export default Label;
