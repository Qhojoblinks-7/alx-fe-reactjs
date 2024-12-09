function UserProfile() {
    return (
      <div className="bg-gray-100 md:p-8 sm:p-4 max-w-xs sm:max-w-sm mx-auto my-10 sm:my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="w-24 h-24 sm:w-36 sm:h-36 mx-auto rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <h1 className="text-lg sm:text-xl text-blue-800 hover:text-blue-500 my-4 text-center">
          John Doe
        </h1>
        <p className="text-sm sm:text-base text-gray-600 text-center">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  