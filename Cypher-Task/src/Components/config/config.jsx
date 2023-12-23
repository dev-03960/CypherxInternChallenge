export const statusConfig = {
  "In progress": (
    <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className="icon"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: "rgb(245, 200, 66)" }}
  >
    <path d="M12 2h-1v9H2v1a10 10 0 0 0 17.07 7.07A10 10 0 0 0 12 2z"></path>
  </svg>
  
  ),
  "Todo": (
    <svg
  stroke="currentColor"
  fill="none"
  strokeWidth="2"
  viewBox="0 0 24 24"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="icon"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
  style={{ color: "gray" }}
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
</svg>

  ),
 "Backlog": (
  <svg
  stroke="currentColor"
  fill="none"
  strokeWidth="2"
  viewBox="0 0 24 24"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="icon"
  height="1em"
  width="1em"
  xmlns="http://www.w3.org/2000/svg"
  style={{ color: "gray" }}
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7.5 4.21l0 .01"></path>
  <path d="M4.21 7.5l0 .01"></path>
  <path d="M3 12l0 .01"></path>
  <path d="M4.21 16.5l0 .01"></path>
  <path d="M7.5 19.79l0 .01"></path>
  <path d="M12 21l0 .01"></path>
  <path d="M16.5 19.79l0 .01"></path>
  <path d="M19.79 16.5l0 .01"></path>
  <path d="M21 12l0 .01"></path>
  <path d="M19.79 7.5l0 .01"></path>
  <path d="M16.5 4.21l0 .01"></path>
  <path d="M12 3l0 .01"></path>
</svg>

  ),
  0: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      className="icon"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'gray' }}
    >
      <path d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"></path>
    </svg>
  ),
  1: (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'gray' }}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M2 20h.01"></path>
      <path d="M7 20v-4"></path>
    </svg>
  ),
  2: (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'gray' }}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M2 20h.01"></path>
      <path d="M7 20v-4"></path>
      <path d="M12 20v-8"></path>
    </svg>
  ),
  3: (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'gray' }}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M2 20h.01"></path>
      <path d="M7 20v-4"></path>
      <path d="M12 20v-8"></path>
      <path d="M17 20V8"></path>
    </svg>
  ),
  4: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      className="icon"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: 'rgb(245, 138, 66)' }}
    >
      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
    </svg>
  ),
  "usr-1": (
    <div
      className="user-icon inline-flex justify-center items-center rounded-full text-white text-xs font-normal relative "
      style={{
        backgroundColor: "rgb(46, 64, 83)",
        borderRadius: "50%",
        width: "15px",
        height: "15px",
        padding:"0.5rem",
      }}
    >
      <div>AS</div>
      <div
        className="available-icon"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "5px",
          height: "5px",
          backgroundColor: "#3498db",
          borderRadius: "50%",
          border: "1px solid white",
        }}
      ></div>
    </div>
  ),
  "usr-2": (
    <div
      className="user-icon inline-flex justify-center items-center rounded-full text-white text-xs font-normal relative"
      style={{
        backgroundColor: "rgb(46, 64, 83)",
        borderRadius: "50%",
        width: "15px",
        height: "15px",
      }}
    >
      <div>Y</div>
      <div
        className="available-icon"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "5px",
          height: "5px",
          backgroundColor: "#3498db",
          borderRadius: "50%",
          border: "1px solid white",
        }}
      ></div>
    </div>
  ),
  "usr-3": (
    <div
      className="user-icon inline-flex justify-center items-center rounded-full text-white text-xs font-normal relative"
      style={{
        backgroundColor: "rgb(241, 196, 15)",
        borderRadius: "50%",
        width: "15px",
        height: "15px",
      }}
    >
      <div>SK</div>
      <div
        className="available-icon"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "5px",
          height: "5px",
          backgroundColor: "#3498db",
          borderRadius: "50%",
          border: "1px solid white",
        }}
      ></div>
    </div>
  ),
  "usr-4": (
    <div
      className="user-icon inline-flex justify-center items-center rounded-full text-white text-xs font-normal relative"
      style={{
        backgroundColor: "rgb(88, 24, 69)",
        borderRadius: "50%",
        width: "15px",
        height: "15px",
      }}
    >
      <div>R</div>
      <div
        className="available-icon"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "5px",
          height: "5px",
          backgroundColor: "#3498db",
          borderRadius: "50%",
          border: "1px solid white",
        }}
      ></div>
    </div>
  ),
  "usr-5": (
    <div
      className="user-icon inline-flex justify-center items-center rounded-full text-white text-xs font-normal relative"
      style={{
        backgroundColor: "rgb(88, 24, 69)",
        borderRadius: "50%",
        width: "15px",
        height: "15px",
        padding: "0.5rem"
      }}
    >
      <div>S</div>
      <div
        className="available-icon"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "5px",
          height: "5px",
          backgroundColor: "#3498db",
          borderRadius: "50%",
          border: "1px solid white",
        }}
      ></div>
    </div>
  ),
};
