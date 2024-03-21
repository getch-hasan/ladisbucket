const Shipping = () => {
  return (
    <div className="min-h-screen">
      <div className="text-center mt-5">
        <ul className="steps steps-horizontal lg:steps-horizontal">
          <li className="step step-primary">Shipping</li>
          <li className="step step-primary">Payment</li>
          <li className="step">Review</li>
        </ul>
      </div>
      <div className="flex justify-center mt-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-2 border-[#C50076]">
          <h3 className="p-2 bg-[#C50076] text-white text-center m-2">
            Enter Your Shipping Address
          </h3>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Email
                </span>
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
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Confirm Email
                </span>
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
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Country
                </span>
              </label>
              <input
                type="text"
                placeholder="Ex: bangladesh"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Address
                </span>
              </label>
              <input
                type="text"
                placeholder="enter your address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Others</span>
              </label>
              <input
                type="text"
                placeholder="Others details"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#660062] text-white font-bold hover:text-black">
                Continue to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
