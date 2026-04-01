import "./Comp5.css";

function Comp5() {
  return (
    <div className="container5">
      <div className="card5">
        {/* LEFT */}
        <div className="left5">
          <div className="image-placeholder"></div>

          <h2 className="title5">How to join our community</h2>
          <p className="desc5">
            Just 3 simple steps to optimize your company operations.
          </p>

          <button className="btn5">Sign up now</button>
        </div>

        {/* RIGHT */}
        <div className="right5">
          <div className="step">
            <h5>Step 1</h5>
            <p>Reach out to one of our specialists.</p>
          </div>

          <div className="step">
            <h5>Step 2</h5>
            <p>We prepare a personalized package for you.</p>
          </div>

          <div className="step no-border">
            <h5>Step 3</h5>
            <p>Start working smart with optimized operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp5;
