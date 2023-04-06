import styled from 'styled-components';

export const List = styled.ul`
  width: 75%;
  display: flex;
  list-style: none;
  flex-direction: column;
  border: 6px solid rgba(50, 57, 65, 1);
  border-radius: 6px;
  padding: 5px;
  width: 75%;
  padding: 5px;
  margin: 10px 0px;
`;
export const Item = styled.li`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  padding: 0;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const Text = styled.span`
  padding: 5px;
  display: flex;
  @media screen and (max-width: 1023px) {
    font-size: 16px;
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;
export const DeleteBtn = styled.button`
  width: 70px;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  color: rgba(50, 57, 65, 1);
  border: 1px solid rgba(50, 57, 65, 1);
  border-radius: 4px;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  background: #2196f3;
  letter-spacing: 1.2px;
  &:hover {
    color: #ffff;
    border: 1px solid rgba(50, 57, 65, 1);
    background: #188ce8;
    font-weight: 700;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Default = styled.li`
  display: block;
  font-size: 22px;
  font-weight: 400;
  padding: 0;
  justify-content: space-between;
  margin-bottom: 5px;
`;
