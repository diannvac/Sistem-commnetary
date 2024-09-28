import React, { useState } from 'react';
import LandigPageList from '../LandingPage/LandingPageList';
import BlogList from '../Blogs/BlogList';
import { FiMonitor, FiEdit } from 'react-icons/fi';


function Dashboard() {
    const [activeTab, setActiveTab] = useState('landingPages');
  
    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white  py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Bienvenido al panel de control</p>
          </div>
        </header>
        <div className="container mx-auto px-4 py-8">
          <nav className="flex justify-center mb-8">
            <button
              onClick={() => handleTabChange('landingPages')}
              className={`${
                activeTab === 'landingPages'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              } hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-l-lg focus:outline-none transition duration-300 ease-in-out`}
            >
              <FiMonitor className="inline-block mr-2" />
              Landing Pages
            </button>
            <button
              onClick={() => handleTabChange('blogs')}
              className={`${
                activeTab === 'blogs'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              } hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-r-lg focus:outline-none transition duration-300 ease-in-out`}
            >
              <FiEdit className="inline-block mr-2" />
              Blogs
            </button>
          </nav>
          <section>
            {activeTab === 'landingPages' ? <LandigPageList/> : <BlogList />}
          </section>
        </div>
      </div>
    );
  }
  
  export default Dashboard;