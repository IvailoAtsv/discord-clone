import { TopicSelection } from "./Channels"
import person from './images/person.jpg'
import person3 from './images/person3.jpg'
import person2 from './images/person2.jpg'

const ChatBox = ({ current, channel }) => {
    return (
        <div className="bg-gray-700 h-screen w-full flex flex-col items-center justify-between overflow-hidden">
            <TopBar channel={channel} />
            <ChatArea />
            <MessageBar />
        </div>
    )
}

const TopBar = ({ channel }) => {
    return (
        <div className="px-14 w-full h-16 shadow-md flex justify-between items-center">
            <TopicSelection selection={channel} />
            <input placeholder="Search" className="pl-2 justify-self-end bg-gray-900 rounded-md w-36 h-8" />
        </div>
    )
}

const ChatArea = ({ messages }) => {
    return (
        <div className="h-full md:px-8 px-14 w-full overflow-y-auto gap-3">
            <Message pic={person} name='John Doe' message='Hello guys!' />
            <Message pic={person2} name='Mary Doe' message='Hey! Whats up?' />
            <Message pic={person3} name='Will Doe' message='Hi!' />
        </div>
    )
}

const Message = ({ pic, name, message }) => {
    return (
        <div className="h-auto w-full px-8 flex py-5">
            <img className="w-12 h-12 rounded-full" src={pic} />
            <div className="pl-4 flex flex-col w-full h-full text-white">
                <h2 className="font-bold">{name}</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}

const MessageBar = () => {
    return (
        <input placeholder="Message" className="text-white w-[96%] h-12 rounded-md mb-4 mt-1 px-4 bg-gray-600" />

    )
}


export default ChatBox