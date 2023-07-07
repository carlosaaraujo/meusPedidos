import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
  width: 480px;
  background-color: #fff;

  padding: 32px;
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: 0;
      background-color: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      align-items: center;

      gap: 8px;
      margin-top: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    font-weight: 500;

    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        display: block;
        min-width: 20px;

        font-size: 14px;
        color: #666;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;

      color: #666;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px 24px;
    gap: 8px;

    background-color: #333333;
    color: #fff;

    border-radius: 48px;
    border: 0;
  }

  .secondary {
    margin-top: 12px;
    padding: 14px 24px;

    color: #d73035;
    font-weight: bold;

    border: 0;
    border-radius: 48px;
    background-color: transparent;
  }
`;
