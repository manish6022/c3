import Navbar from "./Components/Navbar";
import Course from "./Pages/Course";
import CourseCard from "./Components/CourseCard";
import { CssBaseline, Toolbar } from "@material-ui/core";
import Heading from "./Components/Heading";


function App() {
  return (
    <>
    <Navbar/>
    <Course/>

    <CssBaseline />
    </>
  );
}

export default App;
