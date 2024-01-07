import { NavLink } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <h1 className="">Hello world</h1>
        <NavLink to="/" className="btn btn-primary">Log Out</NavLink>
      </div>
    </>
  );
}
export default Main;
