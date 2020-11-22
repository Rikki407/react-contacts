import './App.css';
import ChatboxHeader from './Components/ChatboxHeader';
import Contacts from './Components/Contacts';
import MessageBody from './Components/MessageBody';
import MessageForm from './Components/MessageForm';
import SearchForm from './Components/SearchForm';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="content">
                    <div className="sidebar">
                        <SearchForm />
                        <Contacts />
                    </div>
                    <div className="chatbox">
                        <ChatboxHeader
                            imgSrc="http://vzkiss.com/demo/chatbox/images/avatar/avatar_2.jpeg"
                            name="Debby Jones"
                        />
                        <MessageBody />
                        <MessageForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
