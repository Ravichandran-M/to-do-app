import styled, { css } from "styled-components";

const media = {
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)}
    }
  `,
  extraLarge: (...args) => css`
    @media (min-width: 1440px) {
      ${css(...args)}
    }
  `,
};

export const HeaderComponent = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  font-size: 2rem;
  font-weight: 700;
  gap: 0.5rem;
`;

export const BodyComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1.5rem;
`;

export const Content = styled.div`
  width: 90%;
  ${media.tablet`
    width: 80%;
  `}

  ${media.desktop`
    width: 60%;
  `}

  ${media.extraLarge`
    width:70%;
  `}
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.input`
  width: 80%;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.txt_primary};
  border-radius: 0.3rem;
  &:focus {
    outline: none;
  }
`;

export const Btn = styled.button`
  width: 18%;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.txt_secondary};
  border-radius: 0.4rem;
  &:hover {
    background-color: ${({ theme }) => theme.btn};
  }
`;

export const InputSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tasks = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const TaskCountSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskStatus = styled.div`
  color: ${({ theme }) => theme.primary};
`;

export const TaskCount = styled.div`
  color: ${({ theme }) => theme.txt_secondary};
  background-color: ${({ theme }) => theme.bg};
  border-radius: 0.5rem;
  padding: 0 0.5rem 0 0.5rem;
`;

export const CountSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const TasksDescriptionBox = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TaskDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 0.5rem;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.txt_secondary};
  text-decoration: ${(props) => props.checked && "line-through"};
  word-break: break-word;
  width: 95%;
`;

export const Check = styled.input`
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
`;

export const DeleteImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const Combine = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 95%;
`;
