import Head from "next/head";
import Navigation from "./Navigation";

const { Footer, Content } = Layout;

export default function LayoutDashboard(props) {
  const { children, title } = props;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation isAuth={true} />
      <Content
        style={{
          padding: "30px 50px 0 50px",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        {children}
      </Content>
    </div>
  );
}
