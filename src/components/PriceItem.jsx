function PrinceItem({ item, index, isOn }) {
    return (
        <div className={`item${index}`}>
            <p>{item.plan}</p>
            <h1><span>$</span>{
                isOn ?
                    item.yearlyPrice :
                    item.monthlyPrice
                }
            </h1>
            <ul>
                {item.features.map(feature => (
                    <li>{feature}</li>
                ))}

            </ul>
            <button>Learn More</button>
    </div>
    );
}

export default PrinceItem;