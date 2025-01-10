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

  const TopRightMessage = () => {
    const containerStyle = {
      position: "absolute",
      top: "80px",
      right: "10px",
      textAlign: "center",
    };

    const footerStyle = {
      color: "#000",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "2rem",
      fontWeight: "700",
    };

    const imageContainerStyle = {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "10px",
    };

    const imageStyle = {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
      border: "2px solid #fff",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return (
      <div style={containerStyle}>
        <div style={footerStyle}>Developed by</div>
        <div style={imageContainerStyle}>
          <div
            style={{
              ...imageStyle,
              backgroundImage: "url('ghazi.jpg')",
            }}
          ></div>
          <div
            style={{
              ...imageStyle,
              backgroundImage: "url('HASSAN.jpg')",
            }}
          ></div>
          <div
            style={{
              ...imageStyle,
              backgroundImage: "url('Aalyan.jpg')",
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <TopRightMessage />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1 style={{ color: "#000", fontWeight: "bold", fontSize: "2rem" }}>
          Review Section
        </h1>
        <h4
          style={{ color: "#d00000", fontWeight: "600", fontSize: "1.25rem" }}
        >
          You can Drop your Comments/Experience about us...
        </h4>
        <p style={{ color: "#000", fontSize: "1rem" }}>
          This Project is created by {props.name1}, {props.name2}, {props.name3}
        </p>
        <div
          style={{
            border: "2px solid #d00000",
            borderRadius: "10px",
            padding: "20px",
            maxWidth: "500px",
            width: "100%",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                backgroundColor: "#f05959",
                color: "#fff",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d03b3b")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#f05959")}
            >
              {currentId ? "Update" : "Create"}
            </button>
          </form>
        </div>
        <ul style={{ marginTop: "20px" }}>
          {aboutUsList.map((item) => (
            <li key={item._id} style={{ color: "#000" }}>
              <h2 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                {item.title}
              </h2>
              <p style={{ fontSize: "1rem" }}>{item.content}</p>
              <button
                onClick={() => handleEdit(item._id)}
                style={{
                  backgroundColor: "#f05959",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  margin: "5px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#d03b3b")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#f05959")}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                style={{
                  backgroundColor: "#f05959",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  margin: "5px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#d03b3b")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#f05959")}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
