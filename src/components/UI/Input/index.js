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
            <InputStyle {...props} error={props.error} />
            {props.error && (
                <Label error={props.error}>
                    can't be empty
                </Label>
            )}
        </InputDefaultContainer>
    );
};

export default Input;