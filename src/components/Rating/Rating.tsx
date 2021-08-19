import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star value={1} selected={props.value > 0} setRatingValue={props.setRatingValue}/>
            <Star value={2} selected={props.value > 1} setRatingValue={props.setRatingValue}/>
            <Star value={3} selected={props.value > 2} setRatingValue={props.setRatingValue}/>
            <Star value={4} selected={props.value > 3} setRatingValue={props.setRatingValue}/>
            <Star value={5} selected={props.value > 4} setRatingValue={props.setRatingValue}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRatingValue: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    const onClickHandler = () => props.setRatingValue(props.value)

    return <span onClick={onClickHandler}>{(props.selected) ? <b>star </b> : 'star '}</span>
}