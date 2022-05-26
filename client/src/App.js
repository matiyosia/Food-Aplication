import LeadingPage from "./components/LeadingPage/LeadingPage";
import Home from './components/Home/Home'
import { Routes,  Route,} from "react-router-dom";
import RecipesDetail from "./components/RecipesDetails/RecipesDetail";
import Create from "./components/Create/Create";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LeadingPage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/recipe/:id" element={<RecipesDetail/>} />
      <Route path= "/create" element={<Create/>}/>
      <Route path="*" element={<NotFound/>} />

  </Routes>
  );
}

export default App;
