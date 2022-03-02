import { useState } from "react";
import "./App.css";

function App() {
  const [cookbooks, setCookbooks] = useState([]);
  const [cookbook, setCookbook] = useState({ title: "", yearPublished: "" });

  const handleClickCookbook = () => {
    fetch("http://localhost:4000/api/cookbooks")
      .then((response) => response.json())
      .then((data) => setCookbooks(data));
  };

  const handleChangeCookbook = (event) => {
    event.persist();
    setCookbook((prevCookbook) => {
      const editedCookbook = {
        ...prevCookbook,
        [event.target.name]: event.target.value,
      };
      return editedCookbook;
    });
  };

  const handleSubmitCookbook = (event) => {
    event.preventDefault();
    console.log(cookbook);
    fetch("http://localhost:4000/api/cookbooks", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(cookbook),
    })
      .then(() => fetch("http://localhost:4000/api/cookbooks"))
      .then((response) => response.json())
      .then((data) => setCookbooks(data))
      .then(() => setCookbook({ title: "", yearPublished: "" }));
  };

  const cookbookList = cookbooks.map((cookbook) => (
    <div key={cookbook._id} className="cookbook-card">
      <div>Title: {cookbook.title}</div>
      <div>Year: {cookbook.yearPublished} </div>
    </div>
  ));

  // author section
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState({
    firstName: "",
    lastName: "",
    cookbooks: [{}]
  });

  const handleClickAuthor = () => {
    fetch("http://localhost:4000/api/authors")
      .then((response) => response.json())
      .then((data) => setAuthors(data));
  };

  const handleChangeAuthor = (event) => {
    event.persist();
    setAuthor((prevAuthor) => {
      const editedAuthor = {
        ...prevAuthor,
        [event.target.name]: event.target.value,
      };
      return editedAuthor;
    });
  };

  const handleSubmitAuthor = (event) => {
    event.preventDefault();
    console.log(author);
    fetch("http://localhost:4000/api/authors", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(author),
    })
      .then(() => fetch("http://localhost:4000/api/authors"))
      .then((response) => response.json())
      .then((data) => setAuthors(data))
      .then(() => setAuthor({ firstName: "", lastName: "", cookbooks: [{}] }));
  };

  const authorList = authors.map((author) => (
    <div key={author._id} className="author-card">
      <div>
        Author: {author.firstName} {author.lastName}
      </div>
      <div>Cookbooks: {author.cookbooks[{}]} </div>
    </div>
  ));

  return (
    <div className="App">
      {/* cookbook form */}
      <form onSubmit={handleSubmitCookbook} className="new-cookbook-form">
        <input
          onChange={handleChangeCookbook}
          value={cookbook.title}
          name="title"
          placeholder="title"
        />
        <input
          onChange={handleChangeCookbook}
          value={cookbook.yearPublished}
          name="yearPublished"
          placeholder="yearPublished"
        />
        <button type="Submit">Add Cookbook</button>
      </form>
{/* author form */}
      <form onSubmit={handleSubmitAuthor} className="new-author-form">
        <input
          onChange={handleChangeAuthor}
          value={author.firstName}
          name="firstName"
          placeholder="firstName"
        />
        <input
          onChange={handleChangeAuthor}
          value={author.lastName}
          name="lastName"
          placeholder="lastName"
        />
        <input
          onChange={handleChangeAuthor}
          value={author.cookbooks[{}]}
          name="cookbooks"
          placeholder="cookbooks"
        />
        <button type="Submit">Add author</button>
      </form>
      {/* cook book list */}
      <section className="cookbook-card-list">
        <button className="cookbook-button" onClick={handleClickCookbook}>
          View Cookbooks
        </button>
        {cookbookList}
      </section>
      {/* author list */}
      <section className="author-card-list">
        <button className="author-button" onClick={handleClickAuthor}>
          View authors
        </button>
          {authorList}
      </section>
    </div>
  );
}

export default App;
