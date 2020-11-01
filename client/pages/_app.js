import Theme from "../components/theme/index";
export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </React.Fragment>
  );
}
