import styled from '@emotion/styled';

interface CategoryBtnProps {
  name: string;
  image: string;
}

const CategoryBtn = ({ name, image }: CategoryBtnProps) => {
  return (
    <Content>
      <Image src={image} alt={name} />
      <Label>{name}</Label>
    </Content>
  );
};

export default CategoryBtn;

const Content = styled.div`
  width: calc((100% - ${({ theme }) => theme.spacing.spacing3} * 4) / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.spacing3};
`;

const Image = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.spacing.spacing1};
`;

const Label = styled.div`
  font-size: ${({ theme }) => theme.typography.label2Regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.label2Regular.fontWeight};
  text-align: center;
`;
