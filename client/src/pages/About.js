import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
function About() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = () => {
      const data = [
        {
          id: 1,
          name: "Huynh Thanh Thuy",
          role: "Front-end Developer & UI/UX Designer",
          description:
            "Thuy is responsible for the front-end development and the user interface design, ensuring a seamless and engaging user experience.",
          imageUrl: "https://avatar.iran.liara.run/public/74",
        },
        {
          id: 2,
          name: "Doan Huu Nguyen",
          role: "Back-end Developer & Tester",
          description:
            "Nguyen specializes in back-end development and testing, ensuring that the server-side logic and database integrations are functioning smoothly.",
          imageUrl: "https://avatar.iran.liara.run/public/30",
        },
        {
          id: 3,
          name: "Nguyen Pham Ky Phuong",
          role: "Database & Back-end Developer",
          description:
            "Phuong works on both database management and back-end development, ensuring data integrity and smooth server-side performance.",
          imageUrl: "https://avatar.iran.liara.run/public/69",
        },
        {
          id: 4,
          name: "Nguyen Van Huy",
          role: "Front-end Developer",
          description:
            "Huy focuses on front-end development, making sure that the application is visually appealing, functional, and user-friendly.",
          imageUrl: "https://avatar.iran.liara.run/public/48",
        },
      ];

      setTeamMembers(data);
    };

    fetchTeamMembers();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className=" w-[1920px] justify-between items-center  font-DM Sans shrink-0 ">
        <Header />
      </div>

      <div className="min-h-screen flex flex-col bg-brown-500 items-center px-6 py-[90px]">
        {/* Description */}
        <div className="max-w-6xl w-full space-y-[60px]">
          <h2 className="text-display-3 font-bold text-heading-black text-center">
            Meet <span className="text-orange-500">Our Team</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center space-y-4 bg-white shadow-md rounded-3xl p-6 transition-transform transform hover:scale-105"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover border-gray-200"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-heading-black">
                    {member.name}
                  </h3>
                  <p className="text-brown-1000 text-dm-base">{member.role}</p>
                  <p className="text-gray-500 text-lg mt-2">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
