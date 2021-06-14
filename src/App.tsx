import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {PageTitle} from './components/PageTitle/PageTitle';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onOffValue, setOnOffValue] = useState<boolean>(true)

    const changeAccordionCollapsed = () => setAccordionCollapsed(!accordionCollapsed)

    return (
        <div className={'App'}>
            <PageTitle title={'React — кабзда как просто!'}/>

            <Accordion titleValue={'Accordion #1'} collapsed={accordionCollapsed}
                       changeAccordionCollapsed={changeAccordionCollapsed}/>

            {/*<Accordion titleValue={'Accordion #2'} collapsed={accordionCollapsed} changeAccordionCollapsed={changeAccordionCollapsed}/>*/}

            <h2>Ratings</h2>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            {/*<Rating value={ratingValue} setRatingValue={setRatingValue}/>*/}


            <UncontrolledRating/>

            <div className={'OnOff'}>
                <h2>OnOff</h2>
                <OnOff value={onOffValue} setOnOffValue={setOnOffValue}/>
            </div>

            <div className={'OnOff'}>
                <h2>UncontrolledOnOff</h2>
                <UncontrolledOnOff setOnOffValue={setOnOffValue}/>{onOffValue.toString()}
            </div>

            <UncontrolledAccordion titleValue={'UncontrolledAccordion #1'}/>
            <UncontrolledAccordion titleValue={'UncontrolledAccordion #2'}/>
        </div>
    );
}

export default App;
