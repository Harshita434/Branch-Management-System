import React, { useState } from 'react'
import { Building2, Eye, EyeOff, Lock, User } from 'lucide-react'
import Logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import {apiCall} from '../services/authServieces'
import {signIn} from '../services/authServieces'


export default function Login() {
    const [employeeCode, setEmployeeCode] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
       

        // ✅ Call the signIn function
        const response = await signIn({ payload: { employeeCode, password } });

        // ✅ Check response and handle success
        if (response && response.token) {
   let role =    response?.data?.emp_role
if(role === "employee"){
   navigate(`/dashboard`);
}
else if(role === "admin"){
   navigate(`/admin/dashboard`);
}

else if(role === "manager"){
   navigate(`/dashboard`);
}

else if(role === "branch"){
   navigate(`/admin/dashboard`);
}
else{
    alert('Unknown role! Please contact support.');
}




            // Store token if rememberMe is checked
            if (rememberMe) {
                localStorage.setItem('token', response.token);
            }

          
        } else {
            // Response without token = failure
            console.warn('Login failed or token missing', response);
            alert('Login failed! Please check your credentials.');
        }

    } catch (error) {
        console.error('Login error:', error);
        alert('Login failed! Please check your credentials.');
    } finally {
        setIsLoading(false);
    }
};


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-400 opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Main Card */}
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">

                    {/* Logo Section */}
                    <div className="pt-5 pb-5 px-4 text-center">
                        <div className="inline-flex items-center justify-center mb-6">
                            <div className="relative">
                                <div className="relative rounded-md shadow-lg">
                                    <img src={Logo} alt='logo' className='w-25 h-25' />
                                </div>
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            Sign In
                        </h1>
                        <p className="text-gray-500 text-sm">
                            To continue to AMS Portal
                        </p>
                    </div>

                    {/* Form Section */}
                    <div className="px-4 pb-2">
                        <div className="space-y-4">

                            {/* Employee Code Input */}
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2 ml-1">
                                    Employee Code
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <User size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        value={employeeCode}
                                        onChange={(e) => setEmployeeCode(e.target.value)}
                                        placeholder="Enter your employee code"
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:border-orange-500 focus:bg-white focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2 ml-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full pl-12 pr-14 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:border-orange-500 focus:bg-white focus:outline-none transition-all duration-300 text-gray-800 placeholder-gray-400"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-600 transition-colors duration-200"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between pt-2">
                                <label className="flex items-center cursor-pointer group">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="w-4 h-4 text-orange-600 border-1 border-gray-300 rounded cursor-pointer focus:ring-2 focus:ring-orange-500 focus:ring-offset-0 transition-all"
                                        />
                                    </div>
                                    <span className="ml-3 text-sm text-gray-700 font-medium group-hover:text-orange-600 transition-colors duration-200">
                                        Remember me
                                    </span>
                                </label>
                                <button
                                    onClick={() => navigate('/forgot')}
                                    className="text-sm text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Login Button */}
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading || !employeeCode || !password}
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mt-6"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing In...
                                    </span>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 py-3 text-center border-t border-gray-100">
                        <p className="text-xs text-gray-400">
                            Powered by <span className="font-semibold text-gray-500">Manthan IT Solutions</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}