import React from 'react'

import { 
    Container,
    Photo,
    ContainerSubtitle,
    SubtitleTitle,
    SubTitleDescription
     } from './styles'
 
const Card = ({ item }) => {

    return (
        <Container>
            <Photo source={{uri: item.photo}}/>
            <ContainerSubtitle>
                <SubtitleTitle>{item.subtitle.title}</SubtitleTitle>
                <SubTitleDescription>{item.subtitle.description}</SubTitleDescription>
            </ContainerSubtitle>

        </Container>
    );

};

export default Card;