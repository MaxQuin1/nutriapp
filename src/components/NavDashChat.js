import React from 'react'

function NavDashChat() {
    return (
        <>
            <div className="fixed container">
                <aside
                    id="sidebar-multi-level-sidebar"
                    className="fixed top-0 left-0 z-40 w-64 sm:w-1/3 md:w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0"
                    aria-label="Sidebar"
                >
                    <div className="h-full px-2 py-2 overflow-y-auto bg-lime-100">
                        <ul className="space-y-2 font-medium">
                            <li className="flex items-center">
                                <button className="mt-5 p-2 rounded-full bg-purple-300">Paciente 1</button>
                            </li>
                            <li className="flex items-center">
                                <button className="p-2 rounded-full bg-purple-300">Paciente 2</button>
                            </li>
                            <li className="flex items-center">
                                <button className="p-2 rounded-full bg-purple-300">Paciente 3</button>
                            </li>
                            <li className="flex items-center">
                                <button className="p-2 rounded-full bg-purple-300">Paciente 4</button>
                            </li>
                            <li className="flex items-center">
                                <button className="p-2 rounded-full bg-purple-300">Paciente 5</button>
                            </li>
                            
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default NavDashChat
