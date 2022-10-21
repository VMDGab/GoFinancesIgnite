import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    Container,
    TypeButton,
    TypeIcon,
    TypeTransaction
} from './styles';

interface Props extends TouchableOpacityProps {
    type: 'positive' | 'negative'
    title: string
    isActive: boolean
}
export function TransactionButton({
    type,
    title,
    isActive,
    ...rest }
    : Props
) {

    const icon = {
        positive: 'arrow-up-circle',
        negative: 'arrow-down-circle',
    }
    return (
        <Container>
           
            <TypeButton isActive={isActive}type={type}{...rest}>
                <TypeIcon name={icon[type]} type={type} />
                <TypeTransaction>{title}</TypeTransaction>
            </TypeButton>
        </Container>
    );
}