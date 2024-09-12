import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const AboutPage = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleLearnMoreClick = () => {
    navigate("/contact"); // Navigate to the contact page
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-orange-500 to-indigo-500">
      <h1 className="text-5xl font-bold text-white mb-6 animate-bounce">
        About Us
      </h1>
      <p className="text-lg text-white text-justify max-w-2xl animate-fadeIn">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia at
        exercitationem possimus enim, placeat doloribus suscipit, quos beatae
        laboriosam non facilis eum impedit necessitatibus laborum dolor autem id
        saepe fuga eius nobis. Temporibus alias accusantium asperiores veniam
        exercitationem, sapiente cupiditate eum voluptate provident suscipit
        dolorem reiciendis amet dolor id tenetur nostrum adipisci incidunt
        dolore pariatur voluptatibus, quos tempore distinctio. Tenetur vel hic
        necessitatibus optio quibusdam maxime culpa sed nobis pariatur sequi
        fugiat asperiores dolore quia labore error laudantium nulla sapiente ex
        eos ipsam rem maiores, esse cumque. Deserunt, repellendus. Rerum
        voluptas veritatis nobis maiores earum quia assumenda repellendus cumque
        explicabo!
      </p>

      <div className="mt-8">
        <Link to="/contact">
          <button
            onClick={handleLearnMoreClick}
            className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
          >
            Contact Us!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
