import React from 'react';
import {
    InputDefaultContainer,
    Label,
    InputStyle,
    InputDefaultIcon,
} from './styles';

const Input = props => {
    return (
        <InputDefaultContainer>
            <Label>{props.label}</Label>
            <InputStyle {...props} />
            {/* {props.eyeoff && (
                <InputDefaultIcon>
                    <EyeOff width={25} height={25} />
                </InputDefaultIcon>
            )} */}
        </InputDefaultContainer>
    );
};

export default Input;