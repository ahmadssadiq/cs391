import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DateContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const Day = styled.span`
  color: #2e2e2e;
  font-size: 1.2rem;
  font-weight: bold;
  display: block;
`;

const FullDate = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
`;

const Condition = styled.span`
  font-size: 0.9rem;
  color: #444;
`;

const Temperature = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TempHigh = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #ff6b6b;
`;

const TempLow = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #4ecdc4;
`;

const WeatherCard = ({ datetime, tempmax, tempmin, conditions }) => {
    const date = new Date(datetime);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();

    return (
        <Card>
            <DateContainer>
                <Day>{dayOfWeek}</Day>
                <FullDate>{`${month} ${day}`}</FullDate>
            </DateContainer>
            <WeatherInfo>
                <Condition>{conditions}</Condition>
            </WeatherInfo>
            <Temperature>
                <TempHigh>{Math.round(tempmax)}°</TempHigh>
                <TempLow>{Math.round(tempmin)}°</TempLow>
            </Temperature>
        </Card>
    );
};

export default WeatherCard;