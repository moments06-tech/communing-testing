import { useContext } from "react";
import PinModel from "./components/PinModel";
import Home from "./pages/Home";
import { Context } from "./context/Context";
import Loading from "./components/Loading";

function App() {
  const { isPin, loading, isHome } = useContext(Context);
  if (!loading) return <Loading />;

  if (isPin) return <PinModel />;
  if (isHome) return <Home />;
}

export default App;
