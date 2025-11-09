import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0; 
  background-color: rgba(43, 28, 19, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  z-index: 1000; 

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
`;

export const ModalS = styled.div`
  background-color: #f6d7c3;
  padding: 40px 60px;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0px 0px 20px rgba(43, 28, 19, 0.4);
  color: #2b1c13;
  position: relative;
`;

export const Title = styled.h2`
  color: #2b1c13;
  margin-bottom: 25px;
  font-size: 30px;
  text-align: center;
`;

export const ListD = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px 32px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const ItemD = styled.li``;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  color: rgb(82, 52, 32);
  font-weight: 600;
  font-size: 20px;
`;

export const Span = styled.span`
  font-weight: 500;
  color: rgb(119, 72, 40);
`;

export const Desc = styled.p`
  color: rgb(82, 52, 32);
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 24px;
  background: none;
  border: none;
  color: #2b1c13;
  font-size: 28px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    color: rgb(119, 72, 40);
    transform: scale(1.1);
  }
`;
