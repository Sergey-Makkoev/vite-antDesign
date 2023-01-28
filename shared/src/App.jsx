import './App.css'
import {CountProvider} from "app/store";

const App = () => (
    <CountProvider>
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div>Name: nav</div>
        </div>
    </CountProvider>
)

export default App
