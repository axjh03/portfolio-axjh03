import { useState } from 'react';
import Navbar from './components/Navbar';
import Matrix from "./components/Matrix";

function App() {
  const [loaded, setLoad] = useState(false);

  setTimeout(() => {
    setLoad(true);
  }, 8000);

  return (
    loaded ? (
      <>
        <Navbar />
      </>
    ) : (
      <>
        <Matrix />
      </>
    )
  );
}

export default App;
