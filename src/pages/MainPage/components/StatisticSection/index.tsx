import React from 'react';
import styled from 'styled-components';

import LeftItem from './LeftItem';
import RightItem from './RightItem';

export default function AwardSection() {
  return (
    <AwardSectionContainer>
      <LeftItem />
      <RightItem />
    </AwardSectionContainer>
  );
}

const AwardSectionContainer = styled.section`
  width: 1040px;
  margin: 0 auto;
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
`;
