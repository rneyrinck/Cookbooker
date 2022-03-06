import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { render } from "react-dom";
import apiUrl from "./../apiURL";
const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState({
    firstName: "",
    lastName: "",
    cookbooks: [],
  });

  const handleClickAuthor = () => {
    fetch(apiUrl + `authors`)
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
    fetch(apiUrl + `authors`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(author),
    })
      .then(() => fetch(apiUrl + "authors"))
      .then((response) => response.json())
      .then((data) => setAuthors(data))
      .then(() => setAuthor({ firstName: "", lastName: "", cookbooks: [] }));
  };
  // const bookAdd = (event) => {
  //   event.preventDefault();
  //   fetch(apiUrl + `authors/authorId` + )
  // }

  function Example(props) {
    const [newbook, setNewBook] = useState({
      title: "",
      yearPublished: "",
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChangeNewBook = (event) => {
      event.persist();
      setNewBook((prevBook) => {
        const editedBook = {
          ...prevBook,
          [event.target.name]: event.target.value,
        };
        return editedBook;
      });
    };

    const handleSubmitNewBook = (event) => {
      event.preventDefault();
      console.log(apiUrl + `authors/authorId/` + props.authorId.toString());
      console.log(newbook)
      fetch(apiUrl + `authors/authorId/` + props.authorId.toString(), {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(newbook),
      })
        .then(() => fetch(apiUrl + "authors"))
        .then((response) => response.json())
        .then((data) => setAuthors(data))
        .then(() => setNewBook({ title: "", yearPublished: "" }));
    };

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Cookbook
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmitNewBook} className="new-cookbook-form">
              <input
                onChange={handleChangeNewBook}
                value={newbook.title}
                name="title"
                placeholder="title"
              />
              <input
                onChange={handleChangeNewBook}
                value={newbook.yearPublished}
                name="yearPublished"
                placeholder="yearPublished"
              />
              <button type="submit">Submit</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  //
  const authorList = authors.map((author) => (
    <div key={author._id} className="author-card">
      <div>
        <h3>
          Author: {author.firstName} {author.lastName}
        </h3>
      </div>
      <div>
        Cookbooks:{" "}
        {author.cookbooks.map((items) => {
          return (
            <div key={items._id}>
              <h4>{items.title}</h4>
              <h5>{items.yearPublished}</h5>
            </div>
          );
        })}
        <Example authorId={author._id} />
      </div>
    </div>
  ));
  return (
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
        {/* <input
          onChange={handleChangeAuthor}
          value={author.cookbooks[{}]}
          name="cookbooks"
          placeholder="cookbooks"
        /> */}
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
    </>
  );
};

export default Authors;
