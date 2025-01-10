import { ways } from "../data";
import WayToTeach from "./WayToTeach";

const TeachingSection = () => {
  return (
    <section>
      <h1>Наш подход к обучению</h1>
      <br />
      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
};

export default TeachingSection;