"use Client"
import { useEffect, useState } from "react";
useEffect(() => {
 //initialise the pixi app container here ?

  // 2. UNMOUNTING
  return () => {
   // will destroy the app here
  };
}, []); // Empty array ensures this setup and cleanup only run once

export default function Canvas() 
const [SpriteName,SetSpriteName] = useState("")
{
  return <div  className="canvasPixi p-4 border rounded-lg">Pixi Canvas Stub</div>;
}