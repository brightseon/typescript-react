import React, { SFC, SyntheticEvent, FormEvent } from 'react';

interface IProps {
    value : string;
    onChange : (e : SyntheticEvent<HTMLInputElement>) => void;
};

export const Input : SFC<IProps> = ({ value, onChange }) => <input type="text" placeholder="Name" value={ value } onChange={ onChange } />;

interface IFormProps {
    onFormSubmit : (e : FormEvent) => void;
};

export const Form : SFC<IFormProps> = ({ children, onFormSubmit }) => <form onSubmit={ onFormSubmit }>{ children }</form>;