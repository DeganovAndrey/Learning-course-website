import { useState } from "react";
import Header from "./components/Header";
import { ways, differences } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";

function App() {
  const [contentType, setContentType] = useState(null);

  const handleClick = (type) => {
    setContentType(type);
  };

  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Наш подход к обучению</h1>
          <br />
          <ul>
            {ways.map((way) => (
              <WayToTeach key={way.title} {...way} />
            ))}
          </ul>
        </section>
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

          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Press to button</p>
          )} */}

          {!contentType && <p>Press to button</p>}
          {contentType && <p>{differences[contentType]}</p>}
        </section>
      </main>
    </div>
  );
}

export default App;
