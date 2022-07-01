import React from 'react';
import styled from 'styled-components';

export default function LeftItem() {
  return (
    <LeftItemWrap>
      <BaseDate>
        2021년 12월 기준
        <span className="blind">
          2018 구글 플레이스토어 올해의 앱 최우수상 수상
        </span>
      </BaseDate>
    </LeftItemWrap>
  );
}

const LeftItemWrap = styled.div`
  position: relative;
  width: 400px;
  height: 338px;
  background-image: url('/images/triple2x.png');
  background-size: cover;
  background-repeat: no-repeat;

  opacity: 0;
  animation: appear 0.7s ease-out forwards;

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  } ;
`;

const BaseDate = styled.p`
  position: absolute;
  bottom: 43px;
  left: 50%;
  transform: translateX(-50%);

  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
`;
