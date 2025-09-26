import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../api/api";

function Form({ type }: { type: "login" | "signup" }) {
 const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const payload =
        type === "login"
          ? {
              username: formData.username,
              password: formData.password,
              ...(formData.email && { email: formData.email }), // optional
              ...(formData.name && { name: formData.name }), // optional
            }
          : {
              username: formData.username,
              password: formData.password,
              name: formData.name,
              email: formData.email,
            };

      const res = await api.post(`/api/user/${type}`, payload);
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("user",JSON.stringify(res.data.user))
      navigate("/")
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  }

  return (
    <div className="p-8 rounded-lg w-96 font-outfit">
      <p className="text-2xl font-bold">
        {type === "signup"
          ? "Sign up for guidance, clarity, and peace of mind."
          : "Welcome back! Your health, just a click away."}
      </p>
      <br />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {type === "signup" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="name">your name?</label>
            <input
              type="text"
              placeholder="John Doe"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="username">
            {type === "signup" ? "pick a username" : "username"}
          </label>
          <input
            type="text"
            placeholder="john.doe_"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        {type === "signup" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="email">email</label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="********"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <p>
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link
            className="text-blue-800 hover:text-red-500 underline"
            to={type === "login" ? "/signup" : "/login"}
          >
            {type === "login" ? "Sign up" : "Log in"}
          </Link>
        </p>

        <button
          type="submit"
          className="p-3 bg-gray-700 text-white w-full rounded-md mt-2.5"
        >
          {type === "login" ? "Log in" : "Sign up"}
        </button>
      </form>
    </div>
  );
}

export default Form;
