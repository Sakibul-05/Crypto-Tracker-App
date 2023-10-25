// import React from 'react'
// import "./styles.css"

// const Button = ({text, onClick, outline}) => {
//   return (
//     <div className={outline? 'outline-btn': 'btn'} onClick={()=>onClick()}>
//       {text}
//     </div>
//   )
// }

// export default Button


import React from 'react';
import Button from '@mui/material/Button';

const BasicButton = ({text, variant})=> {
  return (
      <Button variant={variant}>{text}</Button>
  );
}

export default BasicButton;
