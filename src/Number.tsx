import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.span``;

interface IProps {
    count : number;
};

const Number : FC<IProps> = ({ count }) => <Container>{ count }</Container>;

export default Number;