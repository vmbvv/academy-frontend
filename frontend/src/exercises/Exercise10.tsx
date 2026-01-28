import { useState, type FormEvent } from "react";
import { CheckCircle, RotateCcw, AlertCircle } from "lucide-react";

export default function Exercise10() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "" };

    if (formData.name.length < 2) {
      newErrors.name = "Min 2 characters";
      isValid = false;
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validate()) {
      setIsSuccess(true);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "" });
    setErrors({ name: "", email: "" });
    setIsSuccess(false);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Exercise 10: Form Validation</h1>
        <p className="text-slate-400">
          Compulsory input fields with error handling.
        </p>
      </div>

      <div className="bg-slate-800 p-10 rounded-2xl max-w-md text-white shadow-xl shadow-black/10">
        {isSuccess ? (
          <div className="text-center animate-in zoom-in-90 duration-300">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} color="white" />
            </div>

            <h2 className="text-3xl font-bold mb-4">Success!</h2>
            <div className="bg-slate-700 p-4 rounded-lg mb-8 text-left">
              <p className="mb-2 text-slate-400">
                Name: <span className="text-white">{formData.name}</span>
              </p>
              <p className="text-slate-400">
                Email: <span className="text-white">{formData.email}</span>
              </p>
            </div>

            <button
              onClick={resetForm}
              className="bg-slate-500 hover:bg-slate-600 text-white border-0 rounded-lg px-6 py-3 font-semibold cursor-pointer flex items-center gap-2 mx-auto transition-colors"
            >
              <RotateCcw size={18} /> Reset Form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 text-slate-400">Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`
                    w-full px-4 py-3 bg-slate-700 rounded-lg text-white outline-none transition-colors border
                    ${errors.name ? "border-red-500" : "border-slate-600 focus:border-slate-500"}
                  `}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                    <AlertCircle size={20} />
                  </div>
                )}
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="mb-8">
              <label className="block mb-2 text-slate-400">Email</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`
                    w-full px-4 py-3 bg-slate-700 rounded-lg text-white outline-none transition-colors border
                    ${errors.email ? "border-red-500" : "border-slate-600 focus:border-slate-500"}
                  `}
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                    <AlertCircle size={20} />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  {errors.email}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-lg py-3.5 text-base font-bold cursor-pointer transition-colors"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
