import { useState } from "react";
import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";

function App() {
  const [tab, setTab] = useState("feedback");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}
      </main>
    </>
  );
}

export default App;
