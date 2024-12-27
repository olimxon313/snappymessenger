'use client';

import React, { useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");

  const toggleVariant = () => {
    setVariant(variant === "LOGIN" ? "REGISTER" : "LOGIN");
  };

  return (
    <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-md px-6 sm:px-0">
      <div className="bg-gray-800 px-8 py-10 shadow-2xl rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={variant}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-center text-white">
              {variant === "LOGIN" ? "Welcome Back" : "Create Your Account"}
            </h2>
            <p className="text-sm text-center text-gray-400 mt-2">
              {variant === "LOGIN"
                ? "Sign in to your account to continue."
                : "Register to join our community."}
            </p>
            <form className="space-y-6 mt-6">
              <AnimatePresence>
                {variant === "REGISTER" && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {variant === "LOGIN" ? "Sign In" : "Register"}
              </button>
            </form>
          </motion.div>
        </AnimatePresence>
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-800 px-3 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-3 justify-center">
            <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <BsGithub className="text-white" size={20} />
            </button>
            <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <BsGoogle className="text-white" size={20} />
            </button>
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 text-gray-400">
          <div>
            {variant === "LOGIN"
              ? "New to our platform?"
              : "Already have an account?"}
          </div>
          <div
            onClick={toggleVariant}
            className="underline cursor-pointer text-gray-300 hover:text-gray-100"
          >
            {variant === "LOGIN" ? "Create an account" : "Sign In"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
