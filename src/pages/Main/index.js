import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { Container,ContainerScrollView } from './styles'

import SlideCard from '../../components/SlideCard'
import Mock  from '../../services/mock'

const Main = () => {

    const [ slides, setSlides ] = useState([]);
    
    const onFetchSlides = async () => {
      let response = await Mock.fetchSlides();

      setSlides(response);
    }


    useEffect(() => {
        onFetchSlides();
    },[]);

    return(
    <Container>
        <StatusBar backgroundColor="#111" barStyle="light-content" />
        <ContainerScrollView>
           { slides && slides.map((slide, index) => (
           <SlideCard key={index} slide={slide} />
           ))}
        </ContainerScrollView>
    </Container>
     );
    

};

export default Main;