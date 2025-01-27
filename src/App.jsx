import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Stays } from "./components/Stays";
import { Search } from "./components/Search"

export default function App() {
  

  return (
    <>
      <div className="m-10">
        <Search></Search>
        <Navbar></Navbar>
        <Header></Header>
        <Stays></Stays>
      </div>
    </>
  )
}

