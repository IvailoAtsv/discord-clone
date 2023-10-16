import { TopicSelection } from "./Channels"
import person from './images/person.jpg'
import person3 from './images/person3.jpg'
import person2 from './images/person2.jpg'

const ChatBox = ({ current }) => {
    return (
        <div className="bg-gray-700 h-screen w-full flex flex-col items-center justify-between overflow-hidden">
            <TopBar current={current} />
            <ChatArea />
            <MessageBar />
        </div>
    )
}

const TopBar = () => {
    return (
        <div className="px-14 w-full h-16 shadow-md flex justify-between items-center">
            <TopicSelection selection='random' />
            <input placeholder="Search" className="pl-2 justify-self-end bg-gray-900 rounded-md w-36 h-8" />
        </div>
    )
}

const ChatArea = ({ messages }) => {
    return (
        <div className="h-full md:px-8 px-14 w-full overflow-y-auto gap-3">
            <Message pic='https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' name='John Doe' message='Hello guys!' />
            <Message pic='https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' name='Mary Doe' message='Hey! Whats up?' />
            <Message pic='https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80' name='Will Doe' message='Hi!' />
        </div>
    )
}

const Message = ({ pic, name, message }) => {
    return (
        <div className="h-auto w-[95%] px-8 flex py-5">
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
        <input placeholder="Message" className="text-white w-11/12 h-12 rounded-md mb-4 mt-1 px-4 bg-gray-600" />

    )
}


export default ChatBox