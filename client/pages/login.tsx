import React from "react";
import { withRouter, SingletonRouter } from "next/router";
import { Form, Icon, Input, Button, Card } from "antd";
import { FormComponentProps } from "antd/lib/form/Form";

import "./login.css";

interface Props {
  router: SingletonRouter;
}

class NormalLoginForm extends React.Component<FormComponentProps & Props> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(err => {
      if (!err) {
        this.props.router.replace("/");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <Card className="login-card" title={"Login"}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

const LoginFormWithRouter = withRouter(NormalLoginForm);

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  LoginFormWithRouter
);

export default WrappedNormalLoginForm;
