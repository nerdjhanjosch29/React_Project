
// // import {} from 'react-router-dom'

import Spline from '@splinetool/react-spline';
// import { useEffect, useState, useRef } from 'react';
// // export default function Home() {
// function HomePage()  {
//     const [count, setCount] = useState(0);
//   const Handleincrement = () => {
//     setCount(count + 1); 

//     useEffect(() =>{

//       if(buttonRef.current){
//         setTimeout (() =>{
//           buttonRef.current.display ='none'
//         },3000);
//       }
//     },[])
//   };

//   const buttonRef = useRef(null)
//       return (
//         <div>
//           <p>Count: {count}</p>
//           <button ref={buttonRef} onClick={Handleincrement}>Increment</button>
//         </div>
//       )
//   }export default HomePage
import {  useState, useRef, useMemo } from 'react';
function HomePage() {
const [count, setCount] = useState(0);
const [count2, setCount2] = useState(0);
const buttonRef = useRef(null);    
// Empty dependency array means it runs only once after the initial render
const Increment = () => setCount(count + 1); 
const Increment2 = () => setCount2(count2 + 1); 
const compute = () => {
 console.log("compute: computing")
 }
 const memoizedCompute = useMemo(() =>{
  console.log("memoizedCompute: computing")
 },[])
  return (
    <div>
      <p>Count: {count}</p>
         <p>Count: {count2}</p>
         compute: {compute()}
         com: {memoizedCompute}
      <button className="btn btn-primary" ref={buttonRef} onClick={Increment}>Increment</button><br />
         <button className="btn btn-primary" onClick={Increment2}>Increment2</button>
          <main>
           <Spline
      scene="https://prod.spline.design/USINgjtxS4sjQa0c/scene.splinecode" 
      
          />
        </main>
    </div>

 
  );
}export default HomePage;