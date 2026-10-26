import { useParams, Link } from "react-router-dom";

function StudentProfile() {
  const { id } = useParams();

  return (
    <div className="container mt-5">
      <h1>Student Profile</h1>
      <p>Student ID: {id}</p>
      <p>Abbas</p>
      <p>Program: Software Enginnering</p>
      <p>Semester: 5</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default StudentProfile;