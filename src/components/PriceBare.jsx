import pricingData from "../data";
import PrinceItem from "./PriceItem";
import "./PriceBare.css"

function PriceBare({ isOn }) {
    return (
        <div className="pricing">
            {pricingData.map((item, index) => (
                <PrinceItem
                    item = {item}
                    index = {index}
                    isOn = {isOn}
                />
            ))}
        </div>
    );
}

export default PriceBare;