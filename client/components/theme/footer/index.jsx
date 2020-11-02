import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styles/footer.styles";

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

// This is all to pass the {href} to the 'a' tag sice we are nesting a component in another component
const FooterLink = React.forwardRef(
  ({ onClick, href, children, ...restProps }, ref) => {
    return (
      <Link {...restProps} href={href} onClick={onClick} ref={ref}>
        {children}
      </Link>
    );
  }
);
Footer.Link = FooterLink;

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};

export default Footer;
