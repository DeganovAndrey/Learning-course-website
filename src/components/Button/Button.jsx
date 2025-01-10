import classes from "./Button.module.css";

const Button = ({ children, isActive, ...props }) => {
  return (
    <button
      {...props}
      className={
        isActive ? `${classes.active} ${classes.button}` : classes.button
      }
    >
      {children}
    </button>
  );
};

export default Button;
