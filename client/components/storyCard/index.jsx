import data from "./data.json";
import {
  Container,
  Section,
  Wrapper,
  Direction,
  Title,
  SubTitle,
  Image,
} from "./styles/storyCard.styles";

const StoryCard = ({ children, direction = "row", ...restProps }) => {
  return (
    <StoryCard.Container>
      {data.map(({ title, subTitle, image, alt, direction, id }) => (
        <StoryCard.Section key={id}>
          <StoryCard.Wrapper direction={direction}>
            <StoryCard.Direction>
              <StoryCard.Title>{title}</StoryCard.Title>
              <StoryCard.SubTitle>{subTitle}</StoryCard.SubTitle>
            </StoryCard.Direction>
            <StoryCard.Direction>
              <StoryCard.Image src={image} alt={alt} />
            </StoryCard.Direction>
          </StoryCard.Wrapper>
        </StoryCard.Section>
      ))}
    </StoryCard.Container>
  );
};

StoryCard.Container = function StoryCardContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

StoryCard.Section = function StoryCardSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};
StoryCard.Wrapper = function StoryCardWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
StoryCard.Direction = function StoryCardDirection({ children, ...restProps }) {
  return <Direction {...restProps}>{children}</Direction>;
};
StoryCard.Title = function StoryCardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
StoryCard.SubTitle = function StoryCardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
StoryCard.Image = function StoryCardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

export default StoryCard;
