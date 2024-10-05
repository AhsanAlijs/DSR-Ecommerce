import React from "react";


const Table = (props) => {
  return (


    <div className="overflow-x-auto">
    {/* Full-width header and table body combined */}
    <table className="w-full border-collapse border border-gray-300 ">
      <thead className="bg-[#012555] text-white  border-[3px] border-[#012555] ">
        <tr>
          <th className="text-start text-lg p-3 px-4 max-sm:text-sm">Name</th>
          <th className="text-start text-lg p-3 px-4 max-sm:text-sm">City</th>
          <th className="text-start text-lg p-3 px-4 max-sm:text-sm">Division</th>
          <th className="text-start text-lg p-3 px-4 max-sm:text-sm">Conference</th>
        </tr>
      </thead>

      {/* 90% width table body */}
      <tbody className=" border-[3px] border-[#012555] ">
        {props.tabledata?.map((data, index) => (
          <tr
            key={index}
            className={`bg-[#A2CFFE] hover:bg-[#97c5f7] transition-all`}
            >
            <td className="p-3 px-4  border-y border-[#012555] max-sm:text-sm">{data.name}</td>
            <td className="p-3 px-4 border-y border-[#012555] max-sm:text-sm">{data.city}</td>
            <td className="p-3 px-4 border-y border-[#012555] max-sm:text-sm">{data.division}</td>
            <td className="p-3 px-4 border-y border-[#012555] max-sm:text-sm">{data.conference}</td>
          </tr>
        ))}
      </tbody>
    </table>
     
  </div>
  );
};

export default Table;
