import React, { useState, useEffect } from "react";
import axios from "axios";

const AboutUs = (props) => {
  const [aboutUsList, setAboutUsList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetchAboutUs();
  }, []);

  const fetchAboutUs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/about");
      setAboutUsList(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  console.log(aboutUsList);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      await axios.put(`http://localhost:5000/api/about/${currentId}`, {
        title,
        content,
      });
    } else {
      await axios.post("http://localhost:5000/api/about", { title, content });
    }
    setTitle("");
    setContent("");
    setCurrentId(null);
    fetchAboutUs();
  };

  const handleEdit = (id) => {
    const entry = aboutUsList.find((item) => item._id === id);
    setTitle(entry.title);
    setContent(entry.content);
    setCurrentId(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/about/${id}`);
      fetchAboutUs();
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  return (
    <div>
      <h1>About Us</h1>
      <h4> You can Drop your Comments/Experience about us... </h4>
      <p>This Project is created by {props.name1} , {props.name2} , {props.name3}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">{currentId ? "Update" : "Create"}</button>
      </form>
      <ul>
        {aboutUsList.map((item) => (
          <li key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <button onClick={() => handleEdit(item._id)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;