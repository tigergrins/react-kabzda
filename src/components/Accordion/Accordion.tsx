import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    changeAccordionCollapsed: () => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle title={props.titleValue} changeAccordionCollapsed={props.changeAccordionCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </>

    )
}

type AccordionTitlePropsType = {
    title: string
    changeAccordionCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.changeAccordionCollapsed}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>Home</li>
            <li>Messages</li>
            <li>Contacts</li>
        </ul>
    )
}

export default Accordion;