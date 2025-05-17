import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="h-screen w-screen noise-bg p-4">
      <Header />
      <Card content="lorem ipsum" />
    </div>
  );
};

export default App;
