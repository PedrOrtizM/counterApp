import { PropTypes } from "prop-types";
import { useState } from "react";



export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {

        setCounter((previous) => previous + 1)
    }

    const handleSub = () => setCounter(counter - 1);

    const handleReset = () => setCounter(value);

    return (
        <>
            <h1> CouterApp!! </h1>
            <hr />
            <div className="container">
                <button onClick={ handleSub } > -1  </button>
                <h2> {counter}</h2>
                <button onClick={ handleAdd } > +1  </button>
            </div>
            <button onClick={ handleReset } > Reset </button>

        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
}




