import './App.css';
import Contacts from './Components/Contacts';
import SearchForm from './Components/SearchForm';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="content">
                    <div className="sidebar">
                        <div className="searchForm__container">
                            <SearchForm />
                        </div>
                        <Contacts />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
