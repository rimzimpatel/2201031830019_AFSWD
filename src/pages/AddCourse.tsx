import { useState } from "react";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newCourse = { title, instructor, price: Number(price) };

    const response = await fetch("http://localhost:5000/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourse),
    });

    if (response.ok) {
      alert("✅ Course added successfully!");
      setTitle("");
      setInstructor("");
      setPrice("");
    } else {
      alert("❌ Failed to add course");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add a New Course</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Instructor: </label>
          <input
            type="text"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
