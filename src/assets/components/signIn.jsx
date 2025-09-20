import React, { useState } from "react";
import { useAuth } from "../../store/useAuth";
import {
  EyeIcon,
  EyeOff,
  Loader2,
  Mail,
  MessageCircleHeart,
  User2Icon,
  UserLock,
} from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const { signUp, isSigningUp } = useAuth();
  const validation = () => {
    if (!formData.name.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    const error = validation();
    if (error) {
      console.log(error);
      // signUp(formData);
      toast.success("everything okay");
    }
  };

  return (
    <div className=" m-[5%] ">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-md space-y-8">
          {/* title */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <MessageCircleHeart />
            </div>
            <h1 className="text-4xl font-bold  mt-3 ">Creer votre compte</h1>
            <p className="text-1xl">
              Enregitrez-vous pour etre averti de toutes nous nouvelles
              publications
            </p>
          </div>
          {/* form */}
          <form action="" onSubmit={handleSubmit}>
            <div className="form-controls pb-3">
              <label className="label">nom</label>
              <div className="relative">
                <div className="absolute m-3 mt-1">
                  <User2Icon />
                </div>
                <input
                  type="text"
                  className={`input w-full pl-10 p-1 border-2 border-black rounded-2xl`}
                  placeholder="Entrer votre nom"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="form-controls pb-3">
              <label className="label">email</label>
              <div className="relative">
                <div className="absolute m-3 mt-1">
                  <Mail />
                </div>
                <input
                  type="email"
                  className={`input w-full pl-10 p-1 border-2 border-black rounded-2xl`}
                  placeholder="Entrer votre email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </div>{" "}
            <div className="form-controls">
              <label className="label">mot-de-passe</label>
              <div className="relative">
                <div className="absolute m-3 mt-1">
                  <UserLock />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input w-full pl-10 p-1 border-2 border-black rounded-2xl`}
                  placeholder="Entrer votre mot de passe"
                  name="password"
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <button
                  type="button"
                  className="absolute m-[-30px] mt-1"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <EyeIcon /> : <EyeOff />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full border-2 h-10 mt-7 border-none rounded-2xl bg-linear-30 bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <div className="flex justify-center items-center">
                  {" "}
                  <Loader2 className="animate-spin m-3 mt-2" />
                  <span className="mb-2">chargement...</span>
                </div>
              ) : (
                "creer votre compte"
              )}
            </button>
          </form>
          <div className="text-center">
            <p>
              Already have an account? {""}
              <Link to="/login" className="link font-bold">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
