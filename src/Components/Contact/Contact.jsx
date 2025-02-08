
const Contact = () => {

    return (
      <div id="Contact" className="p-10 md:p-24 text-white bg-[#0c0e19]">
        <h1 className="text-2xl md:text-4xl font-bold text-center">Contact Me</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold">Let{"'"}s Connect! 🤝</h2>
            <p className="text-sm md:text-md mt-3">
              Have a project in mind? Feel free to drop me a message!
            </p>
            <p className="mt-2">📧 Email: laibaqazi721@email.com</p>
            <p>📍 Location: Karachi, Pakistan</p>
          </div>
          <form className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow-md w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">Message</label>
              <textarea 
                rows="4" 
                placeholder="Write your message..." 
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-600"
              ></textarea>
            </div>
  
            <button className="w-full bg-sky-600 py-3 rounded-lg font-semibold text-white hover:bg-sky-700 transition-all">
              Send Message
            </button>
          </form>
  
        </div>
      </div>
    );
  };
  
  export default Contact;
  