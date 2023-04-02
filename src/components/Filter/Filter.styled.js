import styled from 'styled-components';

export const FilterContaner = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  gap: 4px;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  width: 78%;
  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;
export const FilterInput = styled.input`
  padding: 5px;
  width: 70%;
  height: 15%;
  font-size: 14px;
  font-weight: 600;
  background: #ffff;
  border: 2px solid rgba(50, 57, 65, 1);
  border-radius: 4px;
  letter-spacing: 1.2px;
  &:hover,
  :focus {
    color: #ffff;
    border: 2px solid rgba(50, 57, 65, 1);
    background: #009eff;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (max-width: 1023px) {
    width: 95%;
  }
  @media screen and (max-width: 767px) {
    width: 95%;
  }
`;
