// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregatePlayer {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateTournament {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createPlayer(data: PlayerCreateInput!): Player!
  updatePlayer(data: PlayerUpdateInput!, where: PlayerWhereUniqueInput!): Player
  updateManyPlayers(data: PlayerUpdateManyMutationInput!, where: PlayerWhereInput): BatchPayload!
  upsertPlayer(where: PlayerWhereUniqueInput!, create: PlayerCreateInput!, update: PlayerUpdateInput!): Player!
  deletePlayer(where: PlayerWhereUniqueInput!): Player
  deleteManyPlayers(where: PlayerWhereInput): BatchPayload!
  createTeam(data: TeamCreateInput!): Team!
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  createTournament(data: TournamentCreateInput!): Tournament!
  updateTournament(data: TournamentUpdateInput!, where: TournamentWhereUniqueInput!): Tournament
  updateManyTournaments(data: TournamentUpdateManyMutationInput!, where: TournamentWhereInput): BatchPayload!
  upsertTournament(where: TournamentWhereUniqueInput!, create: TournamentCreateInput!, update: TournamentUpdateInput!): Tournament!
  deleteTournament(where: TournamentWhereUniqueInput!): Tournament
  deleteManyTournaments(where: TournamentWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Player {
  id: ID!
  name: String!
  team: Team!
}

type PlayerConnection {
  pageInfo: PageInfo!
  edges: [PlayerEdge]!
  aggregate: AggregatePlayer!
}

input PlayerCreateInput {
  id: ID
  name: String!
  team: TeamCreateOneWithoutPlayersInput!
}

input PlayerCreateManyWithoutTeamInput {
  create: [PlayerCreateWithoutTeamInput!]
  connect: [PlayerWhereUniqueInput!]
}

input PlayerCreateWithoutTeamInput {
  id: ID
  name: String!
}

type PlayerEdge {
  node: Player!
  cursor: String!
}

enum PlayerOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type PlayerPreviousValues {
  id: ID!
  name: String!
}

input PlayerScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [PlayerScalarWhereInput!]
  OR: [PlayerScalarWhereInput!]
  NOT: [PlayerScalarWhereInput!]
}

type PlayerSubscriptionPayload {
  mutation: MutationType!
  node: Player
  updatedFields: [String!]
  previousValues: PlayerPreviousValues
}

input PlayerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlayerWhereInput
  AND: [PlayerSubscriptionWhereInput!]
  OR: [PlayerSubscriptionWhereInput!]
  NOT: [PlayerSubscriptionWhereInput!]
}

input PlayerUpdateInput {
  name: String
  team: TeamUpdateOneRequiredWithoutPlayersInput
}

input PlayerUpdateManyDataInput {
  name: String
}

input PlayerUpdateManyMutationInput {
  name: String
}

input PlayerUpdateManyWithoutTeamInput {
  create: [PlayerCreateWithoutTeamInput!]
  delete: [PlayerWhereUniqueInput!]
  connect: [PlayerWhereUniqueInput!]
  set: [PlayerWhereUniqueInput!]
  disconnect: [PlayerWhereUniqueInput!]
  update: [PlayerUpdateWithWhereUniqueWithoutTeamInput!]
  upsert: [PlayerUpsertWithWhereUniqueWithoutTeamInput!]
  deleteMany: [PlayerScalarWhereInput!]
  updateMany: [PlayerUpdateManyWithWhereNestedInput!]
}

input PlayerUpdateManyWithWhereNestedInput {
  where: PlayerScalarWhereInput!
  data: PlayerUpdateManyDataInput!
}

input PlayerUpdateWithoutTeamDataInput {
  name: String
}

input PlayerUpdateWithWhereUniqueWithoutTeamInput {
  where: PlayerWhereUniqueInput!
  data: PlayerUpdateWithoutTeamDataInput!
}

input PlayerUpsertWithWhereUniqueWithoutTeamInput {
  where: PlayerWhereUniqueInput!
  update: PlayerUpdateWithoutTeamDataInput!
  create: PlayerCreateWithoutTeamInput!
}

input PlayerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  team: TeamWhereInput
  AND: [PlayerWhereInput!]
  OR: [PlayerWhereInput!]
  NOT: [PlayerWhereInput!]
}

input PlayerWhereUniqueInput {
  id: ID
}

type Query {
  player(where: PlayerWhereUniqueInput!): Player
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player]!
  playersConnection(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlayerConnection!
  team(where: TeamWhereUniqueInput!): Team
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  tournament(where: TournamentWhereUniqueInput!): Tournament
  tournaments(where: TournamentWhereInput, orderBy: TournamentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tournament]!
  tournamentsConnection(where: TournamentWhereInput, orderBy: TournamentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TournamentConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  player(where: PlayerSubscriptionWhereInput): PlayerSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  tournament(where: TournamentSubscriptionWhereInput): TournamentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Team {
  id: ID!
  name: String!
  tournament: Tournament!
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player!]
}

type TeamConnection {
  pageInfo: PageInfo!
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  id: ID
  name: String!
  tournament: TournamentCreateOneWithoutTeamsInput!
  players: PlayerCreateManyWithoutTeamInput
}

input TeamCreateManyWithoutTournamentInput {
  create: [TeamCreateWithoutTournamentInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateOneWithoutPlayersInput {
  create: TeamCreateWithoutPlayersInput
  connect: TeamWhereUniqueInput
}

input TeamCreateWithoutPlayersInput {
  id: ID
  name: String!
  tournament: TournamentCreateOneWithoutTeamsInput!
}

input TeamCreateWithoutTournamentInput {
  id: ID
  name: String!
  players: PlayerCreateManyWithoutTeamInput
}

type TeamEdge {
  node: Team!
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type TeamPreviousValues {
  id: ID!
  name: String!
}

input TeamScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [TeamScalarWhereInput!]
  OR: [TeamScalarWhereInput!]
  NOT: [TeamScalarWhereInput!]
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
  AND: [TeamSubscriptionWhereInput!]
  OR: [TeamSubscriptionWhereInput!]
  NOT: [TeamSubscriptionWhereInput!]
}

input TeamUpdateInput {
  name: String
  tournament: TournamentUpdateOneRequiredWithoutTeamsInput
  players: PlayerUpdateManyWithoutTeamInput
}

input TeamUpdateManyDataInput {
  name: String
}

input TeamUpdateManyMutationInput {
  name: String
}

input TeamUpdateManyWithoutTournamentInput {
  create: [TeamCreateWithoutTournamentInput!]
  delete: [TeamWhereUniqueInput!]
  connect: [TeamWhereUniqueInput!]
  set: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutTournamentInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutTournamentInput!]
  deleteMany: [TeamScalarWhereInput!]
  updateMany: [TeamUpdateManyWithWhereNestedInput!]
}

input TeamUpdateManyWithWhereNestedInput {
  where: TeamScalarWhereInput!
  data: TeamUpdateManyDataInput!
}

input TeamUpdateOneRequiredWithoutPlayersInput {
  create: TeamCreateWithoutPlayersInput
  update: TeamUpdateWithoutPlayersDataInput
  upsert: TeamUpsertWithoutPlayersInput
  connect: TeamWhereUniqueInput
}

input TeamUpdateWithoutPlayersDataInput {
  name: String
  tournament: TournamentUpdateOneRequiredWithoutTeamsInput
}

input TeamUpdateWithoutTournamentDataInput {
  name: String
  players: PlayerUpdateManyWithoutTeamInput
}

input TeamUpdateWithWhereUniqueWithoutTournamentInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutTournamentDataInput!
}

input TeamUpsertWithoutPlayersInput {
  update: TeamUpdateWithoutPlayersDataInput!
  create: TeamCreateWithoutPlayersInput!
}

input TeamUpsertWithWhereUniqueWithoutTournamentInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutTournamentDataInput!
  create: TeamCreateWithoutTournamentInput!
}

input TeamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  tournament: TournamentWhereInput
  players_every: PlayerWhereInput
  players_some: PlayerWhereInput
  players_none: PlayerWhereInput
  AND: [TeamWhereInput!]
  OR: [TeamWhereInput!]
  NOT: [TeamWhereInput!]
}

input TeamWhereUniqueInput {
  id: ID
}

type Tournament {
  id: ID!
  owner: User!
  name: String!
  description: String
  start: DateTime
  end: DateTime
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

type TournamentConnection {
  pageInfo: PageInfo!
  edges: [TournamentEdge]!
  aggregate: AggregateTournament!
}

input TournamentCreateInput {
  id: ID
  owner: UserCreateOneWithoutTournamentsInput!
  name: String!
  description: String
  start: DateTime
  end: DateTime
  teams: TeamCreateManyWithoutTournamentInput
}

input TournamentCreateManyWithoutOwnerInput {
  create: [TournamentCreateWithoutOwnerInput!]
  connect: [TournamentWhereUniqueInput!]
}

input TournamentCreateOneWithoutTeamsInput {
  create: TournamentCreateWithoutTeamsInput
  connect: TournamentWhereUniqueInput
}

input TournamentCreateWithoutOwnerInput {
  id: ID
  name: String!
  description: String
  start: DateTime
  end: DateTime
  teams: TeamCreateManyWithoutTournamentInput
}

input TournamentCreateWithoutTeamsInput {
  id: ID
  owner: UserCreateOneWithoutTournamentsInput!
  name: String!
  description: String
  start: DateTime
  end: DateTime
}

type TournamentEdge {
  node: Tournament!
  cursor: String!
}

enum TournamentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
}

type TournamentPreviousValues {
  id: ID!
  name: String!
  description: String
  start: DateTime
  end: DateTime
}

input TournamentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  AND: [TournamentScalarWhereInput!]
  OR: [TournamentScalarWhereInput!]
  NOT: [TournamentScalarWhereInput!]
}

type TournamentSubscriptionPayload {
  mutation: MutationType!
  node: Tournament
  updatedFields: [String!]
  previousValues: TournamentPreviousValues
}

input TournamentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TournamentWhereInput
  AND: [TournamentSubscriptionWhereInput!]
  OR: [TournamentSubscriptionWhereInput!]
  NOT: [TournamentSubscriptionWhereInput!]
}

input TournamentUpdateInput {
  owner: UserUpdateOneRequiredWithoutTournamentsInput
  name: String
  description: String
  start: DateTime
  end: DateTime
  teams: TeamUpdateManyWithoutTournamentInput
}

input TournamentUpdateManyDataInput {
  name: String
  description: String
  start: DateTime
  end: DateTime
}

input TournamentUpdateManyMutationInput {
  name: String
  description: String
  start: DateTime
  end: DateTime
}

input TournamentUpdateManyWithoutOwnerInput {
  create: [TournamentCreateWithoutOwnerInput!]
  delete: [TournamentWhereUniqueInput!]
  connect: [TournamentWhereUniqueInput!]
  set: [TournamentWhereUniqueInput!]
  disconnect: [TournamentWhereUniqueInput!]
  update: [TournamentUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [TournamentUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [TournamentScalarWhereInput!]
  updateMany: [TournamentUpdateManyWithWhereNestedInput!]
}

input TournamentUpdateManyWithWhereNestedInput {
  where: TournamentScalarWhereInput!
  data: TournamentUpdateManyDataInput!
}

input TournamentUpdateOneRequiredWithoutTeamsInput {
  create: TournamentCreateWithoutTeamsInput
  update: TournamentUpdateWithoutTeamsDataInput
  upsert: TournamentUpsertWithoutTeamsInput
  connect: TournamentWhereUniqueInput
}

input TournamentUpdateWithoutOwnerDataInput {
  name: String
  description: String
  start: DateTime
  end: DateTime
  teams: TeamUpdateManyWithoutTournamentInput
}

input TournamentUpdateWithoutTeamsDataInput {
  owner: UserUpdateOneRequiredWithoutTournamentsInput
  name: String
  description: String
  start: DateTime
  end: DateTime
}

input TournamentUpdateWithWhereUniqueWithoutOwnerInput {
  where: TournamentWhereUniqueInput!
  data: TournamentUpdateWithoutOwnerDataInput!
}

input TournamentUpsertWithoutTeamsInput {
  update: TournamentUpdateWithoutTeamsDataInput!
  create: TournamentCreateWithoutTeamsInput!
}

input TournamentUpsertWithWhereUniqueWithoutOwnerInput {
  where: TournamentWhereUniqueInput!
  update: TournamentUpdateWithoutOwnerDataInput!
  create: TournamentCreateWithoutOwnerInput!
}

input TournamentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  owner: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  AND: [TournamentWhereInput!]
  OR: [TournamentWhereInput!]
  NOT: [TournamentWhereInput!]
}

input TournamentWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  tournaments(where: TournamentWhereInput, orderBy: TournamentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tournament!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  tournaments: TournamentCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutTournamentsInput {
  create: UserCreateWithoutTournamentsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTournamentsInput {
  id: ID
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  tournaments: TournamentUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneRequiredWithoutTournamentsInput {
  create: UserCreateWithoutTournamentsInput
  update: UserUpdateWithoutTournamentsDataInput
  upsert: UserUpsertWithoutTournamentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTournamentsDataInput {
  name: String
}

input UserUpsertWithoutTournamentsInput {
  update: UserUpdateWithoutTournamentsDataInput!
  create: UserCreateWithoutTournamentsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  tournaments_every: TournamentWhereInput
  tournaments_some: TournamentWhereInput
  tournaments_none: TournamentWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`