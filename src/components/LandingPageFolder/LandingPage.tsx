import React, { useEffect, useRef } from 'react';
import { Container } from '@mantine/core';
import styled from 'styled-components';
import LandingHeader from './LandingHeader';
import LandingComponentAfterHeader from './LandingComponentAfterHeader';
import LandingSignInCard from './LandingSignInCard';
import LandingPromo from './LandingPromo';
import LandingBelowSign from './LandingBelowSign'; // Import the new component

const LandingPage: React.FC = () => {
  const promoRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (promoRef.current && signInRef.current) {
      const promoHeight = promoRef.current.offsetHeight;
      const signInHeight = signInRef.current.offsetHeight;
      const maxHeight = Math.max(promoHeight, signInHeight);

      promoRef.current.style.height = `${maxHeight * 1.6}px`;
      signInRef.current.style.height = `${maxHeight * 1.6}px`;
    }
  }, []);

  return (
    <PageWrapper>
      <LandingHeader />
      <LandingComponentAfterHeader />
      <StyledContainer>
        <ContentWrapper>
          <LeftContentWrapper>
            <PromoContainer ref={promoRef}>
              <LandingPromo />
            </PromoContainer>
          </LeftContentWrapper>
          <RightContentWrapper>
            <CardContainer>
              <LandingSignInCard />
              <LandingBelowSign /> {/* Add the new component here */}
            </CardContainer>
          </RightContentWrapper>
        </ContentWrapper>
      </StyledContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  .landing-page {
    /* Add any global styles for the landing page here */
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 20px; /* Decreased from 40px to 20px */
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  margin-top: -50px;
  gap: 15px; /* Decreased from 30px to 15px */
`;

const LeftContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  transform: scale(1.3);
  transform-origin: top left;
  margin-left: -75px; /* Decreased from -150px to -75px */
`;

const RightContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  transform: scale(1.3);
  transform-origin: top left;
`;

const PromoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
`;

export default LandingPage;
