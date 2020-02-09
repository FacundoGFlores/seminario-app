import gql from "graphql-tag";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Long: any;
};

export type AggregateTournament = {
  __typename?: "AggregateTournament";
  count: Scalars["Int"];
};

export type AggregateUser = {
  __typename?: "AggregateUser";
  count: Scalars["Int"];
};

export type BatchPayload = {
  __typename?: "BatchPayload";
  count: Scalars["Long"];
};

export type Mutation = {
  __typename?: "Mutation";
  createTournament: Tournament;
  createUser: User;
  updateTournament?: Maybe<Tournament>;
  updateUser?: Maybe<User>;
  deleteTournament?: Maybe<Tournament>;
  deleteUser?: Maybe<User>;
  upsertTournament: Tournament;
  upsertUser: User;
  updateManyTournaments: BatchPayload;
  updateManyUsers: BatchPayload;
  deleteManyTournaments: BatchPayload;
  deleteManyUsers: BatchPayload;
};

export type MutationCreateTournamentArgs = {
  data: TournamentCreateInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationUpdateTournamentArgs = {
  data: TournamentUpdateInput;
  where: TournamentWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationDeleteTournamentArgs = {
  where: TournamentWhereUniqueInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationUpsertTournamentArgs = {
  where: TournamentWhereUniqueInput;
  create: TournamentCreateInput;
  update: TournamentUpdateInput;
};

export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

export type MutationUpdateManyTournamentsArgs = {
  data: TournamentUpdateManyMutationInput;
  where?: Maybe<TournamentWhereInput>;
};

export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type MutationDeleteManyTournamentsArgs = {
  where?: Maybe<TournamentWhereInput>;
};

export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>;
};

export enum MutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED"
}

export type Node = {
  id: Scalars["ID"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  tournaments: Array<Maybe<Tournament>>;
  users: Array<Maybe<User>>;
  tournament?: Maybe<Tournament>;
  user?: Maybe<User>;
  tournamentsConnection: TournamentConnection;
  usersConnection: UserConnection;
  node?: Maybe<Node>;
};

export type QueryTournamentsArgs = {
  where?: Maybe<TournamentWhereInput>;
  orderBy?: Maybe<TournamentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryTournamentArgs = {
  where: TournamentWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryTournamentsConnectionArgs = {
  where?: Maybe<TournamentWhereInput>;
  orderBy?: Maybe<TournamentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
};

export type Subscription = {
  __typename?: "Subscription";
  tournament?: Maybe<TournamentSubscriptionPayload>;
  user?: Maybe<UserSubscriptionPayload>;
};

export type SubscriptionTournamentArgs = {
  where?: Maybe<TournamentSubscriptionWhereInput>;
};

export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>;
};

export type Tournament = Node & {
  __typename?: "Tournament";
  id: Scalars["ID"];
  owner: User;
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["DateTime"]>;
  end?: Maybe<Scalars["DateTime"]>;
};

export type TournamentConnection = {
  __typename?: "TournamentConnection";
  pageInfo: PageInfo;
  edges: Array<Maybe<TournamentEdge>>;
  aggregate: AggregateTournament;
};

export type TournamentCreateInput = {
  id?: Maybe<Scalars["ID"]>;
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["DateTime"]>;
  end?: Maybe<Scalars["DateTime"]>;
  owner: UserCreateOneInput;
};

export type TournamentEdge = {
  __typename?: "TournamentEdge";
  node: Tournament;
  cursor: Scalars["String"];
};

export enum TournamentOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  StartAsc = "start_ASC",
  StartDesc = "start_DESC",
  EndAsc = "end_ASC",
  EndDesc = "end_DESC"
}

export type TournamentPreviousValues = {
  __typename?: "TournamentPreviousValues";
  id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["DateTime"]>;
  end?: Maybe<Scalars["DateTime"]>;
};

export type TournamentSubscriptionPayload = {
  __typename?: "TournamentSubscriptionPayload";
  mutation: MutationType;
  node?: Maybe<Tournament>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<TournamentPreviousValues>;
};

export type TournamentSubscriptionWhereInput = {
  AND?: Maybe<Array<TournamentSubscriptionWhereInput>>;
  OR?: Maybe<Array<TournamentSubscriptionWhereInput>>;
  NOT?: Maybe<Array<TournamentSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<TournamentWhereInput>;
};

export type TournamentUpdateInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["DateTime"]>;
  end?: Maybe<Scalars["DateTime"]>;
  owner?: Maybe<UserUpdateOneRequiredInput>;
};

export type TournamentUpdateManyMutationInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["DateTime"]>;
  end?: Maybe<Scalars["DateTime"]>;
};

export type TournamentWhereInput = {
  AND?: Maybe<Array<TournamentWhereInput>>;
  OR?: Maybe<Array<TournamentWhereInput>>;
  NOT?: Maybe<Array<TournamentWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_lt?: Maybe<Scalars["String"]>;
  description_lte?: Maybe<Scalars["String"]>;
  description_gt?: Maybe<Scalars["String"]>;
  description_gte?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["DateTime"]>;
  start_not?: Maybe<Scalars["DateTime"]>;
  start_in?: Maybe<Array<Scalars["DateTime"]>>;
  start_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  start_lt?: Maybe<Scalars["DateTime"]>;
  start_lte?: Maybe<Scalars["DateTime"]>;
  start_gt?: Maybe<Scalars["DateTime"]>;
  start_gte?: Maybe<Scalars["DateTime"]>;
  end?: Maybe<Scalars["DateTime"]>;
  end_not?: Maybe<Scalars["DateTime"]>;
  end_in?: Maybe<Array<Scalars["DateTime"]>>;
  end_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  end_lt?: Maybe<Scalars["DateTime"]>;
  end_lte?: Maybe<Scalars["DateTime"]>;
  end_gt?: Maybe<Scalars["DateTime"]>;
  end_gte?: Maybe<Scalars["DateTime"]>;
  owner?: Maybe<UserWhereInput>;
};

export type TournamentWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type User = Node & {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type UserConnection = {
  __typename?: "UserConnection";
  pageInfo: PageInfo;
  edges: Array<Maybe<UserEdge>>;
  aggregate: AggregateUser;
};

export type UserCreateInput = {
  id?: Maybe<Scalars["ID"]>;
  name: Scalars["String"];
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserEdge = {
  __typename?: "UserEdge";
  node: User;
  cursor: Scalars["String"];
};

export enum UserOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

export type UserPreviousValues = {
  __typename?: "UserPreviousValues";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type UserSubscriptionPayload = {
  __typename?: "UserSubscriptionPayload";
  mutation: MutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Scalars["String"]>>;
  previousValues?: Maybe<UserPreviousValues>;
};

export type UserSubscriptionWhereInput = {
  AND?: Maybe<Array<UserSubscriptionWhereInput>>;
  OR?: Maybe<Array<UserSubscriptionWhereInput>>;
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars["String"]>;
  updatedFields_contains_every?: Maybe<Array<Scalars["String"]>>;
  updatedFields_contains_some?: Maybe<Array<Scalars["String"]>>;
  node?: Maybe<UserWhereInput>;
};

export type UserUpdateDataInput = {
  name?: Maybe<Scalars["String"]>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars["String"]>;
};

export type UserUpdateManyMutationInput = {
  name?: Maybe<Scalars["String"]>;
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput;
  create: UserCreateInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_lt?: Maybe<Scalars["ID"]>;
  id_lte?: Maybe<Scalars["ID"]>;
  id_gt?: Maybe<Scalars["ID"]>;
  id_gte?: Maybe<Scalars["ID"]>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_lt?: Maybe<Scalars["String"]>;
  name_lte?: Maybe<Scalars["String"]>;
  name_gt?: Maybe<Scalars["String"]>;
  name_gte?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};
