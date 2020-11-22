import './App.css';
import { DetailProvider } from './ChatboxContext';
import ChatboxHeader from './Components/ChatboxHeader';
import Contacts from './Components/Contacts';
import MessageBody from './Components/MessageBody';
import MessageForm from './Components/MessageForm';
import SearchForm from './Components/SearchForm';

function App() {
    return (
            <DetailProvider>
        <div className="App">
                <div className="wrapper">
                    <div className="content">
                        <div className="sidebar">
                            <SearchForm />
                            <Contacts />
                        </div>

                        <div className="chatbox">
                            <ChatboxHeader />
                            <MessageBody />
                            <MessageForm />
                        </div>
                    </div>
                </div>
        </div>
            </DetailProvider>
    );
}

export default App;
