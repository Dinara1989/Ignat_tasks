import React, {useState} from 'react'
import Affairs from './Affairs'
import affair from "./Affair";

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any +
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
} // need to fix any +
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any +
    {_id: 1, name: 'REACT', priority: 'high'},
    {_id: 2, name: 'JS', priority: 'low'},
    {_id: 3, name: 'HTML & CSS', priority: 'low'},
    {_id: 4, name: 'TYPESCRIPT', priority: 'high'},
    {_id: 5, name: 'REDUX', priority: 'middle'},
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[]  => { // need to fix any+
    if (filter === 'all') return affairs
    else return affairs.filter(a => a.priority === filter)
    // need to fix+
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any+
    return affairs.filter(a => a._id !== _id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any+
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any+

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
