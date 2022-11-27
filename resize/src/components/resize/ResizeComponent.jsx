// import React from "react";
// import { render } from "react-dom";
// import { Rnd } from "react-rnd";

// const style = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   border: "solid 1px #ddd",
//   background: "#f0f0f0"
// };

// export const ResizeComponent=()=> {
// const [state,setState]=({
//     width: 200,
//       height: 200,
//       x: 10,
//       y: 10
// })
   

//   const handleDragStop=(e,d)=>{
//     setState({ x: d.x, y: d.y });
//   }
//   const handleResizeStop=(e, direction, ref, delta, position)=>{
//     setState({
//             width: ref.style.width,
//             height: ref.style.height,
//             ...position
//           });
//   }
//     return (
//       <Rnd
//         style={style}
//         size={{ width: state.width, height: state.height }}
//         position={{ x: state.x, y: state.y }}
//         onDragStop={()=>handleDragStop(e,d)}
   
//         onResizeStop={()=>handleResizeStop(e, direction, ref, delta, position)}
//       >
//         Rnd
//       </Rnd>
//     );
  
//     }


