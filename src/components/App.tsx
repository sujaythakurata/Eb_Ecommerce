import { Suspense } from "react";
import Fallback from "../pages/fallback/FallBack";
import { Home } from "./Home";


function App() {
  return (
    <Suspense fallback={<Fallback/>}>
      <Home/>
    </Suspense>
  );
}

export default App;
