import React from "react";
import { useState, useEffect } from "react";
import { statusConfig } from "./config/config";

const GroupingMain = ({ groupingOption }) => {
  const [tickets, setTickets] = useState([]);
  const[groupOption, setGroupOption] = useState("user");
  const [columns, setColumns] = useState([]);
  const [usersData,setUsersData] =  useState([]);
  const [sortingOption,setSortingOption] = useState("status");
  const priorityLabels = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
  };



useEffect(() => {
 console.log(true);
  fetch(
    "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
  )
    .then((response) => response.json())
    .then((data) => {
      setTickets(data.tickets);
      setUsersData(data.users);
      setGroupOption(groupingOption);
      });
  }, [groupingOption]);  // Empty dependency array to run the effect only once
// Empty dependency array to run the effect only once
useEffect(() => {
  // Call groupTickets function whenever tickets or groupOption changes
  groupTickets(tickets);
}, [tickets, groupOption]);


  // Function to group tickets based on the selected option
  const groupTickets = (ticketsData) => {
    // Helper function to sort tickets based on sortingOption
    const sortTickets = (tickets, sortingOption) => {
      return tickets.sort((a, b) => {
        if (sortingOption === "priority") {
          return b.priority - a.priority; // Sort by priority (descending order)
        } else if (sortingOption === "status") {
          return a.status.localeCompare(b.status); // Sort by status
        }
        return 0;
      });
    };
  
    // Group tickets based on the selected grouping option
    if (groupOption === "status") {
      // Group by status logic
      const groupedByStatus = {};
  
      ticketsData.forEach((ticket) => {
        const status = ticket.status;
  
        if (!groupedByStatus[status]) {
          groupedByStatus[status] = [ticket];
        } else {
          groupedByStatus[status].push(ticket);
        }
      });
  
      // Sort tickets within each status group
      Object.keys(groupedByStatus).forEach((status) => {
        groupedByStatus[status] = sortTickets(groupedByStatus[status], "priority");
      });
  
      const columns = Object.keys(groupedByStatus).map((status) => ({
        status,
        tickets: groupedByStatus[status],
      }));
  
      setColumns(columns);
    } else if (groupOption === "user") {
      // Group by user logic
      const groupedByUser = {};
  
      ticketsData.forEach((ticket) => {
        const id = ticket.userId;
  
        if (!groupedByUser[id]) {
          groupedByUser[id] = [ticket];
        } else {
          groupedByUser[id].push(ticket);
        }
      });
  
      // Sort tickets within each user group
      Object.keys(groupedByUser).forEach((userId) => {
        groupedByUser[userId] = sortTickets(groupedByUser[userId], "priority");
      });
  
      const columnsData = Object.keys(groupedByUser).map((userId) => ({
        userData: usersData.find((user) => user.id === userId),
        tickets: groupedByUser[userId],
      }));
  
      setColumns(columnsData);
    } else if (groupOption === "priority") {
      // Group by priority logic
      const groupedByPriority = {};
  
      ticketsData.forEach((ticket) => {
        const priority = ticket.priority;
  
        if (!groupedByPriority[priority]) {
          groupedByPriority[priority] = [ticket];
        } else {
          groupedByPriority[priority].push(ticket);
        }
      });
  
      // Sort tickets within each priority group
      Object.keys(groupedByPriority).forEach((priority) => {
        groupedByPriority[priority] = sortTickets(groupedByPriority[priority], "status");
      });
  
      // Update state with grouped and sorted data
      const columnsData = Object.keys(groupedByPriority).map((priority) => ({
        priority: parseInt(priority, 10),
        label: priorityLabels[priority], // Convert priority to integer
        tickets: groupedByPriority[priority],
      }));
  
      setColumns(columnsData);
    }
  };
  
  // Call the groupTickets function whenever tickets or groupOption changes
  useEffect(() => {
    groupTickets(tickets);
  }, [tickets, groupOption]);
  
  console.log(columns);
  
  console.log(columns);// Render your Kanban board components using the grouped data (columns)

  return (
    <section className="component-wrapper bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8 md:gap-6 lg:gap-15 h-screen p-5">
     {columns.map(column => (<div className="grouping-section-main flex flex-col gap-1">
        <div key={column.id} className="container-main flex justify-between items-center h-8vh pr-2 pl-2 pt-6 pb-6">
          {/* First Ticket */}
          <div className="left flex gap-2 justify-between items-center">
            {/* Icon and status text-base font-semibold text-black-700 */}
            <div className="icon-wrapper">
              {/* Replace the following SVG with your actual SVG code */}
              {statusConfig[column.status||column?.userData?.id || column.priority]}
            </div>
            <span className="status text-base font-semibold text-black-700">
            {column.status || column?.userData?.name|| column.label}
            </span>
            <span style={{ color: "gray" }}>{column?.tickets?.length || 0}</span>
          </div>
          <div className="right flex gap-2 justify-between items-center">
            {/* Icons */}
            <div className="icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "gray" }}
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
            </div>
            <div className="icon-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "gray" }}
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
              </svg>
            </div>
          </div>
          {/* Ticket Container */}
        </div>
       {column.tickets.map(ticket=>( <div className="ticket-container flex flex-col gap-2">
          <div className="ticket-main flex flex-col gap-0.5 px-3 py-4 w-full rounded-md bg-white shadow-md border border-gray-300">
            <div className="top-line flex justify-between item-center">
              <span>{ticket.id}</span>
              {statusConfig[ticket.userId]}
            </div>
            <div className="middle-line flex items-start  gap-2 content-center">
              <div>
               {statusConfig[ticket.status]}
              </div>
              <p>{ticket.title}</p>
            </div>
            <div className="bottom-line flex items-center mt-2 gap-1">
              {/* Tag */}
              {groupOption === "priority" ? null : (
  <div className="icon-wrapper">
    {statusConfig[ticket.priority]}
  </div>
)}
              
              <div
                className="tag-wrapper"
                style={{
                  fontSize: "0.85rem",
                  padding: "1px 0",
                  color: "#8D8D8D",
                }}
              >
                <div
                  className="tag flex gap-1 items-center"
                  style={{
                    border: "1px solid #e6e7eb",
                    borderRadius: "3px",
                    padding: "1px 5px",
                  }}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12"
                      width="12"
                      viewBox="0 0 512 512"
                      style={{ color: "gray" }}
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                    </svg>
                  </div>
                  <span>{ticket.tag}</span>
                </div>
              </div>
            </div>
          </div>
        </div>))}
       
      </div>))} 
    </section>
  );
};

export default GroupingMain;
