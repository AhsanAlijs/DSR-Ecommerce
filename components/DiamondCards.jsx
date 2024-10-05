import React from 'react'
import Image from 'next/image'; // Import Image from next/image
import server from '../public/server.png'

const DiamondCards = () => {
  return (
   <>
   <section className="max-w-screen-2xl px-10 max-md:px-4  mx-auto">
      <div className="container px-5 py-24 mx-auto">
    
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member) => (
            <div key={member.name} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className=" border-[#5a93dd] border-2 p-10 rounded-lg">
                <img
                  alt="team"
                  className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={member.image}
                />
                <div className="flex-grow">
                  <h2 className="text-[#012555] py-2 text-2xl font-medium">
                    {member.name}
                  </h2>
                  <p className="text-[12px] text-gray-500">{member.discription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </>
  )
}

// Dummy data for team members
const teamMembers = [
    {
      name: "Holden Caulfield",
      discription: "Never search for contact information online again. Our database is updated weekly and offers the most accurate contact information available on any recruiting website. You can download or save our list, ensuring you always have access to the contacts you need.",
      image: server,
    },
    {
      name: "Henry Letham",
      discription: "Never search for contact information online again. Our database is updated weekly and offers the most accurate contact information available on any recruiting website. You can download or save our list, ensuring you always have access to the contacts you need.",
      image: "https://dummyimage.com/84x84",
    },
    {
      name: "Oskar Blinde",
      discription: "Never search for contact information online again. Our database is updated weekly and offers the most accurate contact information available on any recruiting website. You can download or save our list, ensuring you always have access to the contacts you need.",
      image: "https://dummyimage.com/88x88",
    },
    {
      name: "John Doe",
      discription: "Never search for contact information online again. Our database is updated weekly and offers the most accurate contact information available on any recruiting website. You can download or save our list, ensuring you always have access to the contacts you need.",
      image: "https://dummyimage.com/90x90",
    },
    {
      name: "Martin Eden",
      discription: "Never search for contact information online again. Our database is updated weekly and offers the most accurate contact information available on any recruiting website. You can download or save our list, ensuring you always have access to the contacts you need.",
      image: "https://dummyimage.com/94x94",
    },
    {
      name: "Boris Kitua",
      discription: "Never search for contact information online again. Our database is updated weekly and offers the most accurate contact information available on any recruiting website. You can download or save our list, ensuring you always have access to the contacts you need.",
      image: "https://dummyimage.com/98x98",
    },
   
  ];

export default DiamondCards
