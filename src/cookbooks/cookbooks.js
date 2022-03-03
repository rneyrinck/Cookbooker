import { useState } from "react";
import apiUrl from "../../apiURL";
const Cookbooks = () =>{
    const [cookbooks, setCookbooks] = useState([]);
    const [cookbook, setCookbook] = useState({ title: "", yearPublished: "" });
    
    const handleClickCookbook = () => {
      fetch(`${apiUrl}cookbooks`)
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
      fetch(`${apiUrl}cookbooks`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(cookbook),
      })
        .then(() => fetch(`${apiUrl}cookbooks`))
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
    return(
<>

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
<section className="cookbook-card-list">
<button className="cookbook-button" onClick={handleClickCookbook}>
  View Cookbooks
</button>
{cookbookList}
</section>


</>)
}
export default Cookbooks