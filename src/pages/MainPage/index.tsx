import React from 'react';
import styled from 'styled-components';

import StatisticSection from './components/StatisticSection';

export default function MainPage() {
  return (
    <MainPageContainer>
      <StatisticSection />
    </MainPageContainer>
  );
}

const MainPageContainer = styled.main`
  min-width: 1200px;
`;
