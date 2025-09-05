import { useEffect, useState } from "react";

function Home() {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error("Error fetching courses:", err));
  }, []);

  return (
    <div>
      <h1>Available Courses</h1>
      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              {course.title} — {course.instructor}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;


