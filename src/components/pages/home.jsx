import React from 'react'
import { HomeHeader } from '../headers'
import TaskList, { Filter } from '../homePage/taskList'

export default function HomePage() {
        return (
                <div>
                        <HomeHeader/>
                        <div className='py-10 px-5'>
                                <TaskList/>
                        </div>
                </div>
        )
}
