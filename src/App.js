// trying to rework this so the webpage is centered around the author, with each cookbook displaying in the authors section
import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Authors from "./authors/authors";
import Cookbooks from "./cookbooks/cookbooks";
import Footer from "./footer/footer";
import Header from "./header/header";
import Landing from "./landing/landing";

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // author section

  // this below code block is an attempt to populate the book data with title and year for each author in the author list
  // search matching book ID to book array, return that book data
  // const [authorsCookbook, setAuthorsCookbook] = useState();

  // const [authorsCookbooks, setAuthorsCookbooks] = useState({
  //   title: "",
  //   yearPublished: "",
  // });

  // const bookSearch = (query) => {
  //   query.map((items) => {
  //     console.log(`http://localhost:4000/api/cookbooks/id/${items}`);
  //     fetch(`http://localhost:4000/api/cookbooks/id/${items}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "GET",
  //     }).then((response) => response.json());
  //     // .then((data)=>console.log(data))

  //     // .then((data) => setAuthorsCookbook(data))
  //     // .then(() => setAuthorsCookbooks({ title: "", yearPublished: "" }))
  //     // .then(console.log(authorsCookbooks))
  //     //    return(
  //     //   //  <p>{authorsCookbooks}</p>
  //     //  )
  //   });

  //   // return(
  //   //   <p>{authorsCookbooks.title}</p>
  //   // )
  // };

  

  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/authors" element={<Authors />} />
        <Route path="/cookbooks" element={<Cookbooks />}></Route>
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
