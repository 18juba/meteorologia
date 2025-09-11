import React, { JSX } from "react";

function Register(): JSX.Element  {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-4 mx-auto max-w-md flex flex-col gap-4 justify-center items-center border-2 border-cyan-400/50 rounded-md">
        <h1 className="text-white">Register</h1>
        <form> 
          <label className="text-white">Email:</label><br></br>
          <input className="border-2 rounded-md border-cyan-400/50" type="text" id="name" name="name"></input><br></br>
          <label className="text-white">Password:</label><br></br>
          <input className="border-2 rounded-md border-cyan-400/50" type="text" id="password" name="password"></input><br></br>
          <input className="text-white" type="submit" value="Register"></input>
        </form>
      </div>
    </div>
  );
};

export default Register;
