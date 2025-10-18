// import React, { useState } from "react";

// function ToggleMessage() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide" : "Show"}
//       </button>

//       {show && <h2>Welcome to React!</h2>}
//     </div>
//   );
// }

// export default ToggleMessage;

import React, { useState } from "react";

function WelcomeToggle() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleToggle}>
        {isVisible ? "Hide Welcome Message" : "Show Welcome Message"}
      </button>

      {isVisible && <h2>Hello! Welcome to the React App 🚀</h2>}
    </div>
  );
}

export default WelcomeToggle;
