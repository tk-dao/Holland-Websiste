// src/pages/LoginPage.jsx
export default function LoginPage() {
  return (
    <div className="grid relative place-items-center min-h-screen">
      <img
        src="../media/UNMC_landscape2.jpg"
        alt="UNMC campus"
        className="h-screen w-screen object-cover"
      ></img>
      <aside
        className="
        absolute right-10 top-1/2 
        -translate-y-1/2 z-10
        w-[min(92vw,480px)] h-[720px]
        rounded-[32px] bg-white/95
        backdrop-blur shadow-2xl 
        p-8 flex flex-col items-center"
      >
        <img
          src="/media/UNMC_logo.png"
          alt="UNMC"
          className="h-auto w-auto top-0 mb-24"
        ></img>

        <p className="text-2xl font-display-lemon">Welcome Back!</p>
        <p className="text-[12px] text-gray-600 mt-2 mb-5">
          Don't have an account?{" "}
          <span href="/signup" className="text-blue-400 underline">
            Create an account
          </span>{" "}
          here!
        </p>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {/* <legend className="fieldset-legend font-display-lemonlight">
            Login
          </legend> */}

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </aside>
    </div>
  );
}
