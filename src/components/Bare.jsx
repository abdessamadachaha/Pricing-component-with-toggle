import { useState } from "react";
import Toggle from "./Toggle";
import "./Bare.css";
import PriceBare from "./PriceBare";
import bottom from "../assets/bg-bottom.svg";
import top from "../assets/bg-top.svg";

function Bare() {
    const [isOn, setisOn] = useState(false);

    return (
        <div className="bare">
            <div className="images">
                <img src={bottom} alt="" />
                <img src={top} alt="" />
                
            </div>
            <h2>our pricing</h2>
            <Toggle 
                setisOn = {setisOn}
                isOn = {isOn}
            />
            <PriceBare 
                isOn = {isOn}
            />

        </div>
    );
}

export default Bare;