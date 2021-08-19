import React, { useState } from 'react';
import {action} from '@storybook/addon-actions'
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
    title: 'Uncontrolled OnOff stories',
    component: UncontrolledOnOff,
}

const callback = action('on or off clicked')

export const showOnOff = () => <UncontrolledOnOff setOnOffValue={callback}/>;

