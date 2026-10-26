

import { Link } from "react-router-dom";

function BreadCrumb() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
           <li className="breadcrumb-item"><a href="#">NoticeBoard</a></li>
        <li className="breadcrumb-item"><a href="#">Your Profile</a></li>
        <li className="breadcrumb-item active" aria-current="page">Updates</li>
      </ol>
    </nav>
  );
}

export default BreadCrumb;