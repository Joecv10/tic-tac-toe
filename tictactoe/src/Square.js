import React, { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  };
  return (
    <>
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </>
  );
};

/*class Square extends React.Component {
  render() {
    const [value, setValue] = useState(null);
    const handleClick = () => console.log("clicked!");
    return (
      <>
        <button className="square" onClick={handleClick}>
          {value}
        </button>
      </>
    );
  }
}*/

export default Square;