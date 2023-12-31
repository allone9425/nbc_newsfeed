import styled from 'styled-components';
const UpDown = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <UpDownBox>
      <UpButton onClick={scrollTop}>&#8593;</UpButton>
    </UpDownBox>
  );
};

export default UpDown;

const UpButton = styled.button`
  padding: 10px;
  position: fixed;
  bottom: 20px;
  right: 25px;
  border: none;
  background-color: ${({ theme }) => theme.upButtonBgColor};
  z-index: 99;
  font-size: 30px;
  border-radius: 10px;
  width: 60px;
  box-shadow: 2px 2px 2px #aaa;
  font-weight: bold;
  filter: ${({ theme }) => theme.invertFilter};
  &:hover {
    background-color: #ccc;
  }
`;

const UpDownBox = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
