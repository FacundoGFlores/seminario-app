import React from "react";
import { List, Avatar, Icon, Progress, message } from "antd";
import { useRouter } from "next/router";
import { tournamentsAdd, tournamentsEdit, tournamentsView } from "../../routes";
import { withApollo } from "../../lib/apollo";
import { useTournamentsQuery } from "../../generated/graphql";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    id: i.toString(),
    href: "http://ant.design",
    title: `Team ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  });
}

const IconText = ({ type, text, onClick }) => (
  <span onClick={onClick}>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

type FormAction = "add" | "edit" | "view";

const errorMessage = () => {
  message.error("Error loading tournaments");
};

const Tournaments = () => {
  const router = useRouter();
  const { data, loading, error } = useTournamentsQuery();

  const handleAction = (actionType: FormAction, id?: string) => {
    if (actionType === "add") {
      router.push(tournamentsAdd);
    }

    if (actionType === "edit") {
      router.push(tournamentsEdit(id));
    }

    if (actionType === "view") {
      router.push(tournamentsView(id));
    }
  };

  if (loading) return <Progress percent={100} />;
  if (error) return errorMessage();

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={data.tournaments}
      footer={
        <div>
          <b>Tournaments List</b>
        </div>
      }
      renderItem={item => (
        <List.Item
          key={item.name}
          actions={[
            <IconText
              onClick={() => handleAction("add")}
              type="plus"
              text="Add"
              key="list-vertical-star-o"
            />,
            <IconText
              onClick={() => handleAction("edit", item.id)}
              type="edit"
              text="Edit"
              key="list-vertical-star-o"
            />,
            <IconText
              onClick={() => handleAction("view", item.id)}
              type="search"
              text="View"
              key="list-vertical-like-o"
            />
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            title={<div>{item.name}</div>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default withApollo()(Tournaments);
