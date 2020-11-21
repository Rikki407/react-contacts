import './App.css';
import Contacts from './Components/Contacts';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="content">
                    <div className="sidebar">
                        {/* search form */}
                        <Contacts />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
