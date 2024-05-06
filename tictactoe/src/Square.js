import React, { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  //   const [value, setValue] = useState(null);
  //const handleClick = () => {
  //setValue("X");
  /*if (value === null) {
      setValue("X");
    } else {
      setValue(null);
    }*/
  //};
  return (
    <>
      <button className="square" onClick={onSquareClick}>
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
