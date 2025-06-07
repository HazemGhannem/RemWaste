import React, { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const SelectSkip = lazy(() => import("./screens/SelectSkip"));

function App() {

  return (
    <Suspense fallback={<Loader />}>
      <SelectSkip />
    </Suspense>
  );
}

export default App;
