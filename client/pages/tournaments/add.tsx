import React from "react";
import { message, Form, Input, Button, DatePicker } from "antd";
import { FormComponentProps } from "antd/lib/form/Form";
import { useRouter } from "next/router";
import { tournaments } from "../../routes";
import {
  useCreateTournamentMutation,
  CreateTournamentMutationVariables
} from "../../generated/graphql";
import { withApollo } from "../../lib/apollo";
import { TOURNAMENTS_QUERY } from "../../generated/queries/tournaments";

const success = () => {
  message.success("Tournament created succesfully");
};

const TournameFormContainer: React.FC = () => {
  const router = useRouter();
  const [
    createTournamentMutation,
    { loading, error }
  ] = useCreateTournamentMutation({
    onCompleted: data => {
      router.replace(tournaments);
      success();
    },
    refetchQueries: [{ query: TOURNAMENTS_QUERY }]
  });

  function handleSubmit(values) {
    const variables: CreateTournamentMutationVariables = {
      name: values.name,
      description: values.description,
      start: values.dates[0].toISOString(),
      end: values.dates[1].toISOString(),
      owner: { connect: { id: "ck6fm26ui002n0789hjcp9kt8" } }
    };

    createTournamentMutation({ variables });
  }

  return <WrappedTournamentForm handleSubmit={handleSubmit} />;
};

interface Props {
  handleSubmit: (values: any) => void;
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
        this.props.handleSubmit(values);
      }
    });
  };

  rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select dates!" }]
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
        <Form.Item label="Dates">
          {getFieldDecorator(
            "dates",
            this.rangeConfig
          )(<DatePicker.RangePicker />)}
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

const WrappedTournamentForm = Form.create<Props & FormComponentProps>({
  name: "tournamentForm"
})(TournamentForm);

export default withApollo()(TournameFormContainer);
