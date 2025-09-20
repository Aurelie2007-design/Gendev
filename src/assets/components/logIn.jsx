import React, { useState } from "react";
import { useAuth } from "../../store/useAuth";
import {
  EyeIcon,
  EyeOff,
  Loader2,
  LogIn,
  Mail,
  MessageCircleHeart,
  User2Icon,
  UserLock,
} from "lucide-react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const { logIn, isLoggingIn } = useAuth();
  const validation = () => {
    if (!formData.email.trim() || !formData.password) {
      return toast.error("completer tous les champs");
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validation();
    if (error) {
      console.log(error);
      // logIn(formData);
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
            <h1 className="text-4xl font-bold  mt-3 ">Bienvenue sur le site</h1>
            <p className="text-1xl">
              Enregitrez-vous pour vous inscrire sur nos programmes
            </p>
          </div>
          {/* form */}
          <form action="" onSubmit={handleSubmit}>
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
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <div className="flex justify-center items-center">
                  {" "}
                  <Loader2 className="animate-spin m-3 mt-2" />
                  <span className="mb-2">chargement...</span>
                </div>
              ) : (
                "Entrez vos identifiants"
              )}
            </button>
          </form>
          <div className="text-center">
            <p>
              Don't have an acount? {""}
              <Link to="/signup" className="link font-bold">
                Sing in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
