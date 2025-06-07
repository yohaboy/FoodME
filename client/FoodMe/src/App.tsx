import "./App.css";
import RecommendationForm from "./components/RecommendForm";
import HomePage from "./pages/HomePage";
import Results from "./pages/Results";

function App() {
  return (
    <>
      <div>
        <HomePage />
        <RecommendationForm />
      </div>
    </>
  );
}

export default App;
