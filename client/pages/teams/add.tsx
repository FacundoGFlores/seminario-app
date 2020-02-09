import React from "react";
import { message, Form, Input, Button, DatePicker, Icon } from "antd";
import { FormComponentProps } from "antd/lib/form/Form";
import { withRouter, SingletonRouter } from "next/router";
import { teams } from "../../routes";

const success = () => {
  message.success("Team created succesfully");
};

interface Props {
  router: SingletonRouter;
}

let playerId = 0;

class TeamForm extends React.Component<FormComponentProps & Props> {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  removePlayer = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    });
  };

  addPlayer = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(playerId++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        success();
        this.props.router.replace(teams);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator("keys", { initialValue: [] });
    const keys = getFieldValue("keys");

    const formItemLayout = {
      labelCol: {
        xs: { span: 4 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 12 }
      }
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 12, offset: 0 },
        sm: { span: 12, offset: 5 }
      }
    };

    const players = keys.map((k, index) => (
      <Form.Item
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? "Player" : ""}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ["onChange", "onBlur"],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input player's name or delete this field."
            }
          ]
        })(
          <Input
            placeholder="player name"
            style={{ width: "60%", marginRight: 8 }}
          />
        )}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.removePlayer(k)}
          />
        ) : null}
      </Form.Item>
    ));

    return (
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 7 }}
        onSubmit={this.handleSubmit}
      >
        <Form.Item label="Name">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input the team name"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Description">
          {getFieldDecorator("description")(<Input />)}
        </Form.Item>
        {players}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button
            type="dashed"
            onClick={this.addPlayer}
            style={{ width: "60%" }}
          >
            <Icon type="plus" /> Add player
          </Button>
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

const TeamFormWithRouter = withRouter(TeamForm);

const WrappedTeamForm = Form.create({ name: "teamForm" })(TeamFormWithRouter);

export default WrappedTeamForm;
