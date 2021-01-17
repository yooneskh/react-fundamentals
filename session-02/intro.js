import React from 'react';

export default function MyCounter() {

    const [counterNumber, setCounterNumber] = useState(0);

    return <div>
        <p>My Counter Is: { counterNumber }</p>
        <button type="button" onClick={() => setCounterNumber(counterNumber + 1)}>Increase Counter</button>
    </div>

}