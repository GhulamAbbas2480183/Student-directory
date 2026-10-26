import { Link } from "react-router-dom";
import student_pfp from "../assets/pfp.png";
import { useState } from "react";

function StudentCard(props) {


  const [view, setView] = useState(0);

  const incrementViews = () => {
    setView(view + 1);
  }

 
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card" style={{ width: "26rem", minHeight: "25rem" }}>
      <div className="card-body">

        <div className="d-flex justify-content-center">
          <img src={student_pfp} alt="student pfp pic" className="pfppic" />
        </div>

        <h2>{props.name}</h2>
        <p className="card-text">ID: {props.id}</p>

        {showDetails && (
          <div>
            <p className="card-text">Major: {props.major}</p>
            <p className="card-text">Year: {props.year}</p>
            <p className="card-text">GPA: {props.gpa}</p>
          </div>
        )}

        <div className="d-flex flex-wrap gap-1">
          <Link to={`/students/${props.id}`} className="btn btn-primary flex-fill">
            View
          </Link>

          <a href="#" className="btn btn-primary flex-fill">Edit</a>

          <button className="btn btn-primary flex-fill" onClick={incrementViews}>
            Views: {view}
          </button>

          <button
            className="btn btn-primary flex-fill"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>

          <Link className="btn btn-primary flex-fill" to="/DeleteUser">
            Delete
          </Link>
        </div>

      </div>
    </div>
  );
}

export default StudentCard;