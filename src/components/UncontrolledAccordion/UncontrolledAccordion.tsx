import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true)

    const setCollapsedInTitle = () => setCollapsed(!collapsed)

    return (
        <>
            <AccordionTitle title={props.titleValue} setCollapsedInTitle={setCollapsedInTitle}/>
            {!collapsed && <AccordionBody/>}
        </>

    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsedInTitle: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.setCollapsedInTitle}>{props.title}</h3>
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