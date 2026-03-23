import "./Toggle.css";

function Toggle({ setisOn, isOn }) {
    return (
        <div className="toggle">
            <p>Monthly</p>
            <div 
                className={`switch  ${isOn ? "on" : ""}`}
                onClick={() => setisOn(prev => !prev)}
            >
                <div className="circle"></div>
            </div>
            <p>Annually</p>
        </div>
    );
}

export default Toggle;