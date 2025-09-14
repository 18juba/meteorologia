import React from 'react'

import { Clock, User, Bell } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="p-6 bg-white/4 h-full w-fit">
        <ul className="flex flex-col items-center gap-6 text-white">
            <Clock size={30}/>
            <User size={30}/>
            <Bell size={30}/>
        </ul>
    </div>
  )
}

export default Sidebar