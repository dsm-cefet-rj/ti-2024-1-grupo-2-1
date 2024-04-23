import "./style.css";

export const Layout = (props) => {
  return (
    <div className="contaner">
      <div className="contaner-form">
        <div className="wrap-form">{props.children}</div>
      </div>
    </div>
  );
};
