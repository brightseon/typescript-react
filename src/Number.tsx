import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.span<{isBlue : boolean}>`
    color : ${ props => props.isBlue ? props.theme.blueColor : 'black' };
`;

interface IProps {
    count : number;
};

const Number : FC<IProps> = ({ count }) => <Container isBlue={ count > 10 }>{ count }</Container>;

export default Number;