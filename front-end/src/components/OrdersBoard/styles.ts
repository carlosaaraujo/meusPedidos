import styled from "styled-components";

export const Board = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  flex: 1;

  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  > header {
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 8px;
    font-size: 14px;
  }
`;

export const OrdersContainer = styled.div`
  width: 100%;
  margin-top: 24px;

  display: flex;
  flex-direction: column;

  button {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    gap: 4px;

    width: 100%;
    height: 128px;

    background-color: #fff;
    border-radius: 8px;
    border: 1px solid rgba(204, 204, 204, 0.4);

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
