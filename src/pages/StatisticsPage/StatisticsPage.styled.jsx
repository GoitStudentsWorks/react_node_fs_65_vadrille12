import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  position: relative;
  border-radius: 16px;
  background-color: #ffffff;
  @media screen and (max-width: 375px) {
    max-width: 335px;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 335px;
    border-radius: 16px;
    padding-top: 28px;
    padding-bottom: 135px;
    padding-left: 14px;
    padding-right: 14px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
    height: 100px;
    padding-top: 140px;
    padding-bottom: 224px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding-top: 142px;
    padding-bottom: 104px;
    padding-left: 113px;
    padding-right: 114px;
  }
`;

export const ChartContainer = styled.div`
  /* position: relative; */
  margin-top: auto;

  border-radius: 29px;
  border: 0.8px solid #e3f3ff;
  @media screen and (max-width: 375px) {
    max-width: 307px;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 307px;
    height: 413px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 14px;
    padding-right: 14px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 640px;
    height: 424px;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 860px;
    height: 440px;
    padding: 40px;
  }
`;

export const HeadContainer = styled.section`
  position: absolute;
  top: 12%;
  left: 11%;

  @media screen and (max-width: 375px) {
    max-width: 307px;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 307px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 640px;
  }

  @media screen and (min-width: 1440px) {
    width: 860px;
  }
`;
