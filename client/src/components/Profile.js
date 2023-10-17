import person from '../images/person.jpg'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { AiFillMinusCircle } from 'react-icons/ai'
import { useState } from 'react'
import { ChevronIcon } from './Channels'
import { BsIncognito } from 'react-icons/bs'

import uniqid from 'uniqid';


export const Profile = ({ isVisible, setVisible }) => {


    const [expanded, setExpanded] = useState(true);
    const [activity, setActivitty] = useState('Online')
    const [icon, setIcon] = useState(<RiCheckboxCircleFill />)

    const handleActivity = (e) => {
        setActivitty(e.currentTarget.querySelector('p').innerText)
        let res = activityModes.find(el => e.currentTarget.querySelector('p').innerText === el.message)
        setIcon(res.icon)

        setExpanded(!expanded)

    }

    const activityModes = [
        {
            icon: <RiCheckboxCircleFill />,
            message: 'Online'

        },
        {
            icon: <AiFillMinusCircle />,
            message: 'Do Not Disturb',
        },
        {
            icon: <BsIncognito />,
            message: 'Invisible',
        }
    ]
    const style = `${expanded ? 'flex' : 'hidden'} flex-col text-white`
    const mainStyle = `${isVisible ? 'flex' : 'hidden'} w-[350px] flex flex-col justify-between items-center absolute h-[450px] ml-8 rounded-md bottom-0 mb-16 z-50 bg-gray-900 `
    return (
        <>
            <div className={mainStyle}>
                <span className="bg-gray-600 rounded-t-md w-full h-16">
                    <img src={person} className='w-[84px] h-[84px] rounded-full relative ml-6 top-5' />
                </span>
                <div className="flex flex-col p-2 bg-primary h-[70%] rounded-md mb-4 w-[90%]">
                    <div className='p-2 text-white'>
                        <h1 className='font-bold text-lg'>User</h1>
                        <p>user tag</p>
                        <div className='bg-gray-700 mt-2 w-[96%] h-[1px]'></div>
                    </div>
                    <div className='p-2 text-white'>
                        <h1 className='font-bold'>Discord member since</h1>
                        <p>dd/mm/yy</p>
                        <div className='bg-gray-700 mt-2 w-[96%] h-[1px]'></div>
                    </div>
                    <div onClick={() => setExpanded(!expanded)} className='p-2 flex items-start text-white gap-2 justify-between'>
                        <div className='flex items-center justify-start gap-2'> {icon} {activity}</div>
                        <ChevronIcon expanded={expanded} />
                    </div>
                    <div className={style}>
                        {activityModes.map(el =>
                            <Activity
                                handleActivity={handleActivity}
                                key={uniqid()} icon={el.icon} message={el.message} />)}
                    </div>
                    <btn className="bg-secondary absolute bottom-8 self-center text-center text-white mt-2 w-10/12 px-2 rounded-md">Log out</btn>
                </div>
            </div>

        </>
    )
}

const Activity = ({ icon, message, handleActivity }) => {
    return (
        <div onClick={(e) => handleActivity(e)} className='hover:bg-gray-700 flex items-center px-2 rounded-md justify-start gap-2'>
            <i>{icon}</i>
            <p>{message}</p>
        </div>
    )
}