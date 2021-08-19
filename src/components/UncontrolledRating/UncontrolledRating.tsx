import React, {useState} from 'react';

export function UncontrolledRating() {
    let [value, setValue] = useState(0)

    return (
        <div>
            {/*<h2>UncontrolledRating</h2>*/}
            <Star value={1} selected={value > 0} setValue={setValue}/>
            <Star value={2} selected={value > 1} setValue={setValue}/>
            <Star value={3} selected={value > 2} setValue={setValue}/>
            <Star value={4} selected={value > 3} setValue={setValue}/>
            <Star value={5} selected={value > 4} setValue={setValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {
    const onClickHandler = () => {
        props.setValue(props.value)
    }

    return <span onClick={onClickHandler}>{(props.selected) ? <b>star </b> : 'star '}</span>
}