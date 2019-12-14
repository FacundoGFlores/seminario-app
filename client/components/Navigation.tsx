import React, { Component } from "react";
import { Drawer, Button, Layout, Menu, Avatar, Icon } from "antd";
import Link from "next/link";

const { Header } = Layout;

interface Props {
  isAuth: boolean;
}

export default class Navigation extends Component<Props> {
  state = {
    isMobile: false,
    mobileMenuOpen: false
  };

  handleResize = () => {
    this.setState({
      isMobile: document.body.clientWidth <= 768
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  toggleMobileMenuOpen = () => {
    const { isMobile, mobileMenuOpen } = this.state;
    if (!mobileMenuOpen) {
      if (isMobile) {
        this.setState({
          mobileMenuOpen: true
        });
      }
    } else {
      this.setState({
        mobileMenuOpen: false
      });
    }
  };

  renderNavLinks = () => {
    const { isMobile } = this.state;
    const { isAuth } = this.props;

    if (isAuth) {
      return [
        <Menu.Item key={0}>
          <Link href="/tournaments">
            <a onClick={() => this.toggleMobileMenuOpen()}>Tournaments</a>
          </Link>
        </Menu.Item>,
        <Menu.Item key={1}>
          <Link href="/teams">
            <a onClick={() => this.toggleMobileMenuOpen()}>Teams</a>
          </Link>
        </Menu.Item>,
        <Menu.Item key={2}>
          <Link href="/players">
            <a onClick={() => this.toggleMobileMenuOpen()}>Players</a>
          </Link>
        </Menu.Item>,
        isMobile && (
          <Menu.Item key={100}>
            <Link href="/tournaments">
              <a
                onClick={() => {
                  this.toggleMobileMenuOpen();
                }}
              >
                Sign out
              </a>
            </Link>
          </Menu.Item>
        )
      ];
    } else {
      return (
        <Menu.Item key={3}>
          <a>
            <Button ghost>Sing In</Button>
          </a>
        </Menu.Item>
      );
    }
  };

  renderUserLinks = () => {
    const { isMobile } = this.state;
    return (
      <div>
        {isMobile ? (
          <Button
            onClick={() => this.toggleMobileMenuOpen()}
            icon="menu"
            ghost
          />
        ) : (
          <Avatar icon={<Icon type="user" />} />
        )}
      </div>
    );
  };

  render() {
    const { isMobile, mobileMenuOpen } = this.state;
    const { isAuth } = this.props;

    return (
      <div>
        <Drawer
          title="Dev&Coffee"
          placement="left"
          closable={false}
          onClose={() => this.toggleMobileMenuOpen()}
          visible={mobileMenuOpen}
        >
          <Menu>{this.renderNavLinks()}</Menu>
        </Drawer>
        <Header style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div className="logo" style={{ margin: "0 10px", color: "white" }}>
              <Icon type="coffee" />
              <span>Dev&Coffee</span>
            </div>

            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
              {!isMobile
                ? this.renderNavLinks()
                : isAuth
                ? ""
                : this.renderNavLinks()}
            </Menu>
          </div>
          {isAuth && this.renderUserLinks()}
        </Header>
      </div>
    );
  }
}
