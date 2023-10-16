import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
         bg-primary text-secondary shadow-lg">
            <SideBarIcon icon={<FaFire size='28' />} />
            <SideBarIcon icon={<BsPlus size='28' />} />
            <SideBarIcon icon={<BsFillLightningFill size='28' />} />
            <SideBarIcon icon={<FaPoo size='28' />} />
        </div>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip' }) => {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className='tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

export default Sidebar