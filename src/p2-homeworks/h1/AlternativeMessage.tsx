import React from 'react'
import s from './Alter.module.css'

export type alterPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: alterPropsType) {
    return (
        <div className={s.message}>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

            <div className={s.angel}/>
            <img src={props.avatar} alt="avatar_image" className={s.avatar}/>

        </div>
    )
}

export default AlternativeMessage
