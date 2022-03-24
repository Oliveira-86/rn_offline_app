import React from 'react';
import {
    InputDefaultContainer,
    Label,
    InputStyle,
} from './styles';

const Input = props => {
    return (
        <InputDefaultContainer>
            <Label>{props.label}</Label>
            <InputStyle {...props} error={props.error} />
            {props.error && (
                <Label error={props.error}>
                    {props.errorText}
                </Label>
            )}
        </InputDefaultContainer>
    );
};

export default Input;