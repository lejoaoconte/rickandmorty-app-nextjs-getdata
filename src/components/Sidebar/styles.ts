import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: calc(100% - 50px);
  max-width: 1024px;
  height: 60px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin: 30px auto;

  img {
    width: 100px;
  }
`;

export const SwitchWrapper = styled.div`
  position: relative;
`;

export const SwitchLabel = styled.label`
  position: absolute;

  margin-top: 5px;
  top: 0;
  left: 0;
  width: 40px;
  height: 20px;
  border-radius: 15px;

  background: ${({ theme }) => theme.primary};

  cursor: pointer;

  &::after {
    content: "";
    display: block;

    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 4px;

    background: ${({ theme }) => theme.background};

    transition: 0.2s;
  }
`;

export const Switch = styled.input`
  opacity: 0;
  z-index: 1;

  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${SwitchLabel} {
    background: ${({ theme }) => theme.primary};

    &::after {
      content: "";
      display: block;

      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin-left: 24px;

      transition: 0.2s;
      background: ${({ theme }) => theme.background};
    }
  }
`;
export const SwitchArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  margin-top: 0;
  padding-right: 0;
`;
