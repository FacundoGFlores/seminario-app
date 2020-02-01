import React from "react";
import { message, Form, Input, Button, DatePicker } from "antd";
import { FormComponentProps } from "antd/lib/form/Form";
import { withRouter, SingletonRouter } from "next/router";
import { tournaments } from "../../routes";

const success = () => {
  message.success("Tournament created succesfully");
};

interface Props {
  router: SingletonRouter;
}

class TournamentForm extends React.Component<FormComponentProps & Props> {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        success();
        this.props.router.replace(tournaments);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 12 }}
        onSubmit={this.handleSubmit}
      >
        <Form.Item label="Name">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input the tournament name"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Description">
          {getFieldDecorator("description")(<Input />)}
        </Form.Item>
        <Form.Item label="Dates" style={{ marginBottom: 0 }}>
          <Form.Item
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
          >
            <DatePicker />
          </Form.Item>
          <span
            style={{
              display: "inline-block",
              width: "24px",
              textAlign: "center"
            }}
          >
            -
          </span>
          <Form.Item
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
          >
            <DatePicker />
          </Form.Item>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const TournamentFormWithRouter = withRouter(TournamentForm);

const WrappedTournamentForm = Form.create({ name: "tournamentForm" })(
  TournamentFormWithRouter
);

export default WrappedTournamentForm;
