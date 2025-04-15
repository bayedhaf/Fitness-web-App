import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Contact = () => {
    return (
        <div className="bg-black text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
            <div className="max-w-4xl mx-auto flex-1">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider">LET'S CHANGE YOUR FUTURE</h1>
                </div>
                
                <form className="space-y-4 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="fname" className="block text-sm font-medium uppercase tracking-wider">First Name</label>
                            <input 
                                type="text" 
                                id="fname" 
                                name="fname" 
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lname" className="block text-sm font-medium uppercase tracking-wider">Last Name</label>
                            <input 
                                type="text" 
                                id="lname" 
                                name="lname" 
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" 
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium uppercase tracking-wider">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" 
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium uppercase tracking-wider">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="4"
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" 
                        ></textarea>
                    </div>
                    
                    <div>
                        <button 
                            type="submit" 
                            className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wider rounded-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            <footer className="mt-auto ml-32 mr-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <Link to="/Schedule" className="underline text-white hover:text-blue-100">OUR HOURS</Link>
                        <p className="mt-4">MONDAY-FRINDAY
                            <br/>
                            <p className="text-xl mt-5 mb-3">5 AM - 9 PM </p>
                        </p>
                        <p className="">MONDAY-FRINDAY
                            <br/>
                            <p className="text-xl mt-5 mb-3"> 8 PM - 12 PM </p>
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <span className="w-20 h-20 border-2 border-orange-400 rounded-full p-2 text-orange-400 flex items-center justify-center text-3xl font-bold">LAF</span>
                    </div>
                    <div className="text-center md:text-right space-y-2">
                        <Link to="/Schedule" className="underline text-white hover:text-blue-100 block">FOLLOW US</Link>
                        <div className="flex justify-center md:justify-end gap-4">
                            <Link to="/Schedule" className="underline text-white hover:text-blue-100"><FaInstagram /></Link>
                            <Link to="/Schedule" className="underline text-white hover:text-blue-100"><FaFacebook /></Link>
                        </div>
                    </div>
                </div>
                <hr className="border-white my-4"/>
                <p className="mt-4 text-center text-white uppercase text-sm">
                    COPYRIGHT LIFE ADVANCED FITNESS WEBSITE DEVELOPED BY TEAM OF ASTU STUDENTS
                </p>
            </footer>
        </div>
    );
};

export default Contact;