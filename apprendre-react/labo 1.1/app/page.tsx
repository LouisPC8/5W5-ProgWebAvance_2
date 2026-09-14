'use client';

import {useState}from "react";
import { Towel } from "./_types/towel";

export default function Home() {

  const[myWisdom,setMyWisdom] = useState("ouioui baguette");
  const[n,setN] = useState(14)
  var[myTowel,setMyTowel] = useState(new Towel(
    "green",
    1.2,
    "towel_image.jpg",
    true
    ));

  return(
  <div className="m-auto w-3xl">
    <div className="flex mt-1">
      <div className="flex-1 p-1 bg-blue-100">
        {n}
      </div>
      <div className="flex-3 p-1 bg-red-100">
        {myWisdom}
      </div>
    </div>
    <div className="flex mt-1">
      <div className="flex-1 p-1 nouvelle">
        Gauche
      </div>
      <div className="flex-3 p-1 bg-red-100">
        Droite
      </div>
    </div>
    <div className="flex mt-1">
      <div className="flex-1 p-1 nouvelle">
        Gauche
      </div>
      <div className="flex-3 p-1 bg-red-100">
        <div>J'ai une belle serviette{myTowel.color} de {myTowel.length} mètres</div>
        <div>{myTowel.use()}</div>
        <img src={"/images/" +myTowel.image} alt="towel" />      
        </div>
    </div>
  </div>
  );
}
