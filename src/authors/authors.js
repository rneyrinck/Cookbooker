import { useState } from "react";

const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const [author, setAuthor] = useState({
      firstName: "",
      lastName: "",
      cookbooks: [],
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
        .then(() => setAuthor({ firstName: "", lastName: "", cookbooks: [] }));
    };
    const authorList = authors.map((author) => (
        <div key={author._id} className="author-card">
          <div>
            Author: {author.firstName} {author.lastName}
          </div>
          <div>Cookbooks: {/*{bookSearch(author.cookbooks)}*/}</div>
        </div>
      ));
return(
<>
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
{/* non functioning, will shutdown server */}
<input
  onChange={handleChangeAuthor}
  value={author.cookbooks[{}]}
  name="cookbooks"
  placeholder="cookbooks"
/>
<button type="Submit">Add author</button>
</form>
{/* cook book list */}
{/* author list */}
<section className="author-card-list">
<button className="author-button" onClick={handleClickAuthor}>
  View authors
</button>
{authorList}
</section>
</>)
}

export default Authors