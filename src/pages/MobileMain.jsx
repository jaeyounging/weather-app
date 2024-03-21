import React from "react";
import styled from "styled-components";

export default function MobileMain() {
  return (
    <MainPage>
      <Location>
        <LocationPin></LocationPin>
        <button>Seoul</button>
        <button></button>
      </Location>
      <p>이미지</p>
      <p>Cloudy</p>
      <span>28</span>
      <span>도</span>
    </MainPage>
  );
}

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6dfae5;
`;

const Location = styled.div`
  margin-top: 80px;
`;

const LocationPin = styled.span`
  width: 24px;
  height: 24px;
  background-color: red;
  background-image: url("../assets/icons/location-pin.svg");
`;
