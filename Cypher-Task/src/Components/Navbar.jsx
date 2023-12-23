import { useState } from "react";

export default function Navbar({ groupingOption, updateGroupingOption, toggleTheme }) {
    const [show , setShow] =  useState(false);
    const handleGroupingChange = (event) => {
        const newOption = event.target.value;
        updateGroupingOption(newOption);
      };
    
  return (
    <>
      <section className="navbar-main ">
        <nav className="nav flex justify-between pt-4 pb-4 pr-5 pl-5">
          <div className="display-switch-wrapper ">
            <div
              className="display-switch flex justify-between items-center gap-3 pl-2 pr-2 pt-1 pb-1 shadow-lg rounded-md"
              style={{
                color: "#373737",
                boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.1)",
                cursor:"pointer",
              }}
              onClick={()=>{setShow(!show)}}
            >
              <div className="switch-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"
                  ></path>
                </svg>
              </div>
              Display
              <div className={`dropdown-icon ${show ? 'rotate-180' : ''}`}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </div>
            </div>
           {show && (<div
              className="dropdown-wrapper absolute mt-2 flex flex-col gap-5 p-5 border-radius-8 overflow-hidden transition-max-height-300 ease-in-out bg-white border-1 border-gray-300 shadow-md"
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                transition: "max-height 0.3s ease-in-out",
                backgroundColor: "#ffff",
                border: "1px solid #e6e7eb",
                boxShadow: "0 0 8px 0 #0000001a",
                zIndex: "1",
              }}
            >
              {/* Grouping dropdown */}
              <div className="dropping-item flex justify-between items-center gap-16">
                <span>Grouping</span>
                <select
                  className="p-2 border rounded-md"
                  style={{
                    backgroundColor: " #ffff",
                    textTransform: "capitalize",
                    outline: "none",
                    cursor: "pointer",
                    fontSize: "1rem",
                    color: "#373737",
                    padding: "0.2rem 2rem 0.2rem 0.5rem",
                    border: "1px solid #e6e7eb",
                    borderRadius: "6px",
                  }}
                  value={groupingOption}
                  onChange={handleGroupingChange}
                >
                   <option value="user">User</option>
  <option value="priority">Priority</option>
  <option value="status">Status</option>
                </select>
              </div>

              <div className="dropping-item flex justify-between items-center gap-16">
                <span>Sorting</span>
                <select
                  className="p-2 border rounded-md"
                  style={{
                    backgroundColor: " #ffff",
                    textTransform: "capitalize",
                    outline: "none",
                    cursor: "pointer",
                    fontSize: "1rem",
                    color: "#373737",
                    padding: "0.2rem 2rem 0.2rem 0.5rem",
                    border: "1px solid #e6e7eb",
                    borderRadius: "6px",
                  }}
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>)}
          </div>
          <button className="theme-switch-wrapper" onClick={toggleTheme}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path>
            </svg>
          </button>
        </nav>
      </section>
    </>
  );
}
