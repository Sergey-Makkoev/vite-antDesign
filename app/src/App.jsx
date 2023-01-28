import './App.css'
import Header from "shared/Header";

import {useCount} from "app/store";

function App() {
    const [count, setCount] = useCount();
    return (
        <>
            <Header />
            <div style={{height: "500px", width: "800px"}}></div>
            <div>FROM HOST APP {count}</div>
            <div style={{backgroundColor: "green"}}>
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
                >
                    BTN FROM HOST APP
                </button>
            </div>
        </>
    );
}

export default App
