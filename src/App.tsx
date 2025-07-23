import './App.css'
import RedWelcomeBlock from './components/RedWelcomeBlock';

function App() {

    return (
        <>
            <RedWelcomeBlock type="UP" language="cs" text="vstoupit na web" />
            <RedWelcomeBlock type="DOWN" language="cs" text="enter the website" />
            <div className="name first-name">Štěpán</div><div className="name second-name">Hampl</div><div className="come-in-container"></div>
        </>
    )
}

export default App
