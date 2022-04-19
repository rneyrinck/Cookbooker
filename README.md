# Cookbooker
Hi,

This is a simple web-app developed with React/NodeJs on the frontend and MongoDB/ExpressJs on the backend. This was my first attempt at a full stack application and I learned alot about React, React Bootstrap, and CRUD operations!

I've thought about fixing this application up with what I know now, but have decided against it as keeping it as is gives me a sense aof validation on how far I've come since developing this.

Thank you for taking a look!

Best,

Robert

[Deployed Link](https://pages.git.generalassemb.ly/rob-neyrinck/Cookbook-client/) 

## Componenents


| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | Renders components |
| Header    |          This will render the header as tabs with links to the different pages          |
| Authors |   Displays a list of authors, and a form for adding new ones   |
| Cookbooks |   Displays list of cookbooks, and a form for adding more   |
| Landing     |         Displays product description/tech used       |
| CookbookFormModal     |    Displays modal for adding a new cookbook to an existing author            |
| Footer    |          Renders the footer includes my name         |

## Code for API Call
Using a fetch request on a custom URL to pull data from the database.

This code snippet takes the base URL and adds the selected authors name(as a prop in useState) as a string and then performs a PATCH request to add a new book to an existing author.

```jsx

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
    
 ```
