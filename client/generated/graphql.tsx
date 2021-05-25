import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

<<<<<<< Updated upstream
export type AggregatePlayer = {
   __typename?: 'AggregatePlayer',
  count: Scalars['Int'],
};

export type AggregateTeam = {
   __typename?: 'AggregateTeam',
  count: Scalars['Int'],
};

export type AggregateTournament = {
   __typename?: 'AggregateTournament',
  count: Scalars['Int'],
};

export type AggregateUser = {
   __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  count: Scalars['Long'],
};



export type Mutation = {
   __typename?: 'Mutation',
  createUser: User,
  createTournament: Tournament,
  createTeam: Team,
  createPlayer: Player,
  updateUser?: Maybe<User>,
  updateTournament?: Maybe<Tournament>,
  updateTeam?: Maybe<Team>,
  updatePlayer?: Maybe<Player>,
  deleteUser?: Maybe<User>,
  deleteTournament?: Maybe<Tournament>,
  deleteTeam?: Maybe<Team>,
  deletePlayer?: Maybe<Player>,
  upsertUser: User,
  upsertTournament: Tournament,
  upsertTeam: Team,
  upsertPlayer: Player,
  updateManyUsers: BatchPayload,
  updateManyTournaments: BatchPayload,
  updateManyTeams: BatchPayload,
  updateManyPlayers: BatchPayload,
  deleteManyUsers: BatchPayload,
  deleteManyTournaments: BatchPayload,
  deleteManyTeams: BatchPayload,
  deleteManyPlayers: BatchPayload,
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationCreateTournamentArgs = {
  data: TournamentCreateInput
};


export type MutationCreateTeamArgs = {
  data: TeamCreateInput
};


export type MutationCreatePlayerArgs = {
  data: PlayerCreateInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdateTournamentArgs = {
  data: TournamentUpdateInput,
  where: TournamentWhereUniqueInput
};


export type MutationUpdateTeamArgs = {
  data: TeamUpdateInput,
  where: TeamWhereUniqueInput
};


export type MutationUpdatePlayerArgs = {
  data: PlayerUpdateInput,
  where: PlayerWhereUniqueInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeleteTournamentArgs = {
  where: TournamentWhereUniqueInput
};


export type MutationDeleteTeamArgs = {
  where: TeamWhereUniqueInput
};


export type MutationDeletePlayerArgs = {
  where: PlayerWhereUniqueInput
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationUpsertTournamentArgs = {
  where: TournamentWhereUniqueInput,
  create: TournamentCreateInput,
  update: TournamentUpdateInput
};


export type MutationUpsertTeamArgs = {
  where: TeamWhereUniqueInput,
  create: TeamCreateInput,
  update: TeamUpdateInput
};


export type MutationUpsertPlayerArgs = {
  where: PlayerWhereUniqueInput,
  create: PlayerCreateInput,
  update: PlayerUpdateInput
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpdateManyTournamentsArgs = {
  data: TournamentUpdateManyMutationInput,
  where?: Maybe<TournamentWhereInput>
};


export type MutationUpdateManyTeamsArgs = {
  data: TeamUpdateManyMutationInput,
  where?: Maybe<TeamWhereInput>
};


export type MutationUpdateManyPlayersArgs = {
  data: PlayerUpdateManyMutationInput,
  where?: Maybe<PlayerWhereInput>
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
};


export type MutationDeleteManyTournamentsArgs = {
  where?: Maybe<TournamentWhereInput>
};


export type MutationDeleteManyTeamsArgs = {
  where?: Maybe<TeamWhereInput>
};


export type MutationDeleteManyPlayersArgs = {
  where?: Maybe<PlayerWhereInput>
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
  id: Scalars['ID'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Player = Node & {
   __typename?: 'Player',
  id: Scalars['ID'],
  name: Scalars['String'],
  team: Team,
};

export type PlayerConnection = {
   __typename?: 'PlayerConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<PlayerEdge>>,
  aggregate: AggregatePlayer,
};

export type PlayerCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  team: TeamCreateOneWithoutPlayersInput,
};

export type PlayerCreateManyWithoutTeamInput = {
  create?: Maybe<Array<PlayerCreateWithoutTeamInput>>,
  connect?: Maybe<Array<PlayerWhereUniqueInput>>,
};

export type PlayerCreateWithoutTeamInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

export type PlayerEdge = {
   __typename?: 'PlayerEdge',
  node: Player,
  cursor: Scalars['String'],
};

export enum PlayerOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type PlayerPreviousValues = {
   __typename?: 'PlayerPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type PlayerScalarWhereInput = {
  AND?: Maybe<Array<PlayerScalarWhereInput>>,
  OR?: Maybe<Array<PlayerScalarWhereInput>>,
  NOT?: Maybe<Array<PlayerScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
};

export type PlayerSubscriptionPayload = {
   __typename?: 'PlayerSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Player>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PlayerPreviousValues>,
};

export type PlayerSubscriptionWhereInput = {
  AND?: Maybe<Array<PlayerSubscriptionWhereInput>>,
  OR?: Maybe<Array<PlayerSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PlayerSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PlayerWhereInput>,
};

export type PlayerUpdateInput = {
  name?: Maybe<Scalars['String']>,
  team?: Maybe<TeamUpdateOneRequiredWithoutPlayersInput>,
};

export type PlayerUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type PlayerUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
};

export type PlayerUpdateManyWithoutTeamInput = {
  create?: Maybe<Array<PlayerCreateWithoutTeamInput>>,
  connect?: Maybe<Array<PlayerWhereUniqueInput>>,
  set?: Maybe<Array<PlayerWhereUniqueInput>>,
  disconnect?: Maybe<Array<PlayerWhereUniqueInput>>,
  delete?: Maybe<Array<PlayerWhereUniqueInput>>,
  update?: Maybe<Array<PlayerUpdateWithWhereUniqueWithoutTeamInput>>,
  updateMany?: Maybe<Array<PlayerUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<PlayerScalarWhereInput>>,
  upsert?: Maybe<Array<PlayerUpsertWithWhereUniqueWithoutTeamInput>>,
};

export type PlayerUpdateManyWithWhereNestedInput = {
  where: PlayerScalarWhereInput,
  data: PlayerUpdateManyDataInput,
};

export type PlayerUpdateWithoutTeamDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
  where: PlayerWhereUniqueInput,
  data: PlayerUpdateWithoutTeamDataInput,
};

export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
  where: PlayerWhereUniqueInput,
  update: PlayerUpdateWithoutTeamDataInput,
  create: PlayerCreateWithoutTeamInput,
};

export type PlayerWhereInput = {
  AND?: Maybe<Array<PlayerWhereInput>>,
  OR?: Maybe<Array<PlayerWhereInput>>,
  NOT?: Maybe<Array<PlayerWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  team?: Maybe<TeamWhereInput>,
};

export type PlayerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Query = {
   __typename?: 'Query',
  users: Array<Maybe<User>>,
  tournaments: Array<Maybe<Tournament>>,
  teams: Array<Maybe<Team>>,
  players: Array<Maybe<Player>>,
  user?: Maybe<User>,
  tournament?: Maybe<Tournament>,
  team?: Maybe<Team>,
  player?: Maybe<Player>,
  usersConnection: UserConnection,
  tournamentsConnection: TournamentConnection,
  teamsConnection: TeamConnection,
  playersConnection: PlayerConnection,
  node?: Maybe<Node>,
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTournamentsArgs = {
  where?: Maybe<TournamentWhereInput>,
  orderBy?: Maybe<TournamentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTeamsArgs = {
  where?: Maybe<TeamWhereInput>,
  orderBy?: Maybe<TeamOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPlayersArgs = {
  where?: Maybe<PlayerWhereInput>,
  orderBy?: Maybe<PlayerOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryTournamentArgs = {
  where: TournamentWhereUniqueInput
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput
};


export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTournamentsConnectionArgs = {
  where?: Maybe<TournamentWhereInput>,
  orderBy?: Maybe<TournamentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTeamsConnectionArgs = {
  where?: Maybe<TeamWhereInput>,
  orderBy?: Maybe<TeamOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPlayersConnectionArgs = {
  where?: Maybe<PlayerWhereInput>,
  orderBy?: Maybe<PlayerOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Subscription = {
   __typename?: 'Subscription',
  user?: Maybe<UserSubscriptionPayload>,
  tournament?: Maybe<TournamentSubscriptionPayload>,
  team?: Maybe<TeamSubscriptionPayload>,
  player?: Maybe<PlayerSubscriptionPayload>,
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
};


export type SubscriptionTournamentArgs = {
  where?: Maybe<TournamentSubscriptionWhereInput>
=======
export type CreateTeamInput = {
  name?: Maybe<Array<Scalars['String']>>,
};

export type Match = {
   __typename?: 'Match',
  id: Scalars['ID'],
  teamA: Team,
  teamB: Team,
  schedule: Schedule,
>>>>>>> Stashed changes
};

export type Mutation = {
   __typename?: 'Mutation',
  createTournament: Tournament,
  createUser: User,
};


<<<<<<< Updated upstream
export type SubscriptionPlayerArgs = {
  where?: Maybe<PlayerSubscriptionWhereInput>
};

export type Team = Node & {
   __typename?: 'Team',
=======
export type MutationCreateTournamentArgs = {
  data: TournamentCreateInput
};


export type MutationCreateUserArgs = {
  data: UserCreatInput
};

export type Player = {
   __typename?: 'Player',
>>>>>>> Stashed changes
  id: Scalars['ID'],
  name: Scalars['String'],
  team: Team,
};

export type Query = {
   __typename?: 'Query',
  tournament: Tournament,
  player: Player,
  team: Team,
  users?: Maybe<Array<User>>,
  players?: Maybe<Array<Player>>,
  tournaments?: Maybe<Array<Tournament>>,
  teams?: Maybe<Array<Team>>,
  schedules?: Maybe<Array<Schedule>>,
  matches?: Maybe<Array<Match>>,
  userByEmail: User,
};


export type QueryTournamentArgs = {
  id: Scalars['ID']
};


export type QueryPlayerArgs = {
  id: Scalars['ID']
};

<<<<<<< Updated upstream
export type TeamCreateOneWithoutPlayersInput = {
  create?: Maybe<TeamCreateWithoutPlayersInput>,
  connect?: Maybe<TeamWhereUniqueInput>,
=======

export type QueryTeamArgs = {
  id: Scalars['ID']
>>>>>>> Stashed changes
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']
};

export type Schedule = {
   __typename?: 'Schedule',
  id: Scalars['ID'],
  week?: Maybe<Scalars['Int']>,
  matches?: Maybe<Array<Match>>,
  season: Season,
};

export type Season = {
   __typename?: 'Season',
  id: Scalars['ID'],
  name: Scalars['String'],
  schedules?: Maybe<Array<Schedule>>,
  tournament: Tournament,
};

<<<<<<< Updated upstream
export type TeamScalarWhereInput = {
  AND?: Maybe<Array<TeamScalarWhereInput>>,
  OR?: Maybe<Array<TeamScalarWhereInput>>,
  NOT?: Maybe<Array<TeamScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
};

export type TeamSubscriptionPayload = {
   __typename?: 'TeamSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Team>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<TeamPreviousValues>,
};

export type TeamSubscriptionWhereInput = {
  AND?: Maybe<Array<TeamSubscriptionWhereInput>>,
  OR?: Maybe<Array<TeamSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TeamSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<TeamWhereInput>,
};

export type TeamUpdateInput = {
  name?: Maybe<Scalars['String']>,
  tournament?: Maybe<TournamentUpdateOneRequiredWithoutTeamsInput>,
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>,
};

export type TeamUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type TeamUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
};

export type TeamUpdateManyWithoutTournamentInput = {
  create?: Maybe<Array<TeamCreateWithoutTournamentInput>>,
  connect?: Maybe<Array<TeamWhereUniqueInput>>,
  set?: Maybe<Array<TeamWhereUniqueInput>>,
  disconnect?: Maybe<Array<TeamWhereUniqueInput>>,
  delete?: Maybe<Array<TeamWhereUniqueInput>>,
  update?: Maybe<Array<TeamUpdateWithWhereUniqueWithoutTournamentInput>>,
  updateMany?: Maybe<Array<TeamUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<TeamScalarWhereInput>>,
  upsert?: Maybe<Array<TeamUpsertWithWhereUniqueWithoutTournamentInput>>,
};

export type TeamUpdateManyWithWhereNestedInput = {
  where: TeamScalarWhereInput,
  data: TeamUpdateManyDataInput,
};

export type TeamUpdateOneRequiredWithoutPlayersInput = {
  create?: Maybe<TeamCreateWithoutPlayersInput>,
  connect?: Maybe<TeamWhereUniqueInput>,
  update?: Maybe<TeamUpdateWithoutPlayersDataInput>,
  upsert?: Maybe<TeamUpsertWithoutPlayersInput>,
};

export type TeamUpdateWithoutPlayersDataInput = {
  name?: Maybe<Scalars['String']>,
  tournament?: Maybe<TournamentUpdateOneRequiredWithoutTeamsInput>,
};

export type TeamUpdateWithoutTournamentDataInput = {
  name?: Maybe<Scalars['String']>,
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>,
};

export type TeamUpdateWithWhereUniqueWithoutTournamentInput = {
  where: TeamWhereUniqueInput,
  data: TeamUpdateWithoutTournamentDataInput,
};

export type TeamUpsertWithoutPlayersInput = {
  update: TeamUpdateWithoutPlayersDataInput,
  create: TeamCreateWithoutPlayersInput,
};

export type TeamUpsertWithWhereUniqueWithoutTournamentInput = {
  where: TeamWhereUniqueInput,
  update: TeamUpdateWithoutTournamentDataInput,
  create: TeamCreateWithoutTournamentInput,
};

export type TeamWhereInput = {
  AND?: Maybe<Array<TeamWhereInput>>,
  OR?: Maybe<Array<TeamWhereInput>>,
  NOT?: Maybe<Array<TeamWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  tournament?: Maybe<TournamentWhereInput>,
  players_every?: Maybe<PlayerWhereInput>,
  players_some?: Maybe<PlayerWhereInput>,
  players_none?: Maybe<PlayerWhereInput>,
};

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
=======
export type Team = {
   __typename?: 'Team',
  id: Scalars['ID'],
  name: Scalars['String'],
  players?: Maybe<Array<Player>>,
  tournament: Tournament,
>>>>>>> Stashed changes
};

export type Tournament = Node & {
   __typename?: 'Tournament',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['String']>,
  end?: Maybe<Scalars['String']>,
  teams?: Maybe<Array<Team>>,
};

<<<<<<< Updated upstream

export type TournamentTeamsArgs = {
  where?: Maybe<TeamWhereInput>,
  orderBy?: Maybe<TeamOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type TournamentConnection = {
   __typename?: 'TournamentConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TournamentEdge>>,
  aggregate: AggregateTournament,
};

export type TournamentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  owner: UserCreateOneWithoutTournamentsInput,
  teams?: Maybe<TeamCreateManyWithoutTournamentInput>,
};

export type TournamentCreateManyWithoutOwnerInput = {
  create?: Maybe<Array<TournamentCreateWithoutOwnerInput>>,
  connect?: Maybe<Array<TournamentWhereUniqueInput>>,
};

export type TournamentCreateOneWithoutTeamsInput = {
  create?: Maybe<TournamentCreateWithoutTeamsInput>,
  connect?: Maybe<TournamentWhereUniqueInput>,
};

export type TournamentCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  teams?: Maybe<TeamCreateManyWithoutTournamentInput>,
};

export type TournamentCreateWithoutTeamsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  owner: UserCreateOneWithoutTournamentsInput,
};

export type TournamentEdge = {
   __typename?: 'TournamentEdge',
  node: Tournament,
  cursor: Scalars['String'],
};

export enum TournamentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  StartAsc = 'start_ASC',
  StartDesc = 'start_DESC',
  EndAsc = 'end_ASC',
  EndDesc = 'end_DESC'
}

export type TournamentPreviousValues = {
   __typename?: 'TournamentPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
};

export type TournamentScalarWhereInput = {
  AND?: Maybe<Array<TournamentScalarWhereInput>>,
  OR?: Maybe<Array<TournamentScalarWhereInput>>,
  NOT?: Maybe<Array<TournamentScalarWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  start_not?: Maybe<Scalars['DateTime']>,
  start_in?: Maybe<Array<Scalars['DateTime']>>,
  start_not_in?: Maybe<Array<Scalars['DateTime']>>,
  start_lt?: Maybe<Scalars['DateTime']>,
  start_lte?: Maybe<Scalars['DateTime']>,
  start_gt?: Maybe<Scalars['DateTime']>,
  start_gte?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  end_not?: Maybe<Scalars['DateTime']>,
  end_in?: Maybe<Array<Scalars['DateTime']>>,
  end_not_in?: Maybe<Array<Scalars['DateTime']>>,
  end_lt?: Maybe<Scalars['DateTime']>,
  end_lte?: Maybe<Scalars['DateTime']>,
  end_gt?: Maybe<Scalars['DateTime']>,
  end_gte?: Maybe<Scalars['DateTime']>,
};

export type TournamentSubscriptionPayload = {
   __typename?: 'TournamentSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Tournament>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<TournamentPreviousValues>,
};

export type TournamentSubscriptionWhereInput = {
  AND?: Maybe<Array<TournamentSubscriptionWhereInput>>,
  OR?: Maybe<Array<TournamentSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TournamentSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<TournamentWhereInput>,
};

export type TournamentUpdateInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  owner?: Maybe<UserUpdateOneRequiredWithoutTournamentsInput>,
  teams?: Maybe<TeamUpdateManyWithoutTournamentInput>,
};

export type TournamentUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
};

export type TournamentUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
};

export type TournamentUpdateManyWithoutOwnerInput = {
  create?: Maybe<Array<TournamentCreateWithoutOwnerInput>>,
  connect?: Maybe<Array<TournamentWhereUniqueInput>>,
  set?: Maybe<Array<TournamentWhereUniqueInput>>,
  disconnect?: Maybe<Array<TournamentWhereUniqueInput>>,
  delete?: Maybe<Array<TournamentWhereUniqueInput>>,
  update?: Maybe<Array<TournamentUpdateWithWhereUniqueWithoutOwnerInput>>,
  updateMany?: Maybe<Array<TournamentUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<TournamentScalarWhereInput>>,
  upsert?: Maybe<Array<TournamentUpsertWithWhereUniqueWithoutOwnerInput>>,
};

export type TournamentUpdateManyWithWhereNestedInput = {
  where: TournamentScalarWhereInput,
  data: TournamentUpdateManyDataInput,
};

export type TournamentUpdateOneRequiredWithoutTeamsInput = {
  create?: Maybe<TournamentCreateWithoutTeamsInput>,
  connect?: Maybe<TournamentWhereUniqueInput>,
  update?: Maybe<TournamentUpdateWithoutTeamsDataInput>,
  upsert?: Maybe<TournamentUpsertWithoutTeamsInput>,
};

export type TournamentUpdateWithoutOwnerDataInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  teams?: Maybe<TeamUpdateManyWithoutTournamentInput>,
};

export type TournamentUpdateWithoutTeamsDataInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  owner?: Maybe<UserUpdateOneRequiredWithoutTournamentsInput>,
};

export type TournamentUpdateWithWhereUniqueWithoutOwnerInput = {
  where: TournamentWhereUniqueInput,
  data: TournamentUpdateWithoutOwnerDataInput,
};

export type TournamentUpsertWithoutTeamsInput = {
  update: TournamentUpdateWithoutTeamsDataInput,
  create: TournamentCreateWithoutTeamsInput,
};

export type TournamentUpsertWithWhereUniqueWithoutOwnerInput = {
  where: TournamentWhereUniqueInput,
  update: TournamentUpdateWithoutOwnerDataInput,
  create: TournamentCreateWithoutOwnerInput,
};

export type TournamentWhereInput = {
  AND?: Maybe<Array<TournamentWhereInput>>,
  OR?: Maybe<Array<TournamentWhereInput>>,
  NOT?: Maybe<Array<TournamentWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  description_not?: Maybe<Scalars['String']>,
  description_in?: Maybe<Array<Scalars['String']>>,
  description_not_in?: Maybe<Array<Scalars['String']>>,
  description_lt?: Maybe<Scalars['String']>,
  description_lte?: Maybe<Scalars['String']>,
  description_gt?: Maybe<Scalars['String']>,
  description_gte?: Maybe<Scalars['String']>,
  description_contains?: Maybe<Scalars['String']>,
  description_not_contains?: Maybe<Scalars['String']>,
  description_starts_with?: Maybe<Scalars['String']>,
  description_not_starts_with?: Maybe<Scalars['String']>,
  description_ends_with?: Maybe<Scalars['String']>,
  description_not_ends_with?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  start_not?: Maybe<Scalars['DateTime']>,
  start_in?: Maybe<Array<Scalars['DateTime']>>,
  start_not_in?: Maybe<Array<Scalars['DateTime']>>,
  start_lt?: Maybe<Scalars['DateTime']>,
  start_lte?: Maybe<Scalars['DateTime']>,
  start_gt?: Maybe<Scalars['DateTime']>,
  start_gte?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  end_not?: Maybe<Scalars['DateTime']>,
  end_in?: Maybe<Array<Scalars['DateTime']>>,
  end_not_in?: Maybe<Array<Scalars['DateTime']>>,
  end_lt?: Maybe<Scalars['DateTime']>,
  end_lte?: Maybe<Scalars['DateTime']>,
  end_gt?: Maybe<Scalars['DateTime']>,
  end_gte?: Maybe<Scalars['DateTime']>,
  owner?: Maybe<UserWhereInput>,
  teams_every?: Maybe<TeamWhereInput>,
  teams_some?: Maybe<TeamWhereInput>,
  teams_none?: Maybe<TeamWhereInput>,
};

export type TournamentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
=======
export type TournamentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['String']>,
  end?: Maybe<Scalars['String']>,
  teams?: Maybe<CreateTeamInput>,
>>>>>>> Stashed changes
};

export type User = Node & {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
  tournaments?: Maybe<Array<Tournament>>,
};

<<<<<<< Updated upstream

export type UserTournamentsArgs = {
  where?: Maybe<TournamentWhereInput>,
  orderBy?: Maybe<TournamentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserConnection = {
   __typename?: 'UserConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<UserEdge>>,
  aggregate: AggregateUser,
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  tournaments?: Maybe<TournamentCreateManyWithoutOwnerInput>,
};

export type UserCreateOneWithoutTournamentsInput = {
  create?: Maybe<UserCreateWithoutTournamentsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutTournamentsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

export type UserEdge = {
   __typename?: 'UserEdge',
  node: User,
  cursor: Scalars['String'],
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type UserSubscriptionPayload = {
   __typename?: 'UserSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type UserSubscriptionWhereInput = {
  AND?: Maybe<Array<UserSubscriptionWhereInput>>,
  OR?: Maybe<Array<UserSubscriptionWhereInput>>,
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>,
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserWhereInput>,
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>,
  tournaments?: Maybe<TournamentUpdateManyWithoutOwnerInput>,
};

export type UserUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
};

export type UserUpdateOneRequiredWithoutTournamentsInput = {
  create?: Maybe<UserCreateWithoutTournamentsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutTournamentsDataInput>,
  upsert?: Maybe<UserUpsertWithoutTournamentsInput>,
};

export type UserUpdateWithoutTournamentsDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type UserUpsertWithoutTournamentsInput = {
  update: UserUpdateWithoutTournamentsDataInput,
  create: UserCreateWithoutTournamentsInput,
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  tournaments_every?: Maybe<TournamentWhereInput>,
  tournaments_some?: Maybe<TournamentWhereInput>,
  tournaments_none?: Maybe<TournamentWhereInput>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type DeletePlayerMutationVariables = {
  id: Scalars['ID']
};


export type DeletePlayerMutation = (
  { __typename?: 'Mutation' }
  & { deletePlayer: Maybe<(
    { __typename?: 'Player' }
    & Pick<Player, 'id'>
  )> }
);

export type CreateTeamMutationVariables = {
  name: Scalars['String'],
  tournament: TournamentCreateOneWithoutTeamsInput,
  players?: Maybe<PlayerCreateManyWithoutTeamInput>
};


export type CreateTeamMutation = (
  { __typename?: 'Mutation' }
  & { createTeam: (
    { __typename?: 'Team' }
    & Pick<Team, 'id'>
  ) }
);

export type DeleteTeamMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTeamMutation = (
  { __typename?: 'Mutation' }
  & { deleteTeam: Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id'>
  )> }
);

export type UpdateTeamMutationVariables = {
  id: Scalars['ID'],
  name: Scalars['String'],
  tournament?: Maybe<TournamentUpdateOneRequiredWithoutTeamsInput>,
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>
};


export type UpdateTeamMutation = (
  { __typename?: 'Mutation' }
  & { updateTeam: Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id'>
  )> }
);
=======
export type UserCreatInput = {
  name: Scalars['String'],
  email: Scalars['String'],
};
>>>>>>> Stashed changes

export type CreateTournamentMutationVariables = {
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  owner: UserCreateOneWithoutTournamentsInput
};


export type CreateTournamentMutation = (
  { __typename?: 'Mutation' }
  & { createTournament: (
    { __typename?: 'Tournament' }
    & Pick<Tournament, 'id'>
  ) }
);

export type CreateUserMutationVariables = {
  data: UserCreatInput
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  ) }
);

export type TournamentQueryVariables = {
  id: Scalars['ID']
};


export type TournamentQuery = (
  { __typename?: 'Query' }
  & { tournament: (
    { __typename?: 'Tournament' }
    & Pick<Tournament, 'id' | 'name' | 'description' | 'start' | 'end'>
    & { teams: Maybe<Array<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'name'>
    )>> }
  ) }
);

export type GetUserByEmailQueryVariables = {
  email: Scalars['String']
};


export type GetUserByEmailQuery = (
  { __typename?: 'Query' }
  & { userByEmail: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  ) }
);


<<<<<<< Updated upstream
/**
 * __useUpdateTeamMutation__
 *
 * To run a mutation, you first call `useUpdateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTeamMutation, { data, loading, error }] = useUpdateTeamMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      tournament: // value for 'tournament'
 *      players: // value for 'players'
 *   },
 * });
 */
export function useUpdateTeamMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTeamMutation, UpdateTeamMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTeamMutation, UpdateTeamMutationVariables>(UpdateTeamDocument, baseOptions);
      }
export type UpdateTeamMutationHookResult = ReturnType<typeof useUpdateTeamMutation>;
export type UpdateTeamMutationResult = ApolloReactCommon.MutationResult<UpdateTeamMutation>;
export type UpdateTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTeamMutation, UpdateTeamMutationVariables>;
export const CreateTournamentDocument = gql`
    mutation CreateTournament($name: String!, $description: String, $start: DateTime, $end: DateTime, $owner: UserCreateOneWithoutTournamentsInput!) {
  createTournament(data: {name: $name, description: $description, start: $start, end: $end, owner: $owner}) {
=======
export const CreateTournamentWithScheduleDocument = gql`
    mutation createTournamentWithSchedule($data: TournamentCreateInput!) {
  createTournament(data: $data) {
>>>>>>> Stashed changes
    id
  }
}
    `;
export type CreateTournamentMutationFn = ApolloReactCommon.MutationFunction<CreateTournamentMutation, CreateTournamentMutationVariables>;
export type CreateTournamentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTournamentMutation, CreateTournamentMutationVariables>, 'mutation'>;

    export const CreateTournamentComponent = (props: CreateTournamentComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTournamentMutation, CreateTournamentMutationVariables> mutation={CreateTournamentDocument} {...props} />
    );
    

/**
 * __useCreateTournamentMutation__
 *
 * To run a mutation, you first call `useCreateTournamentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTournamentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTournamentMutation, { data, loading, error }] = useCreateTournamentMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useCreateTournamentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTournamentMutation, CreateTournamentMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTournamentMutation, CreateTournamentMutationVariables>(CreateTournamentDocument, baseOptions);
      }
<<<<<<< Updated upstream
export type CreateTournamentMutationHookResult = ReturnType<typeof useCreateTournamentMutation>;
export type CreateTournamentMutationResult = ApolloReactCommon.MutationResult<CreateTournamentMutation>;
export type CreateTournamentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTournamentMutation, CreateTournamentMutationVariables>;
export const DeleteTournamentDocument = gql`
    mutation DeleteTournament($id: ID!) {
  deleteTournament(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteTournamentMutationFn = ApolloReactCommon.MutationFunction<DeleteTournamentMutation, DeleteTournamentMutationVariables>;
export type DeleteTournamentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteTournamentMutation, DeleteTournamentMutationVariables>, 'mutation'>;

    export const DeleteTournamentComponent = (props: DeleteTournamentComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteTournamentMutation, DeleteTournamentMutationVariables> mutation={DeleteTournamentDocument} {...props} />
    );
    

/**
 * __useDeleteTournamentMutation__
 *
 * To run a mutation, you first call `useDeleteTournamentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTournamentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTournamentMutation, { data, loading, error }] = useDeleteTournamentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTournamentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTournamentMutation, DeleteTournamentMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTournamentMutation, DeleteTournamentMutationVariables>(DeleteTournamentDocument, baseOptions);
      }
export type DeleteTournamentMutationHookResult = ReturnType<typeof useDeleteTournamentMutation>;
export type DeleteTournamentMutationResult = ApolloReactCommon.MutationResult<DeleteTournamentMutation>;
export type DeleteTournamentMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTournamentMutation, DeleteTournamentMutationVariables>;
export const UpdateTournamentDocument = gql`
    mutation UpdateTournament($name: String!, $description: String, $start: DateTime, $end: DateTime, $id: ID!, $owner: UserUpdateOneRequiredWithoutTournamentsInput!) {
  updateTournament(data: {name: $name, description: $description, start: $start, end: $end, owner: $owner}, where: {id: $id}) {
=======
export type CreateTournamentWithScheduleMutationHookResult = ReturnType<typeof useCreateTournamentWithScheduleMutation>;
export type CreateTournamentWithScheduleMutationResult = ApolloReactCommon.MutationResult<CreateTournamentWithScheduleMutation>;
export type CreateTournamentWithScheduleMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTournamentWithScheduleMutation, CreateTournamentWithScheduleMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: UserCreatInput!) {
  createUser(data: $data) {
>>>>>>> Stashed changes
    id
    name
    email
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const TournamentDocument = gql`
    query Tournament($id: ID!) {
  tournament(id: $id) {
    id
    name
    description
    start
    end
    teams {
      id
      name
    }
  }
}
    `;
export type TournamentComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TournamentQuery, TournamentQueryVariables>, 'query'> & ({ variables: TournamentQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TournamentComponent = (props: TournamentComponentProps) => (
      <ApolloReactComponents.Query<TournamentQuery, TournamentQueryVariables> query={TournamentDocument} {...props} />
    );
    

/**
 * __useTournamentQuery__
 *
 * To run a query within a React component, call `useTournamentQuery` and pass it any options that fit your needs.
 * When your component renders, `useTournamentQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTournamentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTournamentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TournamentQuery, TournamentQueryVariables>) {
        return ApolloReactHooks.useQuery<TournamentQuery, TournamentQueryVariables>(TournamentDocument, baseOptions);
      }
export function useTournamentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TournamentQuery, TournamentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TournamentQuery, TournamentQueryVariables>(TournamentDocument, baseOptions);
        }
export type TournamentQueryHookResult = ReturnType<typeof useTournamentQuery>;
export type TournamentLazyQueryHookResult = ReturnType<typeof useTournamentLazyQuery>;
export type TournamentQueryResult = ApolloReactCommon.QueryResult<TournamentQuery, TournamentQueryVariables>;
export const GetUserByEmailDocument = gql`
    query GetUserByEmail($email: String!) {
  userByEmail(email: $email) {
    id
    name
    email
  }
}
    `;
export type GetUserByEmailComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>, 'query'> & ({ variables: GetUserByEmailQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUserByEmailComponent = (props: GetUserByEmailComponentProps) => (
      <ApolloReactComponents.Query<GetUserByEmailQuery, GetUserByEmailQueryVariables> query={GetUserByEmailDocument} {...props} />
    );
    

/**
 * __useGetUserByEmailQuery__
 *
 * To run a query within a React component, call `useGetUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserByEmailQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, baseOptions);
      }
export function useGetUserByEmailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserByEmailQuery, GetUserByEmailQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserByEmailQuery, GetUserByEmailQueryVariables>(GetUserByEmailDocument, baseOptions);
        }
export type GetUserByEmailQueryHookResult = ReturnType<typeof useGetUserByEmailQuery>;
export type GetUserByEmailLazyQueryHookResult = ReturnType<typeof useGetUserByEmailLazyQuery>;
export type GetUserByEmailQueryResult = ApolloReactCommon.QueryResult<GetUserByEmailQuery, GetUserByEmailQueryVariables>;