import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Destacados from "./components/Destacados";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Error404";


function App() {
  return (
      <BrowserRouter>
    <div>
      <Navbar/>
      <Banner/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>
    
      <Destacados/>
      <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;
