import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import uniqid from 'uniqid';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const headersList = [
    {
        selections: topics,
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
    console.log(props.setChannel);
    return (
        <div className='channel-bar shadow-lg'>
            <ChannelBlock />
            <div className='channel-container'>
                {headersList.map(el =>
                    <Dropdown key={uniqid()} setChannel={props.setChannel} header={el.headers} selections={el.selections} />)}
            </div>
        </div>
    );
};

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

const ChevronIcon = ({ expanded }) => {
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
    <div className='channel-block'>
        <h5 className='channel-block-text'>Channels</h5>
    </div>
);

export default ChannelBar;
