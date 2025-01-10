import Button from "./Button/Button";

import { differences } from "../data";
import { useState } from "react";

const DifferencesSection = () => {
  const [contentType, setContentType] = useState(null);

  const handleClick = (type) => {
    setContentType(type);
  };
  return (
    <section>
      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Концентрация
      </Button>

      {!contentType && <p>Press to button</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
};

export default DifferencesSection;
