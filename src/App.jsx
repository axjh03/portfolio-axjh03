import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import About from "./pages/Home";
function App(){


  return (
    // add a margin left and right and screen size adaptble
    <div className="container mx-auto px-4 sm:px-10 lg:px-15">
      <About/>
      <Projects/>
      <Experience/>
    </div>
  )
}
export default App;
