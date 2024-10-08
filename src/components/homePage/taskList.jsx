'use client'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import { Label, Paragraph, SubTitle } from '../text'
import { taskList } from '@/constants/taskList'
import Link from 'next/link'

export default function TaskList() {

        const [selectedLevel, setSelectedLevel] = useState('All')

        const filteredTasks = taskList.filter(task =>
                selectedLevel === 'All' || task.level === selectedLevel
        )

        return (
                <>
                        <Filter 
                                setSelectedLevel={setSelectedLevel} 
                                selectedLevel={selectedLevel} 
                        />
                        <MobileFilter
                                setSelectedLevel={setSelectedLevel}
                                selectedLevel={selectedLevel}
                        />
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 justify-items-center'>
                                {filteredTasks.map(( item, key ) => (
                                        <Fragment 
                                                key={key}
                                        >
                                                <Card {...item} />
                                        </Fragment>
                                ))}
                        </div>
                </>
        )
}

const MobileFilter = ({ setSelectedLevel, selectedLevel }) => {
        return (
                <div className='sticky top-5 left-0 md:hidden flex z-10'>
                        <select
                                value={selectedLevel}
                                onChange={(event) => setSelectedLevel(event.target.value)}
                                className="bg-sky-950 text-white rounded-full px-4 py-2 mb-10 w-full  overflow-hidden"
                        >
                                <option value="All">All</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Beginner-Intermediate">Beginner-Intermediate</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Intermediate-Advanced">Intermediate-Advanced</option>

                                <option value="Advanced">Advanced</option>
                        </select>
                </div>
        );
}

export const Filter = ({ setSelectedLevel, selectedLevel }) => {

        const handleFilterClick = (level) => {
                setSelectedLevel(level)
        }

        return (
                <div className='sticky top-5 left-0 hidden md:flex gap-2 lg:gap-5 justify-between bg-sky-950 rounded-full mb-10 z-10 overflow-hidden'>
                        <FilterBtn 
                                level={`All`} 
                                label={`All`} 
                                selectedLevel={selectedLevel} 
                                handleFilterClick={handleFilterClick}
                        />
                        <FilterBtn 
                                level={`Beginner`} 
                                label={`Beginner`} 
                                selectedLevel={selectedLevel} 
                                handleFilterClick={handleFilterClick}
                        />
                        <FilterBtn 
                                level={`Beginner-Intermediate`} 
                                label={`Beginner-Intermediate`} 
                                selectedLevel={selectedLevel} 
                                handleFilterClick={handleFilterClick}
                        />
                        <FilterBtn 
                                level={`Intermediate`} 
                                label={`Intermediate`} 
                                selectedLevel={selectedLevel} 
                                handleFilterClick={handleFilterClick}
                        />
                        <FilterBtn 
                                level={`Intermediate-Advanced`} 
                                label={`Intermediate-Advanced`} 
                                selectedLevel={selectedLevel} 
                                handleFilterClick={handleFilterClick}
                        />
                        <FilterBtn 
                                level={`Advanced`} 
                                label={`Advanced`} 
                                selectedLevel={selectedLevel} 
                                handleFilterClick={handleFilterClick}
                        />
                </div>
        )
}

const FilterBtn = ({ label, level, selectedLevel, handleFilterClick }) => {

        const isActive = selectedLevel === level

        return (
                <div
                        className={`grid place-content-center flex-1 text-center py-2 px-5 cursor-pointer transition-colors duration-300 ${isActive ? 'bg-sky-300' : 'bg-transparent'}`}
                        onClick={() => handleFilterClick(level)}
                >
                        <span
                                className={`${isActive ? 'text-sky-900' : 'text-sky-100'} font-semibold text-center text-base lg:text-lg transition-colors duration-300`}
                        >
                                {label}
                        </span>
                </div>
        )
}

const Card = ({ image, title, aspectOfProgramming, importantClue, slug }) => {
        return (
                <div className='max-w-md overflow-hidden rounded-2xl bg-sky-100 group'>
                        <div className='overflow-hidden aspect-video z-[1]'>
                                <Image 
                                        {...image}
                                        className='size-full transition-all duration-300 group-hover:scale-110'
                                />
                        </div>
                        <div className='grid gap-2 p-5'>
                                <SubTitle
                                        className={`text-2xl font-bold`}
                                        label={title}
                                />
                                <div>
                                        <Label 
                                                className={`text-xl font-medium inline pr-1`}
                                                label={'Aspect:'}
                                        />
                                        <Paragraph 
                                                className={`inline`}
                                                label={aspectOfProgramming}
                                        />
                                </div>
                                <div>
                                        <Label
                                                className={`text-xl font-medium inline pr-1`}
                                                label={'Clue:'}
                                        />
                                        <Paragraph 
                                                className={`inline`}
                                                label={importantClue}
                                        />
                                </div>
                                <Link 
                                        href={slug} 
                                        title={title}
                                        target='_blank'
                                        className='text-sky-500'
                                >
                                        View project
                                </Link>
                        </div>
                </div>
        )
}