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
  DateTime: any,
  Long: any,
};

export type AggregateMatch = {
   __typename?: 'AggregateMatch',
  count: Scalars['Int'],
};

export type AggregatePlayer = {
   __typename?: 'AggregatePlayer',
  count: Scalars['Int'],
};

export type AggregateSchedule = {
   __typename?: 'AggregateSchedule',
  count: Scalars['Int'],
};

export type AggregateSeason = {
   __typename?: 'AggregateSeason',
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



export type Match = {
   __typename?: 'Match',
  id: Scalars['ID'],
  teamA: Team,
  teamB: Team,
  schedule: Schedule,
};

export type MatchConnection = {
   __typename?: 'MatchConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<MatchEdge>>,
  aggregate: AggregateMatch,
};

export type MatchCreateInput = {
  id?: Maybe<Scalars['ID']>,
  teamA: TeamCreateOneInput,
  teamB: TeamCreateOneInput,
  schedule: ScheduleCreateOneWithoutMatchesInput,
};

export type MatchCreateManyWithoutScheduleInput = {
  create?: Maybe<Array<MatchCreateWithoutScheduleInput>>,
  connect?: Maybe<Array<MatchWhereUniqueInput>>,
};

export type MatchCreateWithoutScheduleInput = {
  id?: Maybe<Scalars['ID']>,
  teamA: TeamCreateOneInput,
  teamB: TeamCreateOneInput,
};

export type MatchEdge = {
   __typename?: 'MatchEdge',
  node: Match,
  cursor: Scalars['String'],
};

export enum MatchOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type MatchPreviousValues = {
   __typename?: 'MatchPreviousValues',
  id: Scalars['ID'],
};

export type MatchScalarWhereInput = {
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
  AND?: Maybe<Array<MatchScalarWhereInput>>,
  OR?: Maybe<Array<MatchScalarWhereInput>>,
  NOT?: Maybe<Array<MatchScalarWhereInput>>,
};

export type MatchSubscriptionPayload = {
   __typename?: 'MatchSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Match>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<MatchPreviousValues>,
};

export type MatchSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<MatchWhereInput>,
  AND?: Maybe<Array<MatchSubscriptionWhereInput>>,
  OR?: Maybe<Array<MatchSubscriptionWhereInput>>,
  NOT?: Maybe<Array<MatchSubscriptionWhereInput>>,
};

export type MatchUpdateInput = {
  teamA?: Maybe<TeamUpdateOneRequiredInput>,
  teamB?: Maybe<TeamUpdateOneRequiredInput>,
  schedule?: Maybe<ScheduleUpdateOneRequiredWithoutMatchesInput>,
};

export type MatchUpdateManyWithoutScheduleInput = {
  create?: Maybe<Array<MatchCreateWithoutScheduleInput>>,
  delete?: Maybe<Array<MatchWhereUniqueInput>>,
  connect?: Maybe<Array<MatchWhereUniqueInput>>,
  set?: Maybe<Array<MatchWhereUniqueInput>>,
  disconnect?: Maybe<Array<MatchWhereUniqueInput>>,
  update?: Maybe<Array<MatchUpdateWithWhereUniqueWithoutScheduleInput>>,
  upsert?: Maybe<Array<MatchUpsertWithWhereUniqueWithoutScheduleInput>>,
  deleteMany?: Maybe<Array<MatchScalarWhereInput>>,
};

export type MatchUpdateWithoutScheduleDataInput = {
  teamA?: Maybe<TeamUpdateOneRequiredInput>,
  teamB?: Maybe<TeamUpdateOneRequiredInput>,
};

export type MatchUpdateWithWhereUniqueWithoutScheduleInput = {
  where: MatchWhereUniqueInput,
  data: MatchUpdateWithoutScheduleDataInput,
};

export type MatchUpsertWithWhereUniqueWithoutScheduleInput = {
  where: MatchWhereUniqueInput,
  update: MatchUpdateWithoutScheduleDataInput,
  create: MatchCreateWithoutScheduleInput,
};

export type MatchWhereInput = {
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
  teamA?: Maybe<TeamWhereInput>,
  teamB?: Maybe<TeamWhereInput>,
  schedule?: Maybe<ScheduleWhereInput>,
  AND?: Maybe<Array<MatchWhereInput>>,
  OR?: Maybe<Array<MatchWhereInput>>,
  NOT?: Maybe<Array<MatchWhereInput>>,
};

export type MatchWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createMatch: Match,
  updateMatch?: Maybe<Match>,
  upsertMatch: Match,
  deleteMatch?: Maybe<Match>,
  deleteManyMatches: BatchPayload,
  createPlayer: Player,
  updatePlayer?: Maybe<Player>,
  updateManyPlayers: BatchPayload,
  upsertPlayer: Player,
  deletePlayer?: Maybe<Player>,
  deleteManyPlayers: BatchPayload,
  createSchedule: Schedule,
  updateSchedule?: Maybe<Schedule>,
  updateManySchedules: BatchPayload,
  upsertSchedule: Schedule,
  deleteSchedule?: Maybe<Schedule>,
  deleteManySchedules: BatchPayload,
  createSeason: Season,
  updateSeason?: Maybe<Season>,
  updateManySeasons: BatchPayload,
  upsertSeason: Season,
  deleteSeason?: Maybe<Season>,
  deleteManySeasons: BatchPayload,
  createTeam: Team,
  updateTeam?: Maybe<Team>,
  updateManyTeams: BatchPayload,
  upsertTeam: Team,
  deleteTeam?: Maybe<Team>,
  deleteManyTeams: BatchPayload,
  createTournament: Tournament,
  updateTournament?: Maybe<Tournament>,
  updateManyTournaments: BatchPayload,
  upsertTournament: Tournament,
  deleteTournament?: Maybe<Tournament>,
  deleteManyTournaments: BatchPayload,
  createUser: User,
  updateUser?: Maybe<User>,
  updateManyUsers: BatchPayload,
  upsertUser: User,
  deleteUser?: Maybe<User>,
  deleteManyUsers: BatchPayload,
};


export type MutationCreateMatchArgs = {
  data: MatchCreateInput
};


export type MutationUpdateMatchArgs = {
  data: MatchUpdateInput,
  where: MatchWhereUniqueInput
};


export type MutationUpsertMatchArgs = {
  where: MatchWhereUniqueInput,
  create: MatchCreateInput,
  update: MatchUpdateInput
};


export type MutationDeleteMatchArgs = {
  where: MatchWhereUniqueInput
};


export type MutationDeleteManyMatchesArgs = {
  where?: Maybe<MatchWhereInput>
};


export type MutationCreatePlayerArgs = {
  data: PlayerCreateInput
};


export type MutationUpdatePlayerArgs = {
  data: PlayerUpdateInput,
  where: PlayerWhereUniqueInput
};


export type MutationUpdateManyPlayersArgs = {
  data: PlayerUpdateManyMutationInput,
  where?: Maybe<PlayerWhereInput>
};


export type MutationUpsertPlayerArgs = {
  where: PlayerWhereUniqueInput,
  create: PlayerCreateInput,
  update: PlayerUpdateInput
};


export type MutationDeletePlayerArgs = {
  where: PlayerWhereUniqueInput
};


export type MutationDeleteManyPlayersArgs = {
  where?: Maybe<PlayerWhereInput>
};


export type MutationCreateScheduleArgs = {
  data: ScheduleCreateInput
};


export type MutationUpdateScheduleArgs = {
  data: ScheduleUpdateInput,
  where: ScheduleWhereUniqueInput
};


export type MutationUpdateManySchedulesArgs = {
  data: ScheduleUpdateManyMutationInput,
  where?: Maybe<ScheduleWhereInput>
};


export type MutationUpsertScheduleArgs = {
  where: ScheduleWhereUniqueInput,
  create: ScheduleCreateInput,
  update: ScheduleUpdateInput
};


export type MutationDeleteScheduleArgs = {
  where: ScheduleWhereUniqueInput
};


export type MutationDeleteManySchedulesArgs = {
  where?: Maybe<ScheduleWhereInput>
};


export type MutationCreateSeasonArgs = {
  data: SeasonCreateInput
};


export type MutationUpdateSeasonArgs = {
  data: SeasonUpdateInput,
  where: SeasonWhereUniqueInput
};


export type MutationUpdateManySeasonsArgs = {
  data: SeasonUpdateManyMutationInput,
  where?: Maybe<SeasonWhereInput>
};


export type MutationUpsertSeasonArgs = {
  where: SeasonWhereUniqueInput,
  create: SeasonCreateInput,
  update: SeasonUpdateInput
};


export type MutationDeleteSeasonArgs = {
  where: SeasonWhereUniqueInput
};


export type MutationDeleteManySeasonsArgs = {
  where?: Maybe<SeasonWhereInput>
};


export type MutationCreateTeamArgs = {
  data: TeamCreateInput
};


export type MutationUpdateTeamArgs = {
  data: TeamUpdateInput,
  where: TeamWhereUniqueInput
};


export type MutationUpdateManyTeamsArgs = {
  data: TeamUpdateManyMutationInput,
  where?: Maybe<TeamWhereInput>
};


export type MutationUpsertTeamArgs = {
  where: TeamWhereUniqueInput,
  create: TeamCreateInput,
  update: TeamUpdateInput
};


export type MutationDeleteTeamArgs = {
  where: TeamWhereUniqueInput
};


export type MutationDeleteManyTeamsArgs = {
  where?: Maybe<TeamWhereInput>
};


export type MutationCreateTournamentArgs = {
  data: TournamentCreateInput
};


export type MutationUpdateTournamentArgs = {
  data: TournamentUpdateInput,
  where: TournamentWhereUniqueInput
};


export type MutationUpdateManyTournamentsArgs = {
  data: TournamentUpdateManyMutationInput,
  where?: Maybe<TournamentWhereInput>
};


export type MutationUpsertTournamentArgs = {
  where: TournamentWhereUniqueInput,
  create: TournamentCreateInput,
  update: TournamentUpdateInput
};


export type MutationDeleteTournamentArgs = {
  where: TournamentWhereUniqueInput
};


export type MutationDeleteManyTournamentsArgs = {
  where?: Maybe<TournamentWhereInput>
};


export type MutationCreateUserArgs = {
  data: UserCreateInput
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput,
  where: UserWhereUniqueInput
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput,
  where?: Maybe<UserWhereInput>
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput,
  create: UserCreateInput,
  update: UserUpdateInput
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
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

export type Player = {
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
  AND?: Maybe<Array<PlayerScalarWhereInput>>,
  OR?: Maybe<Array<PlayerScalarWhereInput>>,
  NOT?: Maybe<Array<PlayerScalarWhereInput>>,
};

export type PlayerSubscriptionPayload = {
   __typename?: 'PlayerSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Player>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PlayerPreviousValues>,
};

export type PlayerSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PlayerWhereInput>,
  AND?: Maybe<Array<PlayerSubscriptionWhereInput>>,
  OR?: Maybe<Array<PlayerSubscriptionWhereInput>>,
  NOT?: Maybe<Array<PlayerSubscriptionWhereInput>>,
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
  delete?: Maybe<Array<PlayerWhereUniqueInput>>,
  connect?: Maybe<Array<PlayerWhereUniqueInput>>,
  set?: Maybe<Array<PlayerWhereUniqueInput>>,
  disconnect?: Maybe<Array<PlayerWhereUniqueInput>>,
  update?: Maybe<Array<PlayerUpdateWithWhereUniqueWithoutTeamInput>>,
  upsert?: Maybe<Array<PlayerUpsertWithWhereUniqueWithoutTeamInput>>,
  deleteMany?: Maybe<Array<PlayerScalarWhereInput>>,
  updateMany?: Maybe<Array<PlayerUpdateManyWithWhereNestedInput>>,
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
  AND?: Maybe<Array<PlayerWhereInput>>,
  OR?: Maybe<Array<PlayerWhereInput>>,
  NOT?: Maybe<Array<PlayerWhereInput>>,
};

export type PlayerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Query = {
   __typename?: 'Query',
  match?: Maybe<Match>,
  matches: Array<Maybe<Match>>,
  matchesConnection: MatchConnection,
  player?: Maybe<Player>,
  players: Array<Maybe<Player>>,
  playersConnection: PlayerConnection,
  schedule?: Maybe<Schedule>,
  schedules: Array<Maybe<Schedule>>,
  schedulesConnection: ScheduleConnection,
  season?: Maybe<Season>,
  seasons: Array<Maybe<Season>>,
  seasonsConnection: SeasonConnection,
  team?: Maybe<Team>,
  teams: Array<Maybe<Team>>,
  teamsConnection: TeamConnection,
  tournament?: Maybe<Tournament>,
  tournaments: Array<Maybe<Tournament>>,
  tournamentsConnection: TournamentConnection,
  user?: Maybe<User>,
  users: Array<Maybe<User>>,
  usersConnection: UserConnection,
  node?: Maybe<Node>,
};


export type QueryMatchArgs = {
  where: MatchWhereUniqueInput
};


export type QueryMatchesArgs = {
  where?: Maybe<MatchWhereInput>,
  orderBy?: Maybe<MatchOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMatchesConnectionArgs = {
  where?: Maybe<MatchWhereInput>,
  orderBy?: Maybe<MatchOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput
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


export type QueryPlayersConnectionArgs = {
  where?: Maybe<PlayerWhereInput>,
  orderBy?: Maybe<PlayerOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryScheduleArgs = {
  where: ScheduleWhereUniqueInput
};


export type QuerySchedulesArgs = {
  where?: Maybe<ScheduleWhereInput>,
  orderBy?: Maybe<ScheduleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySchedulesConnectionArgs = {
  where?: Maybe<ScheduleWhereInput>,
  orderBy?: Maybe<ScheduleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySeasonArgs = {
  where: SeasonWhereUniqueInput
};


export type QuerySeasonsArgs = {
  where?: Maybe<SeasonWhereInput>,
  orderBy?: Maybe<SeasonOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySeasonsConnectionArgs = {
  where?: Maybe<SeasonWhereInput>,
  orderBy?: Maybe<SeasonOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput
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


export type QueryTeamsConnectionArgs = {
  where?: Maybe<TeamWhereInput>,
  orderBy?: Maybe<TeamOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryTournamentArgs = {
  where: TournamentWhereUniqueInput
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


export type QueryTournamentsConnectionArgs = {
  where?: Maybe<TournamentWhereInput>,
  orderBy?: Maybe<TournamentOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
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


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Schedule = {
   __typename?: 'Schedule',
  id: Scalars['ID'],
  week?: Maybe<Scalars['Int']>,
  matches?: Maybe<Array<Match>>,
  season: Season,
};


export type ScheduleMatchesArgs = {
  where?: Maybe<MatchWhereInput>,
  orderBy?: Maybe<MatchOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ScheduleConnection = {
   __typename?: 'ScheduleConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<ScheduleEdge>>,
  aggregate: AggregateSchedule,
};

export type ScheduleCreateInput = {
  id?: Maybe<Scalars['ID']>,
  week?: Maybe<Scalars['Int']>,
  matches?: Maybe<MatchCreateManyWithoutScheduleInput>,
  season: SeasonCreateOneWithoutSchedulesInput,
};

export type ScheduleCreateManyWithoutSeasonInput = {
  create?: Maybe<Array<ScheduleCreateWithoutSeasonInput>>,
  connect?: Maybe<Array<ScheduleWhereUniqueInput>>,
};

export type ScheduleCreateOneWithoutMatchesInput = {
  create?: Maybe<ScheduleCreateWithoutMatchesInput>,
  connect?: Maybe<ScheduleWhereUniqueInput>,
};

export type ScheduleCreateWithoutMatchesInput = {
  id?: Maybe<Scalars['ID']>,
  week?: Maybe<Scalars['Int']>,
  season: SeasonCreateOneWithoutSchedulesInput,
};

export type ScheduleCreateWithoutSeasonInput = {
  id?: Maybe<Scalars['ID']>,
  week?: Maybe<Scalars['Int']>,
  matches?: Maybe<MatchCreateManyWithoutScheduleInput>,
};

export type ScheduleEdge = {
   __typename?: 'ScheduleEdge',
  node: Schedule,
  cursor: Scalars['String'],
};

export enum ScheduleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  WeekAsc = 'week_ASC',
  WeekDesc = 'week_DESC'
}

export type SchedulePreviousValues = {
   __typename?: 'SchedulePreviousValues',
  id: Scalars['ID'],
  week?: Maybe<Scalars['Int']>,
};

export type ScheduleScalarWhereInput = {
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
  week?: Maybe<Scalars['Int']>,
  week_not?: Maybe<Scalars['Int']>,
  week_in?: Maybe<Array<Scalars['Int']>>,
  week_not_in?: Maybe<Array<Scalars['Int']>>,
  week_lt?: Maybe<Scalars['Int']>,
  week_lte?: Maybe<Scalars['Int']>,
  week_gt?: Maybe<Scalars['Int']>,
  week_gte?: Maybe<Scalars['Int']>,
  AND?: Maybe<Array<ScheduleScalarWhereInput>>,
  OR?: Maybe<Array<ScheduleScalarWhereInput>>,
  NOT?: Maybe<Array<ScheduleScalarWhereInput>>,
};

export type ScheduleSubscriptionPayload = {
   __typename?: 'ScheduleSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Schedule>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<SchedulePreviousValues>,
};

export type ScheduleSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<ScheduleWhereInput>,
  AND?: Maybe<Array<ScheduleSubscriptionWhereInput>>,
  OR?: Maybe<Array<ScheduleSubscriptionWhereInput>>,
  NOT?: Maybe<Array<ScheduleSubscriptionWhereInput>>,
};

export type ScheduleUpdateInput = {
  week?: Maybe<Scalars['Int']>,
  matches?: Maybe<MatchUpdateManyWithoutScheduleInput>,
  season?: Maybe<SeasonUpdateOneRequiredWithoutSchedulesInput>,
};

export type ScheduleUpdateManyDataInput = {
  week?: Maybe<Scalars['Int']>,
};

export type ScheduleUpdateManyMutationInput = {
  week?: Maybe<Scalars['Int']>,
};

export type ScheduleUpdateManyWithoutSeasonInput = {
  create?: Maybe<Array<ScheduleCreateWithoutSeasonInput>>,
  delete?: Maybe<Array<ScheduleWhereUniqueInput>>,
  connect?: Maybe<Array<ScheduleWhereUniqueInput>>,
  set?: Maybe<Array<ScheduleWhereUniqueInput>>,
  disconnect?: Maybe<Array<ScheduleWhereUniqueInput>>,
  update?: Maybe<Array<ScheduleUpdateWithWhereUniqueWithoutSeasonInput>>,
  upsert?: Maybe<Array<ScheduleUpsertWithWhereUniqueWithoutSeasonInput>>,
  deleteMany?: Maybe<Array<ScheduleScalarWhereInput>>,
  updateMany?: Maybe<Array<ScheduleUpdateManyWithWhereNestedInput>>,
};

export type ScheduleUpdateManyWithWhereNestedInput = {
  where: ScheduleScalarWhereInput,
  data: ScheduleUpdateManyDataInput,
};

export type ScheduleUpdateOneRequiredWithoutMatchesInput = {
  create?: Maybe<ScheduleCreateWithoutMatchesInput>,
  update?: Maybe<ScheduleUpdateWithoutMatchesDataInput>,
  upsert?: Maybe<ScheduleUpsertWithoutMatchesInput>,
  connect?: Maybe<ScheduleWhereUniqueInput>,
};

export type ScheduleUpdateWithoutMatchesDataInput = {
  week?: Maybe<Scalars['Int']>,
  season?: Maybe<SeasonUpdateOneRequiredWithoutSchedulesInput>,
};

export type ScheduleUpdateWithoutSeasonDataInput = {
  week?: Maybe<Scalars['Int']>,
  matches?: Maybe<MatchUpdateManyWithoutScheduleInput>,
};

export type ScheduleUpdateWithWhereUniqueWithoutSeasonInput = {
  where: ScheduleWhereUniqueInput,
  data: ScheduleUpdateWithoutSeasonDataInput,
};

export type ScheduleUpsertWithoutMatchesInput = {
  update: ScheduleUpdateWithoutMatchesDataInput,
  create: ScheduleCreateWithoutMatchesInput,
};

export type ScheduleUpsertWithWhereUniqueWithoutSeasonInput = {
  where: ScheduleWhereUniqueInput,
  update: ScheduleUpdateWithoutSeasonDataInput,
  create: ScheduleCreateWithoutSeasonInput,
};

export type ScheduleWhereInput = {
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
  week?: Maybe<Scalars['Int']>,
  week_not?: Maybe<Scalars['Int']>,
  week_in?: Maybe<Array<Scalars['Int']>>,
  week_not_in?: Maybe<Array<Scalars['Int']>>,
  week_lt?: Maybe<Scalars['Int']>,
  week_lte?: Maybe<Scalars['Int']>,
  week_gt?: Maybe<Scalars['Int']>,
  week_gte?: Maybe<Scalars['Int']>,
  matches_every?: Maybe<MatchWhereInput>,
  matches_some?: Maybe<MatchWhereInput>,
  matches_none?: Maybe<MatchWhereInput>,
  season?: Maybe<SeasonWhereInput>,
  AND?: Maybe<Array<ScheduleWhereInput>>,
  OR?: Maybe<Array<ScheduleWhereInput>>,
  NOT?: Maybe<Array<ScheduleWhereInput>>,
};

export type ScheduleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Season = {
   __typename?: 'Season',
  id: Scalars['ID'],
  name: Scalars['String'],
  schedules?: Maybe<Array<Schedule>>,
  tournament: Tournament,
};


export type SeasonSchedulesArgs = {
  where?: Maybe<ScheduleWhereInput>,
  orderBy?: Maybe<ScheduleOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type SeasonConnection = {
   __typename?: 'SeasonConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<SeasonEdge>>,
  aggregate: AggregateSeason,
};

export type SeasonCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  schedules?: Maybe<ScheduleCreateManyWithoutSeasonInput>,
  tournament: TournamentCreateOneWithoutSeasonsInput,
};

export type SeasonCreateManyWithoutTournamentInput = {
  create?: Maybe<Array<SeasonCreateWithoutTournamentInput>>,
  connect?: Maybe<Array<SeasonWhereUniqueInput>>,
};

export type SeasonCreateOneWithoutSchedulesInput = {
  create?: Maybe<SeasonCreateWithoutSchedulesInput>,
  connect?: Maybe<SeasonWhereUniqueInput>,
};

export type SeasonCreateWithoutSchedulesInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  tournament: TournamentCreateOneWithoutSeasonsInput,
};

export type SeasonCreateWithoutTournamentInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  schedules?: Maybe<ScheduleCreateManyWithoutSeasonInput>,
};

export type SeasonEdge = {
   __typename?: 'SeasonEdge',
  node: Season,
  cursor: Scalars['String'],
};

export enum SeasonOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type SeasonPreviousValues = {
   __typename?: 'SeasonPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type SeasonScalarWhereInput = {
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
  AND?: Maybe<Array<SeasonScalarWhereInput>>,
  OR?: Maybe<Array<SeasonScalarWhereInput>>,
  NOT?: Maybe<Array<SeasonScalarWhereInput>>,
};

export type SeasonSubscriptionPayload = {
   __typename?: 'SeasonSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Season>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<SeasonPreviousValues>,
};

export type SeasonSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<SeasonWhereInput>,
  AND?: Maybe<Array<SeasonSubscriptionWhereInput>>,
  OR?: Maybe<Array<SeasonSubscriptionWhereInput>>,
  NOT?: Maybe<Array<SeasonSubscriptionWhereInput>>,
};

export type SeasonUpdateInput = {
  name?: Maybe<Scalars['String']>,
  schedules?: Maybe<ScheduleUpdateManyWithoutSeasonInput>,
  tournament?: Maybe<TournamentUpdateOneRequiredWithoutSeasonsInput>,
};

export type SeasonUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type SeasonUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>,
};

export type SeasonUpdateManyWithoutTournamentInput = {
  create?: Maybe<Array<SeasonCreateWithoutTournamentInput>>,
  delete?: Maybe<Array<SeasonWhereUniqueInput>>,
  connect?: Maybe<Array<SeasonWhereUniqueInput>>,
  set?: Maybe<Array<SeasonWhereUniqueInput>>,
  disconnect?: Maybe<Array<SeasonWhereUniqueInput>>,
  update?: Maybe<Array<SeasonUpdateWithWhereUniqueWithoutTournamentInput>>,
  upsert?: Maybe<Array<SeasonUpsertWithWhereUniqueWithoutTournamentInput>>,
  deleteMany?: Maybe<Array<SeasonScalarWhereInput>>,
  updateMany?: Maybe<Array<SeasonUpdateManyWithWhereNestedInput>>,
};

export type SeasonUpdateManyWithWhereNestedInput = {
  where: SeasonScalarWhereInput,
  data: SeasonUpdateManyDataInput,
};

export type SeasonUpdateOneRequiredWithoutSchedulesInput = {
  create?: Maybe<SeasonCreateWithoutSchedulesInput>,
  update?: Maybe<SeasonUpdateWithoutSchedulesDataInput>,
  upsert?: Maybe<SeasonUpsertWithoutSchedulesInput>,
  connect?: Maybe<SeasonWhereUniqueInput>,
};

export type SeasonUpdateWithoutSchedulesDataInput = {
  name?: Maybe<Scalars['String']>,
  tournament?: Maybe<TournamentUpdateOneRequiredWithoutSeasonsInput>,
};

export type SeasonUpdateWithoutTournamentDataInput = {
  name?: Maybe<Scalars['String']>,
  schedules?: Maybe<ScheduleUpdateManyWithoutSeasonInput>,
};

export type SeasonUpdateWithWhereUniqueWithoutTournamentInput = {
  where: SeasonWhereUniqueInput,
  data: SeasonUpdateWithoutTournamentDataInput,
};

export type SeasonUpsertWithoutSchedulesInput = {
  update: SeasonUpdateWithoutSchedulesDataInput,
  create: SeasonCreateWithoutSchedulesInput,
};

export type SeasonUpsertWithWhereUniqueWithoutTournamentInput = {
  where: SeasonWhereUniqueInput,
  update: SeasonUpdateWithoutTournamentDataInput,
  create: SeasonCreateWithoutTournamentInput,
};

export type SeasonWhereInput = {
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
  schedules_every?: Maybe<ScheduleWhereInput>,
  schedules_some?: Maybe<ScheduleWhereInput>,
  schedules_none?: Maybe<ScheduleWhereInput>,
  tournament?: Maybe<TournamentWhereInput>,
  AND?: Maybe<Array<SeasonWhereInput>>,
  OR?: Maybe<Array<SeasonWhereInput>>,
  NOT?: Maybe<Array<SeasonWhereInput>>,
};

export type SeasonWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Subscription = {
   __typename?: 'Subscription',
  match?: Maybe<MatchSubscriptionPayload>,
  player?: Maybe<PlayerSubscriptionPayload>,
  schedule?: Maybe<ScheduleSubscriptionPayload>,
  season?: Maybe<SeasonSubscriptionPayload>,
  team?: Maybe<TeamSubscriptionPayload>,
  tournament?: Maybe<TournamentSubscriptionPayload>,
  user?: Maybe<UserSubscriptionPayload>,
};


export type SubscriptionMatchArgs = {
  where?: Maybe<MatchSubscriptionWhereInput>
};


export type SubscriptionPlayerArgs = {
  where?: Maybe<PlayerSubscriptionWhereInput>
};


export type SubscriptionScheduleArgs = {
  where?: Maybe<ScheduleSubscriptionWhereInput>
};


export type SubscriptionSeasonArgs = {
  where?: Maybe<SeasonSubscriptionWhereInput>
};


export type SubscriptionTeamArgs = {
  where?: Maybe<TeamSubscriptionWhereInput>
};


export type SubscriptionTournamentArgs = {
  where?: Maybe<TournamentSubscriptionWhereInput>
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>
};

export type Team = {
   __typename?: 'Team',
  id: Scalars['ID'],
  name: Scalars['String'],
  tournament: Tournament,
  players?: Maybe<Array<Player>>,
};


export type TeamPlayersArgs = {
  where?: Maybe<PlayerWhereInput>,
  orderBy?: Maybe<PlayerOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type TeamConnection = {
   __typename?: 'TeamConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TeamEdge>>,
  aggregate: AggregateTeam,
};

export type TeamCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  tournament: TournamentCreateOneWithoutTeamsInput,
  players?: Maybe<PlayerCreateManyWithoutTeamInput>,
};

export type TeamCreateManyWithoutTournamentInput = {
  create?: Maybe<Array<TeamCreateWithoutTournamentInput>>,
  connect?: Maybe<Array<TeamWhereUniqueInput>>,
};

export type TeamCreateOneInput = {
  create?: Maybe<TeamCreateInput>,
  connect?: Maybe<TeamWhereUniqueInput>,
};

export type TeamCreateOneWithoutPlayersInput = {
  create?: Maybe<TeamCreateWithoutPlayersInput>,
  connect?: Maybe<TeamWhereUniqueInput>,
};

export type TeamCreateWithoutPlayersInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  tournament: TournamentCreateOneWithoutTeamsInput,
};

export type TeamCreateWithoutTournamentInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  players?: Maybe<PlayerCreateManyWithoutTeamInput>,
};

export type TeamEdge = {
   __typename?: 'TeamEdge',
  node: Team,
  cursor: Scalars['String'],
};

export enum TeamOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export type TeamPreviousValues = {
   __typename?: 'TeamPreviousValues',
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type TeamScalarWhereInput = {
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
  AND?: Maybe<Array<TeamScalarWhereInput>>,
  OR?: Maybe<Array<TeamScalarWhereInput>>,
  NOT?: Maybe<Array<TeamScalarWhereInput>>,
};

export type TeamSubscriptionPayload = {
   __typename?: 'TeamSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Team>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<TeamPreviousValues>,
};

export type TeamSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<TeamWhereInput>,
  AND?: Maybe<Array<TeamSubscriptionWhereInput>>,
  OR?: Maybe<Array<TeamSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TeamSubscriptionWhereInput>>,
};

export type TeamUpdateDataInput = {
  name?: Maybe<Scalars['String']>,
  tournament?: Maybe<TournamentUpdateOneRequiredWithoutTeamsInput>,
  players?: Maybe<PlayerUpdateManyWithoutTeamInput>,
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
  delete?: Maybe<Array<TeamWhereUniqueInput>>,
  connect?: Maybe<Array<TeamWhereUniqueInput>>,
  set?: Maybe<Array<TeamWhereUniqueInput>>,
  disconnect?: Maybe<Array<TeamWhereUniqueInput>>,
  update?: Maybe<Array<TeamUpdateWithWhereUniqueWithoutTournamentInput>>,
  upsert?: Maybe<Array<TeamUpsertWithWhereUniqueWithoutTournamentInput>>,
  deleteMany?: Maybe<Array<TeamScalarWhereInput>>,
  updateMany?: Maybe<Array<TeamUpdateManyWithWhereNestedInput>>,
};

export type TeamUpdateManyWithWhereNestedInput = {
  where: TeamScalarWhereInput,
  data: TeamUpdateManyDataInput,
};

export type TeamUpdateOneRequiredInput = {
  create?: Maybe<TeamCreateInput>,
  update?: Maybe<TeamUpdateDataInput>,
  upsert?: Maybe<TeamUpsertNestedInput>,
  connect?: Maybe<TeamWhereUniqueInput>,
};

export type TeamUpdateOneRequiredWithoutPlayersInput = {
  create?: Maybe<TeamCreateWithoutPlayersInput>,
  update?: Maybe<TeamUpdateWithoutPlayersDataInput>,
  upsert?: Maybe<TeamUpsertWithoutPlayersInput>,
  connect?: Maybe<TeamWhereUniqueInput>,
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

export type TeamUpsertNestedInput = {
  update: TeamUpdateDataInput,
  create: TeamCreateInput,
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
  AND?: Maybe<Array<TeamWhereInput>>,
  OR?: Maybe<Array<TeamWhereInput>>,
  NOT?: Maybe<Array<TeamWhereInput>>,
};

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Tournament = {
   __typename?: 'Tournament',
  id: Scalars['ID'],
  owner: User,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  teams?: Maybe<Array<Team>>,
  seasons?: Maybe<Array<Season>>,
};


export type TournamentTeamsArgs = {
  where?: Maybe<TeamWhereInput>,
  orderBy?: Maybe<TeamOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type TournamentSeasonsArgs = {
  where?: Maybe<SeasonWhereInput>,
  orderBy?: Maybe<SeasonOrderByInput>,
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
  owner: UserCreateOneWithoutTournamentsInput,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  teams?: Maybe<TeamCreateManyWithoutTournamentInput>,
  seasons?: Maybe<SeasonCreateManyWithoutTournamentInput>,
};

export type TournamentCreateManyWithoutOwnerInput = {
  create?: Maybe<Array<TournamentCreateWithoutOwnerInput>>,
  connect?: Maybe<Array<TournamentWhereUniqueInput>>,
};

export type TournamentCreateOneWithoutSeasonsInput = {
  create?: Maybe<TournamentCreateWithoutSeasonsInput>,
  connect?: Maybe<TournamentWhereUniqueInput>,
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
  seasons?: Maybe<SeasonCreateManyWithoutTournamentInput>,
};

export type TournamentCreateWithoutSeasonsInput = {
  id?: Maybe<Scalars['ID']>,
  owner: UserCreateOneWithoutTournamentsInput,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  teams?: Maybe<TeamCreateManyWithoutTournamentInput>,
};

export type TournamentCreateWithoutTeamsInput = {
  id?: Maybe<Scalars['ID']>,
  owner: UserCreateOneWithoutTournamentsInput,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  seasons?: Maybe<SeasonCreateManyWithoutTournamentInput>,
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
  AND?: Maybe<Array<TournamentScalarWhereInput>>,
  OR?: Maybe<Array<TournamentScalarWhereInput>>,
  NOT?: Maybe<Array<TournamentScalarWhereInput>>,
};

export type TournamentSubscriptionPayload = {
   __typename?: 'TournamentSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Tournament>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<TournamentPreviousValues>,
};

export type TournamentSubscriptionWhereInput = {
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<TournamentWhereInput>,
  AND?: Maybe<Array<TournamentSubscriptionWhereInput>>,
  OR?: Maybe<Array<TournamentSubscriptionWhereInput>>,
  NOT?: Maybe<Array<TournamentSubscriptionWhereInput>>,
};

export type TournamentUpdateInput = {
  owner?: Maybe<UserUpdateOneRequiredWithoutTournamentsInput>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  teams?: Maybe<TeamUpdateManyWithoutTournamentInput>,
  seasons?: Maybe<SeasonUpdateManyWithoutTournamentInput>,
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
  delete?: Maybe<Array<TournamentWhereUniqueInput>>,
  connect?: Maybe<Array<TournamentWhereUniqueInput>>,
  set?: Maybe<Array<TournamentWhereUniqueInput>>,
  disconnect?: Maybe<Array<TournamentWhereUniqueInput>>,
  update?: Maybe<Array<TournamentUpdateWithWhereUniqueWithoutOwnerInput>>,
  upsert?: Maybe<Array<TournamentUpsertWithWhereUniqueWithoutOwnerInput>>,
  deleteMany?: Maybe<Array<TournamentScalarWhereInput>>,
  updateMany?: Maybe<Array<TournamentUpdateManyWithWhereNestedInput>>,
};

export type TournamentUpdateManyWithWhereNestedInput = {
  where: TournamentScalarWhereInput,
  data: TournamentUpdateManyDataInput,
};

export type TournamentUpdateOneRequiredWithoutSeasonsInput = {
  create?: Maybe<TournamentCreateWithoutSeasonsInput>,
  update?: Maybe<TournamentUpdateWithoutSeasonsDataInput>,
  upsert?: Maybe<TournamentUpsertWithoutSeasonsInput>,
  connect?: Maybe<TournamentWhereUniqueInput>,
};

export type TournamentUpdateOneRequiredWithoutTeamsInput = {
  create?: Maybe<TournamentCreateWithoutTeamsInput>,
  update?: Maybe<TournamentUpdateWithoutTeamsDataInput>,
  upsert?: Maybe<TournamentUpsertWithoutTeamsInput>,
  connect?: Maybe<TournamentWhereUniqueInput>,
};

export type TournamentUpdateWithoutOwnerDataInput = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  teams?: Maybe<TeamUpdateManyWithoutTournamentInput>,
  seasons?: Maybe<SeasonUpdateManyWithoutTournamentInput>,
};

export type TournamentUpdateWithoutSeasonsDataInput = {
  owner?: Maybe<UserUpdateOneRequiredWithoutTournamentsInput>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  teams?: Maybe<TeamUpdateManyWithoutTournamentInput>,
};

export type TournamentUpdateWithoutTeamsDataInput = {
  owner?: Maybe<UserUpdateOneRequiredWithoutTournamentsInput>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  seasons?: Maybe<SeasonUpdateManyWithoutTournamentInput>,
};

export type TournamentUpdateWithWhereUniqueWithoutOwnerInput = {
  where: TournamentWhereUniqueInput,
  data: TournamentUpdateWithoutOwnerDataInput,
};

export type TournamentUpsertWithoutSeasonsInput = {
  update: TournamentUpdateWithoutSeasonsDataInput,
  create: TournamentCreateWithoutSeasonsInput,
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
  owner?: Maybe<UserWhereInput>,
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
  teams_every?: Maybe<TeamWhereInput>,
  teams_some?: Maybe<TeamWhereInput>,
  teams_none?: Maybe<TeamWhereInput>,
  seasons_every?: Maybe<SeasonWhereInput>,
  seasons_some?: Maybe<SeasonWhereInput>,
  seasons_none?: Maybe<SeasonWhereInput>,
  AND?: Maybe<Array<TournamentWhereInput>>,
  OR?: Maybe<Array<TournamentWhereInput>>,
  NOT?: Maybe<Array<TournamentWhereInput>>,
};

export type TournamentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  tournaments?: Maybe<Array<Tournament>>,
};


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
  mutation_in?: Maybe<Array<MutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserWhereInput>,
  AND?: Maybe<Array<UserSubscriptionWhereInput>>,
  OR?: Maybe<Array<UserSubscriptionWhereInput>>,
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>,
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
  update?: Maybe<UserUpdateWithoutTournamentsDataInput>,
  upsert?: Maybe<UserUpsertWithoutTournamentsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserUpdateWithoutTournamentsDataInput = {
  name?: Maybe<Scalars['String']>,
};

export type UserUpsertWithoutTournamentsInput = {
  update: UserUpdateWithoutTournamentsDataInput,
  create: UserCreateWithoutTournamentsInput,
};

export type UserWhereInput = {
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
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
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

export type CreateTournamentWithScheduleMutationVariables = {
  data: TournamentCreateInput
};


export type CreateTournamentWithScheduleMutation = (
  { __typename?: 'Mutation' }
  & { createTournament: (
    { __typename?: 'Tournament' }
    & Pick<Tournament, 'id'>
  ) }
);

export type DeleteTournamentMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTournamentMutation = (
  { __typename?: 'Mutation' }
  & { deleteTournament: Maybe<(
    { __typename?: 'Tournament' }
    & Pick<Tournament, 'id'>
  )> }
);

export type UpdateTournamentMutationVariables = {
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['DateTime']>,
  end?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  owner: UserUpdateOneRequiredWithoutTournamentsInput
};


export type UpdateTournamentMutation = (
  { __typename?: 'Mutation' }
  & { updateTournament: Maybe<(
    { __typename?: 'Tournament' }
    & Pick<Tournament, 'id'>
  )> }
);

export type TeamsQueryVariables = {
  tournamentId: Scalars['ID']
};


export type TeamsQuery = (
  { __typename?: 'Query' }
  & { teams: Array<Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
    & { players: Maybe<Array<(
      { __typename?: 'Player' }
      & Pick<Player, 'id' | 'name'>
    )>> }
  )>> }
);

export type TeamQueryVariables = {
  id: Scalars['ID']
};


export type TeamQuery = (
  { __typename?: 'Query' }
  & { team: Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
    & { players: Maybe<Array<(
      { __typename?: 'Player' }
      & Pick<Player, 'id' | 'name'>
    )>> }
  )> }
);

export type TournamentsQueryVariables = {};


export type TournamentsQuery = (
  { __typename?: 'Query' }
  & { tournaments: Array<Maybe<(
    { __typename?: 'Tournament' }
    & Pick<Tournament, 'id' | 'name' | 'description'>
    & { teams: Maybe<Array<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'name'>
    )>> }
  )>> }
);

export type TournamentQueryVariables = {
  id: Scalars['ID']
};


export type TournamentQuery = (
  { __typename?: 'Query' }
  & { tournament: Maybe<(
    { __typename?: 'Tournament' }
    & Pick<Tournament, 'id' | 'name' | 'description' | 'start' | 'end'>
    & { teams: Maybe<Array<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'name'>
    )>> }
  )> }
);


export const DeletePlayerDocument = gql`
    mutation DeletePlayer($id: ID!) {
  deletePlayer(where: {id: $id}) {
    id
  }
}
    `;
export type DeletePlayerMutationFn = ApolloReactCommon.MutationFunction<DeletePlayerMutation, DeletePlayerMutationVariables>;
export type DeletePlayerComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeletePlayerMutation, DeletePlayerMutationVariables>, 'mutation'>;

    export const DeletePlayerComponent = (props: DeletePlayerComponentProps) => (
      <ApolloReactComponents.Mutation<DeletePlayerMutation, DeletePlayerMutationVariables> mutation={DeletePlayerDocument} {...props} />
    );
    

/**
 * __useDeletePlayerMutation__
 *
 * To run a mutation, you first call `useDeletePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlayerMutation, { data, loading, error }] = useDeletePlayerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePlayerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePlayerMutation, DeletePlayerMutationVariables>) {
        return ApolloReactHooks.useMutation<DeletePlayerMutation, DeletePlayerMutationVariables>(DeletePlayerDocument, baseOptions);
      }
export type DeletePlayerMutationHookResult = ReturnType<typeof useDeletePlayerMutation>;
export type DeletePlayerMutationResult = ApolloReactCommon.MutationResult<DeletePlayerMutation>;
export type DeletePlayerMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePlayerMutation, DeletePlayerMutationVariables>;
export const CreateTeamDocument = gql`
    mutation CreateTeam($name: String!, $tournament: TournamentCreateOneWithoutTeamsInput!, $players: PlayerCreateManyWithoutTeamInput) {
  createTeam(data: {name: $name, tournament: $tournament, players: $players}) {
    id
  }
}
    `;
export type CreateTeamMutationFn = ApolloReactCommon.MutationFunction<CreateTeamMutation, CreateTeamMutationVariables>;
export type CreateTeamComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTeamMutation, CreateTeamMutationVariables>, 'mutation'>;

    export const CreateTeamComponent = (props: CreateTeamComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTeamMutation, CreateTeamMutationVariables> mutation={CreateTeamDocument} {...props} />
    );
    

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      name: // value for 'name'
 *      tournament: // value for 'tournament'
 *      players: // value for 'players'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTeamMutation, CreateTeamMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, baseOptions);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = ApolloReactCommon.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTeamMutation, CreateTeamMutationVariables>;
export const DeleteTeamDocument = gql`
    mutation DeleteTeam($id: ID!) {
  deleteTeam(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteTeamMutationFn = ApolloReactCommon.MutationFunction<DeleteTeamMutation, DeleteTeamMutationVariables>;
export type DeleteTeamComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteTeamMutation, DeleteTeamMutationVariables>, 'mutation'>;

    export const DeleteTeamComponent = (props: DeleteTeamComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteTeamMutation, DeleteTeamMutationVariables> mutation={DeleteTeamDocument} {...props} />
    );
    

/**
 * __useDeleteTeamMutation__
 *
 * To run a mutation, you first call `useDeleteTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTeamMutation, { data, loading, error }] = useDeleteTeamMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTeamMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTeamMutation, DeleteTeamMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTeamMutation, DeleteTeamMutationVariables>(DeleteTeamDocument, baseOptions);
      }
export type DeleteTeamMutationHookResult = ReturnType<typeof useDeleteTeamMutation>;
export type DeleteTeamMutationResult = ApolloReactCommon.MutationResult<DeleteTeamMutation>;
export type DeleteTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTeamMutation, DeleteTeamMutationVariables>;
export const UpdateTeamDocument = gql`
    mutation UpdateTeam($id: ID!, $name: String!, $tournament: TournamentUpdateOneRequiredWithoutTeamsInput, $players: PlayerUpdateManyWithoutTeamInput) {
  updateTeam(data: {name: $name, tournament: $tournament, players: $players}, where: {id: $id}) {
    id
  }
}
    `;
export type UpdateTeamMutationFn = ApolloReactCommon.MutationFunction<UpdateTeamMutation, UpdateTeamMutationVariables>;
export type UpdateTeamComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTeamMutation, UpdateTeamMutationVariables>, 'mutation'>;

    export const UpdateTeamComponent = (props: UpdateTeamComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTeamMutation, UpdateTeamMutationVariables> mutation={UpdateTeamDocument} {...props} />
    );
    

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
export const CreateTournamentWithScheduleDocument = gql`
    mutation createTournamentWithSchedule($data: TournamentCreateInput!) {
  createTournament(data: $data) {
    id
  }
}
    `;
export type CreateTournamentWithScheduleMutationFn = ApolloReactCommon.MutationFunction<CreateTournamentWithScheduleMutation, CreateTournamentWithScheduleMutationVariables>;
export type CreateTournamentWithScheduleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTournamentWithScheduleMutation, CreateTournamentWithScheduleMutationVariables>, 'mutation'>;

    export const CreateTournamentWithScheduleComponent = (props: CreateTournamentWithScheduleComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTournamentWithScheduleMutation, CreateTournamentWithScheduleMutationVariables> mutation={CreateTournamentWithScheduleDocument} {...props} />
    );
    

/**
 * __useCreateTournamentWithScheduleMutation__
 *
 * To run a mutation, you first call `useCreateTournamentWithScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTournamentWithScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTournamentWithScheduleMutation, { data, loading, error }] = useCreateTournamentWithScheduleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTournamentWithScheduleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTournamentWithScheduleMutation, CreateTournamentWithScheduleMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTournamentWithScheduleMutation, CreateTournamentWithScheduleMutationVariables>(CreateTournamentWithScheduleDocument, baseOptions);
      }
export type CreateTournamentWithScheduleMutationHookResult = ReturnType<typeof useCreateTournamentWithScheduleMutation>;
export type CreateTournamentWithScheduleMutationResult = ApolloReactCommon.MutationResult<CreateTournamentWithScheduleMutation>;
export type CreateTournamentWithScheduleMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTournamentWithScheduleMutation, CreateTournamentWithScheduleMutationVariables>;
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
    id
  }
}
    `;
export type UpdateTournamentMutationFn = ApolloReactCommon.MutationFunction<UpdateTournamentMutation, UpdateTournamentMutationVariables>;
export type UpdateTournamentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTournamentMutation, UpdateTournamentMutationVariables>, 'mutation'>;

    export const UpdateTournamentComponent = (props: UpdateTournamentComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTournamentMutation, UpdateTournamentMutationVariables> mutation={UpdateTournamentDocument} {...props} />
    );
    

/**
 * __useUpdateTournamentMutation__
 *
 * To run a mutation, you first call `useUpdateTournamentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTournamentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTournamentMutation, { data, loading, error }] = useUpdateTournamentMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *      id: // value for 'id'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useUpdateTournamentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTournamentMutation, UpdateTournamentMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTournamentMutation, UpdateTournamentMutationVariables>(UpdateTournamentDocument, baseOptions);
      }
export type UpdateTournamentMutationHookResult = ReturnType<typeof useUpdateTournamentMutation>;
export type UpdateTournamentMutationResult = ApolloReactCommon.MutationResult<UpdateTournamentMutation>;
export type UpdateTournamentMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTournamentMutation, UpdateTournamentMutationVariables>;
export const TeamsDocument = gql`
    query Teams($tournamentId: ID!) {
  teams(where: {tournament: {id: $tournamentId}}) {
    id
    name
    players {
      id
      name
    }
  }
}
    `;
export type TeamsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TeamsQuery, TeamsQueryVariables>, 'query'> & ({ variables: TeamsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TeamsComponent = (props: TeamsComponentProps) => (
      <ApolloReactComponents.Query<TeamsQuery, TeamsQueryVariables> query={TeamsDocument} {...props} />
    );
    

/**
 * __useTeamsQuery__
 *
 * To run a query within a React component, call `useTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamsQuery({
 *   variables: {
 *      tournamentId: // value for 'tournamentId'
 *   },
 * });
 */
export function useTeamsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TeamsQuery, TeamsQueryVariables>) {
        return ApolloReactHooks.useQuery<TeamsQuery, TeamsQueryVariables>(TeamsDocument, baseOptions);
      }
export function useTeamsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TeamsQuery, TeamsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TeamsQuery, TeamsQueryVariables>(TeamsDocument, baseOptions);
        }
export type TeamsQueryHookResult = ReturnType<typeof useTeamsQuery>;
export type TeamsLazyQueryHookResult = ReturnType<typeof useTeamsLazyQuery>;
export type TeamsQueryResult = ApolloReactCommon.QueryResult<TeamsQuery, TeamsQueryVariables>;
export const TeamDocument = gql`
    query Team($id: ID!) {
  team(where: {id: $id}) {
    id
    name
    players {
      id
      name
    }
  }
}
    `;
export type TeamComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TeamQuery, TeamQueryVariables>, 'query'> & ({ variables: TeamQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TeamComponent = (props: TeamComponentProps) => (
      <ApolloReactComponents.Query<TeamQuery, TeamQueryVariables> query={TeamDocument} {...props} />
    );
    

/**
 * __useTeamQuery__
 *
 * To run a query within a React component, call `useTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTeamQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TeamQuery, TeamQueryVariables>) {
        return ApolloReactHooks.useQuery<TeamQuery, TeamQueryVariables>(TeamDocument, baseOptions);
      }
export function useTeamLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TeamQuery, TeamQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TeamQuery, TeamQueryVariables>(TeamDocument, baseOptions);
        }
export type TeamQueryHookResult = ReturnType<typeof useTeamQuery>;
export type TeamLazyQueryHookResult = ReturnType<typeof useTeamLazyQuery>;
export type TeamQueryResult = ApolloReactCommon.QueryResult<TeamQuery, TeamQueryVariables>;
export const TournamentsDocument = gql`
    query Tournaments {
  tournaments {
    id
    name
    description
    teams {
      id
      name
    }
  }
}
    `;
export type TournamentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TournamentsQuery, TournamentsQueryVariables>, 'query'>;

    export const TournamentsComponent = (props: TournamentsComponentProps) => (
      <ApolloReactComponents.Query<TournamentsQuery, TournamentsQueryVariables> query={TournamentsDocument} {...props} />
    );
    

/**
 * __useTournamentsQuery__
 *
 * To run a query within a React component, call `useTournamentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTournamentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTournamentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTournamentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TournamentsQuery, TournamentsQueryVariables>) {
        return ApolloReactHooks.useQuery<TournamentsQuery, TournamentsQueryVariables>(TournamentsDocument, baseOptions);
      }
export function useTournamentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TournamentsQuery, TournamentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TournamentsQuery, TournamentsQueryVariables>(TournamentsDocument, baseOptions);
        }
export type TournamentsQueryHookResult = ReturnType<typeof useTournamentsQuery>;
export type TournamentsLazyQueryHookResult = ReturnType<typeof useTournamentsLazyQuery>;
export type TournamentsQueryResult = ApolloReactCommon.QueryResult<TournamentsQuery, TournamentsQueryVariables>;
export const TournamentDocument = gql`
    query Tournament($id: ID!) {
  tournament(where: {id: $id}) {
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