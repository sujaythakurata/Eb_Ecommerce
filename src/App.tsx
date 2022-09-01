import { Suspense } from "react";
import Fallback from "./pages/fallback/FallBack";
import { Home } from "./pages/Home";


function App() {
  return (
    <Suspense fallback={<Fallback/>}>
      <Home/>
    </Suspense>
  );
}

export default App;
