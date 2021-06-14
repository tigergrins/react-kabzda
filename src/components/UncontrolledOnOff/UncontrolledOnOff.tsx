import React, { useState } from "react";

type PropsType = {
    setOnOffValue: (value: boolean) => void
}

export function UncontrolledOnOff(props: PropsType) {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: on ? 'green' : 'white'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: on ? 'white' : 'red',
        marginLeft: '2px',
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '5px',
        background: on ? 'green' : 'red'
    }

    const switchOn = () => {
        setOn(true)
        props.setOnOffValue(true)
    }
    const switchOff = () => {
        setOn(false)
        props.setOnOffValue(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={switchOn}>On</div>
            <div style={offStyle} onClick={switchOff}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )

}