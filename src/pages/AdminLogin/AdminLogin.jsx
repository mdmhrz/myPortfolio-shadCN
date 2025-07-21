import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff, Loader2, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router";
import Lottie from "lottie-react";
import secureLoginAnimation from "../../assets/register.json"; // Replace with your Lottie file

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const lottieRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Replace with actual authentication logic
            if (email === "admin@example.com" && password === "admin123") {
                navigate("/admin/dashboard");
            } else {
                setError("Invalid credentials. Please try again.");
                // Play error animation
                lottieRef.current.setDirection(-1);
                lottieRef.current.play();
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
            {/* Floating security elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-blue-400 opacity-10 dark:opacity-20"
                        style={{
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, i % 2 === 0 ? 15 : -15, 0],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                            duration: 15 + i * 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.5
                        }}
                    >
                        <Lock size={32} />
                    </motion.div>
                ))}
            </div>

            <div className="w-full max-w-6xl mx-4 flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Lottie Animation Side - Only shows on larger screens */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden lg:block flex-1 max-w-lg"
                >
                    <Lottie
                        lottieRef={lottieRef}
                        animationData={secureLoginAnimation}
                        loop={true}
                        autoplay={true}
                        className="w-full h-auto"
                    />
                </motion.div>

                {/* Main login card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md relative z-10"
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-400/10 blur-xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-purple-400/10 blur-xl"></div>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                        {/* Header with animation */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 p-6 text-center relative overflow-hidden"
                        >
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute -right-10 -top-10 w-32 h-32 rounded-full border-4 border-white/10"
                            ></motion.div>
                            <motion.div
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full border-4 border-white/10"
                            ></motion.div>

                            <div className="relative z-10">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-16 h-16 mx-auto bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20"
                                >
                                    <Lock className="text-white" size={32} />
                                </motion.div>
                                <h1 className="text-2xl font-bold text-white mb-1">Admin Portal</h1>
                                <p className="text-blue-100">Restricted access - authorized personnel only</p>
                            </div>
                        </motion.div>

                        {/* Login form */}
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            onSubmit={handleSubmit}
                            className="p-6 md:p-8 space-y-6"
                        >
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 px-4 py-3 rounded-lg text-sm flex items-start gap-2"
                                >
                                    <AlertTriangle className="flex-shrink-0 mt-0.5" size={16} />
                                    <span>{error}</span>
                                </motion.div>
                            )}

                            <div className="space-y-4">
                                {/* Email field */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="space-y-1"
                                >
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Admin Email
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white"
                                            placeholder="admin@example.com"
                                        />
                                    </div>
                                </motion.div>

                                {/* Password field */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="space-y-1"
                                >
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Admin Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            autoComplete="current-password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full pl-10 pr-10 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Remember me & forgot password */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                        Remember this device
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                                        Recover access
                                    </a>
                                </div>
                            </motion.div>

                            {/* Submit button */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="animate-spin mr-2 h-4 w-4" />
                                            Verifying credentials...
                                        </>
                                    ) : (
                                        <>
                                            <Lock className="mr-2 h-4 w-4" />
                                            Authenticate
                                        </>
                                    )}
                                </button>
                            </motion.div>
                        </motion.form>

                        {/* Warning footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="px-6 md:px-8 py-4 bg-yellow-50 dark:bg-yellow-900/20 text-center border-t border-yellow-200 dark:border-yellow-800"
                        >
                            <div className="flex items-center justify-center gap-2 text-yellow-700 dark:text-yellow-300 text-sm">
                                <AlertTriangle size={16} className="flex-shrink-0" />
                                <p>
                                    <span className="font-medium">Warning:</span> This portal is for authorized administrators only.
                                    Unauthorized access attempts may be logged and investigated.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminLogin;