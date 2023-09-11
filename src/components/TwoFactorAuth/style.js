import styled from "styled-components";

export const Heading3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid #cbd5e0;
`;

export const Heading4 = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: #3182ce;
  margin-bottom: 0.5rem;
`;

export const ModalOverlay = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 34, 34, 0.5);
`;

export const OrderedList = styled.ul`
  font-size: 0.875rem;
  margin: 0.5rem 0;
  padding-left: 1.25rem;
  list-style: decimal;
  & > li {
    color: black;
    margin-bottom: 0.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0.5rem;
  border-top: 1px solid #e2e8f0;
  border-radius: 0 0 0.375rem 0.375rem;
`;

export const ButtonBlue = styled.button`
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: #3b82f6;
  border: none;
  border-radius: 0.25rem;
  padding: 0.625rem 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

export const ButtonGrey = styled.button`
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  padding: 0.625rem 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: #edf2f7;
  }
`;

export const InputField = styled.input`
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  padding: 0.625rem 1rem;
  width: 40%;
`;

export const TwoFactorAuthContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 34, 34, 0.5);
`;

export const TwoFactorAuthModal = styled.div`
  position: relative;
  background-color: white;
  padding: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 32rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;