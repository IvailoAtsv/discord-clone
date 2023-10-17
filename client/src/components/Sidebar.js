import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaDiscord } from 'react-icons/fa'
import { Profile } from './Profile'



const Sidebar = ({ isVisible, setVisible }) => {
    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
         bg-primary text-secondary shadow-lg">
                <SideBarIcon text='Direct messages' icon={<FaDiscord size='28' />} />
                <span className='w-4/6 h-[1px] self-center bg-gray-600' />
                <div className=''>
                    <SideBarIcon icon={<FaFire size='28' />} />
                    <SideBarIcon icon={<BsFillLightningFill size='28' />} />
                    <SideBarIcon text='Add a Server' icon={<BsPlus size='28' />} />
                </div>
            </div>
            <Profile isVisible={isVisible} setVisible={setVisible} />
        </>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip' }) => {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className='tooltip group-hover:scale-100 z-50'>
                {text}
            </span>
        </div>
    )
}

export default Sidebar