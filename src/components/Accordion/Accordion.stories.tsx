import React, { useState } from 'react';

import {action} from '@storybook/addon-actions'
import Accordion from './Accordion';

export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action('accordion mode change event fired')

export const CollapsedMode = () => <Accordion titleValue={'Menu'} changeAccordionCollapsed={callback} collapsed={true}/>;
export const UncollapsedMode = () => <Accordion titleValue={'Menu'} changeAccordionCollapsed={callback} collapsed={false}/>;

export const AccordionChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    const changeHandler = () => setValue(!value)
    return <Accordion titleValue={'Menu'} changeAccordionCollapsed={changeHandler} collapsed={value}/>;
}
