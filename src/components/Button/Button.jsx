import "./Button.css";

const Button = ({ children, onClick, isActive }) => {
  return (
    <button className={isActive ? "active button" : "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
