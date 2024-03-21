import { Link } from "react-router-dom";
import logo from "../assets/company-logo.png";
import { FaShoppingBag } from "react-icons/fa";

const Signup = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-col items-center lg:items-start">
            <img src={logo} alt="" />
            <h1 className="text-5xl font-bold text-[#660062]">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <label className="label">
              <Link
                to="/"
                className="label-text-alt link link-hover text-[#660062] font-bold"
              >
                For Visit Our Website{" "}
                <span className="inline-block">
                  <FaShoppingBag />
                </span>
              </Link>
            </label>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">Signup</button>
              </div>
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
