import styled from 'styled-components';

export const Title = styled.h2`
  font-family: oswald;
  font-size: 38px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  margin-top: 20px;
  margin-left: 15px;
`;

export const Stat = styled.li`
  list-style: none;

  font-family: georgia, serif;
  font-size: 28px;
  line-height: 125%;
`;

export const Message = styled.p`
  font-family: oswald;
  font-size: 34px;
  font-weight: 500;
  margin-top: 20px;
  margin-left: 50px;
`;

export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  cursor: pointer;

  font-family: georgia, serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 150%;
  padding: 0px;

  outline: none;
  padding: 12px 18px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  text-transform: uppercase;
  margin-left: 20px;
  margin-bottom: 25px;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
