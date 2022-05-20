import React, { useEffect } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { useState } from "react";
import axios from './axios';
function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/tinder");
            setPeople(req.data);
        }

        fetchData();
    },[]);
    console.log(people)
    const swiped = (nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log("removing: " + name);
    };

  return (
    <div className="tindercards">
        <div className="tindercards_container">
            {people.map((person) =>
                <TinderCard
                    className = "swipe"
                    key = {person.name}
                    preventSwipe = {["up","down"]}
                    onSwipe = {(dir) => swiped(dir,person.name)}
                    onCardLeftScreen = {() => outOfFrame(person.name)}
                >
                <div
                    style = {{backgroundImage: "url("+person.imgUrl+")"}}
                    className = "card"
                ><h3>{person.name}</h3></div>
                </TinderCard>
            )}
        </div>
    </div>
  );
}

export default TinderCards
