import { useState } from "react";
import logo from "/logo-name.svg";

const Header = () => {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);
  return (
    <header>
      <img src={logo} alt={logo} />
      {/* <h3>Result</h3> */}
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
};

export default Header;
