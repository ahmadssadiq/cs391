"use client";
import { useState } from "react";
import Link from "next/link";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 30px;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Button = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #45a049;
  }
`;

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <Container>
      <Title>Find the Weather in any city!</Title>
      <Subtitle>Enter a city name below to get the current weather</Subtitle>
      <InputContainer>
        <Input
          type="text"
          value={city}
          placeholder="City name"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button href={`/${city}`}>Get Weather</Button>
      </InputContainer>
    </Container>
  );
}