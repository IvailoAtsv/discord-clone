import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaHeadphones, FaPlus, FaRegUserCircle } from 'react-icons/fa';
import { BsFillMicFill } from 'react-icons/bs'
import { IoMdSettings } from 'react-icons/io'

import uniqid from 'uniqid';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const headersList = [
    {
        //channels
        selections: topics,
        //category of channels
        headers: 'Topics'
    },
    {
        selections: questions,
        headers: 'Questions'
    },
    {
        selections: random,
        headers: 'Random'
    },]

const ChannelBar = (props) => {
    return (
        <div className='w-72 flex flex-col justify-between min-h-screen m-0 ml-16 bg-gray-200 dark:bg-gray-800 overflow-y-auto shadow-lg'>
            <ChannelBlock className="z-0" />
            <div className='channel-container mt-16'>
                {headersList.map(el =>
                    <Dropdown key={uniqid()} setChannel={props.setChannel} header={el.headers} selections={el.selections} />)}
            </div>
            <ProfileBar isVisible={props.isVisible} setVisible={props.setVisible} />
        </div>
    );
};

const ProfileBar = ({ setVisible, isVisible }) => {
    return (
        <div className='bg-gray-800 flex items-center justify-evenly relative w-full overflow-hidden h-16'>
            <div onClick={() => setVisible(!isVisible)} className='flex items-center justify-around gap-2'>
                <FaRegUserCircle size={28} className='text-gray-400 hover:text-white transition-all' />
                <p className='text-white text-sm'>User</p>
            </div>
            <div className='flex text-gray-400 items-center gap-3'>
                <BsFillMicFill size={18} className='hover:text-white transition-all' />
                <FaHeadphones size={18} className='hover:text-white transition-all' />
                <IoMdSettings size={18} className='hover:text-white transition-all' />
            </div>
        </div>
    )
}

const Dropdown = ({ header, selections, setChannel }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className='dropdown'>
            <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
                <ChevronIcon expanded={expanded} />
                <h5
                    className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
                >
                    {header}
                </h5>
                <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
            </div>
            {expanded &&
                selections &&
                selections.map((selection) => <TopicSelection key={uniqid()} setChannel={setChannel} selection={selection} />)}
        </div>
    );
};

export const ChevronIcon = ({ expanded }) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
    return expanded ? (
        <FaChevronDown size='14' className={chevClass} />
    ) : (
        <FaChevronRight size='14' className={chevClass} />
    );
};

export const TopicSelection = ({ selection, setChannel }) => (
    <div className='dropdown-selection' onClick={() => setChannel(selection)}>
        <BsHash size='24' className='text-gray-400' />
        <h5 className='dropdown-selection-text text-white'>{selection}</h5>
    </div>
);

const ChannelBlock = () => (
    <div className='channel-block absolute top-0'>
        <h5 className='channel-block-text'>Channels</h5>
    </div>
);

export default ChannelBar;
