import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useCountUp } from '../../../../hooks/useCountUp';

export default function RightItem() {
  const [traveler, setTraveler] = useState(0);
  const [review, setReview] = useState(0);
  const [schedule, setSchedule] = useState(0);

  const travelerCount = useCountUp(700);
  const reviewCount = useCountUp(100);
  const scheduleCount = useCountUp(470);

  useEffect(() => {
    setTraveler(travelerCount);
    setReview(reviewCount);
    setSchedule(scheduleCount);
  }, [travelerCount, reviewCount, scheduleCount]);

  return (
    <RightItemWrap>
      <TopItemWrap>
        <TopItem>
          <Strong>
            <span>{traveler}</span>만 명
          </Strong>
          의 여행자
        </TopItem>
        <TopItem>
          <Strong>
            <span>{review}</span>만 개
          </Strong>
          의 여행 리뷰
        </TopItem>
        <TopItem>
          <Strong>
            <span>{schedule}</span>만 개
          </Strong>
          의 여행 일정
        </TopItem>
      </TopItemWrap>
      <BottomItemWrap>
        <GoogleAward>
          <AwardTitle>
            2018 구글 플레이스토어
            <br />
            올해의 앱 최우수상 수상
          </AwardTitle>
        </GoogleAward>
        <AppleAward>
          <AwardTitle>
            2018 애플 앱스토어
            <br />
            오늘의 여행앱 선정
          </AwardTitle>
        </AppleAward>
      </BottomItemWrap>
    </RightItemWrap>
  );
}

const RightItemWrap = styled.div`
  width: 417px;
`;

const TopItemWrap = styled.div`
  margin-bottom: 50px;
  letter-spacing: -1px;

  opacity: 0;
  animation: appear 0.7s ease-out 0.1s forwards;
`;

const TopItem = styled.p`
  font-size: 36px;
  color: rgb(58, 58, 58);

  & + p {
    margin-top: 20px;
  }
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const BottomItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;

  opacity: 0;
  animation: appear 0.7s ease-out 0.2s forwards;
`;

const GoogleAward = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 54px;
    height: 54px;
    background-image: url('/images/play-store2x.png');
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 10px;
  }
`;

const AppleAward = styled(GoogleAward)`
  &::before {
    background-image: url('/images/badge-apple4x.png');
  }
`;

const AwardTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: rgba(58, 58, 58, 0.8);
`;
