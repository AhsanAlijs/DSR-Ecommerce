import React from "react";
import Table from "@/components/Table/table";

const page = () => {
    const tabledata = [
        {
          name: "Alabama A&M University",
          city: "Normal, Alabama",
          division: "NCAA DI",
          conference: "Southwestern Athletic",
        },
        {
          name: "West Anchorage High School",
          city: "Alaska",
          division: "NCAA DI",
          conference: "ASD",
        },
        {
          name: "Arizona State University",
          city: "Tempe, Arizona",
          division: "NCAA DI",
          conference: "Pac-12",
        },
        {
          name: "Arkansas State University",
          city: "Jonesboro, Arkansas",
          division: "NCAA DI",
          conference: "Sun Belt",
        },
        {
          name: "California Baptist University",
          city: "Riverside, California",
          division: "NCAA DI",
          conference: "Western Athletic",
        },
        {
          name: "Colorado State University",
          city: "Fort Collins, Colorado",
          division: "NCAA DI",
          conference: "Mountain West",
        },
        {
          name: "Central Connecticut State University",
          city: "New Britain, Connecticut",
          division: "NCAA DI",
          conference: "Northeast",
        },
        {
          name: "Delaware State University",
          city: "Dover, Delaware",
          division: "NCAA DI",
          conference: "Mid-Eastern Athletic",
        },
        {
          name: "Columbia University",
          city: "New York",
          division: "NCAA DI",
          conference: "The Ivy League",
        },
      ];
      
  return (
    <div className="my-16 max-w-screen-2xl mx-auto px-10 max-md:px-4">
      <p className="text-center max-sm:text-xs px-4">
        <span className="cursor-pointer">Scholarships</span> /{" "}
        <span className="cursor-pointer">Baseball</span> /{" "}
        <span className="cursor-pointer">[State - Long]</span> /{" "}
      </p>
      <h1 className="text-5xl font-bold text-center text-blue-950 my-10 max-xl:text-3xl max-lg:text-2xl max-sm:text-xl">
      [State - Long] Baseball - Schools Offernin Scholarships
      </h1>

      <div className="">
        <Table tabledata={tabledata}/>
      </div>
    </div>
  );
};

export default page;
