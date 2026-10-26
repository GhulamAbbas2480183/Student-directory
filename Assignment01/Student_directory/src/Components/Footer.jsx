function Footer() {
  return (
    <footer className="footer">

      <div className="footer-columns d-flex justify-content-around">

        <div className="footer-links">
          <h6>Links</h6>
          <ul>
            <li>Home</li>
            <li>szabist.pk</li>
            <li>Courses</li>
            <li>Reports</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h6>Contact Info</h6>
              <pre className  ="p1">   .+1: 123 456 7890
                      </pre>
                      <p className  ="p1">
                        .trm@studentportal.com
                      </p>
        </div>

      </div>

      <hr />

      <p className="footer-copy">
        © 2026 StudentPortal. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer