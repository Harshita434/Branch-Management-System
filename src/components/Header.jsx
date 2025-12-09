import React, { useState } from 'react'
import { Bell, ClipboardList } from 'lucide-react'
import Logo from "../assets/logo.png"

export default function Header() {
    const profileImage = "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"

    const handleProfileClick = () => {
        console.log('Profile clicked - Navigate to profile page')
    }

    const handleNotificationClick = () => {
        console.log('Notifications clicked')
    }

    return (
        <header className="bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg sticky top-0 z-50">
            <div className="px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
                                <img src={Logo} alt='logo' className='w-10 h-10' />
                            </div>

                            <div>
                                <h1 className="text-white font-bold text-lg leading-tight">Manthan IT Solutions</h1>
                                <p className="text-orange-100 text-xs leading-tight">Attendance System</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-3">
                        {/* Notification Bell */}
                        <button
                            onClick={handleNotificationClick}
                            className="relative p-2 text-white hover:bg-orange-600 rounded-lg transition-all duration-200 active:scale-95"
                        >
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        {/* Profile Picture */}
                        {/* <button
                            onClick={handleProfileClick}
                            className="relative overflow-hidden rounded-full w-9 h-9 border-2 border-white shadow-md hover:border-orange-200 transition-all duration-200 active:scale-95"
                        >
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </button> */}
                    </div>
                </div>
            </div>
        </header>
    )
}