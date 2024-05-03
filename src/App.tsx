import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Card } from './components/Card';
import img from "../src/image/img.jpeg";
import { Image } from './components/Image';
import { Title } from './components/Title';
import { Text } from './components/Text';
import { Button } from './components/Button';


function App() {
  return (
    <Card>
      <Image src={img} alt="image"/>
      <ContentWrapper>
        <Title>Headline</Title>
        <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
        <BtnWrapper>
        <Button>See more</Button>
        <Button>Save</Button>
        </BtnWrapper>
      </ContentWrapper>
    </Card>
  );
}

export default App;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  width: 260px;
`

const BtnWrapper = styled.div`
  width: 184px;
  display: flex;
  justify-content: space-between;
`