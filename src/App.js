import Header from "./components/Header";
import LoremIpsumGenerator from "./components/LoremIpsumGenerator";

const App = () => {
  return (
    <div className="min-h-screen flex items-center flex-col gap-20 bg-slate-50">
      <Header />
      <LoremIpsumGenerator />
    </div>
  )
};

export default App;