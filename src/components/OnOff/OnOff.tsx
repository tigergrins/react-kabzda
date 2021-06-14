import React from 'react';

type OnOffPropsType = {
    value: boolean
    setOnOffValue: (value: boolean) => void
}

export function OnOff(props: OnOffPropsType) {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: props.value ? 'green' : 'white'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: props.value ? 'white' : 'red',
        marginLeft: '2px',
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '5px',
        background: props.value ? 'green' : 'red'
    }

    const switchOn = () => props.setOnOffValue(true)
    const switchOff = () => props.setOnOffValue(false)

    return (
        <div>
            <div style={onStyle} onClick={switchOn}>On</div>
            <div style={offStyle} onClick={switchOff}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )

}