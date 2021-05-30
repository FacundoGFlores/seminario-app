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

export type CreateTeamInput = {
  name?: Maybe<Array<Scalars['String']>>,
};

export type Match = {
   __typename?: 'Match',
  id: Scalars['ID'],
  teamA: Team,
  teamB: Team,
  schedule: Schedule,
  resultA: Scalars['Int'],
  resultB: Scalars['Int'],
};

export type MatchResult = {
  matchId: Scalars['String'],
  resultA: Scalars['Int'],
  resultB: Scalars['Int'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createTournament: Tournament,
  createUser: User,
  updateTournament: Tournament,
  deleteTournament: Tournament,
  updateMatches: Schedule,
  updateTeamPlayers: Team,
};


export type MutationCreateTournamentArgs = {
  data: TournamentCreateInput
};


export type MutationCreateUserArgs = {
  data: UserCreatInput
};


export type MutationUpdateTournamentArgs = {
  data: TournamentUpdateInput
};


export type MutationDeleteTournamentArgs = {
  id: Scalars['ID']
};


export type MutationUpdateMatchesArgs = {
  data: Array<MatchResult>
};


export type MutationUpdateTeamPlayersArgs = {
  teamId: Scalars['ID'],
  data: PlayerInput
};

export type Player = {
   __typename?: 'Player',
  id: Scalars['ID'],
  name: Scalars['String'],
  team: Team,
};

export type PlayerInput = {
  names?: Maybe<Array<Scalars['String']>>,
};

export type Position = {
   __typename?: 'Position',
  team: Team,
  pg: Scalars['Int'],
  pe: Scalars['Int'],
  pp: Scalars['Int'],
  gf: Scalars['Int'],
  gc: Scalars['Int'],
  points: Scalars['Int'],
};

export type Query = {
   __typename?: 'Query',
  tournament: Tournament,
  player: Player,
  team: Team,
  users?: Maybe<Array<User>>,
  players?: Maybe<Array<Player>>,
  tournaments?: Maybe<Array<Tournament>>,
  tournamentsByUserId?: Maybe<Array<Tournament>>,
  teams?: Maybe<Array<Team>>,
  schedules?: Maybe<Array<Schedule>>,
  matches?: Maybe<Array<Match>>,
  userByEmail: User,
  positionsByTournament?: Maybe<Array<Position>>,
};


export type QueryTournamentArgs = {
  id: Scalars['ID']
};


export type QueryPlayerArgs = {
  id: Scalars['ID']
};


export type QueryTeamArgs = {
  id: Scalars['ID']
};


export type QueryTournamentsByUserIdArgs = {
  id: Scalars['ID']
};


export type QueryTeamsArgs = {
  tournamentId: Scalars['ID']
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']
};


export type QueryPositionsByTournamentArgs = {
  tournamentId: Scalars['ID']
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

export type Team = {
   __typename?: 'Team',
  id: Scalars['ID'],
  name: Scalars['String'],
  players?: Maybe<Array<Player>>,
  tournament: Tournament,
};

export type Tournament = {
   __typename?: 'Tournament',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['String']>,
  end?: Maybe<Scalars['String']>,
  teams?: Maybe<Array<Team>>,
  seasons?: Maybe<Array<Season>>,
  positions?: Maybe<Array<Position>>,
};

export type TournamentCreateInput = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['String']>,
  end?: Maybe<Scalars['String']>,
  teams?: Maybe<Array<Scalars['String']>>,
};

export type TournamentUpdateInput = {
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['String']>,
  end?: Maybe<Scalars['String']>,
};

export type UpdateMatchWhereInput = {
  scheduleId: Scalars['ID'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
  tournaments?: Maybe<Array<Tournament>>,
};

export type UserCreatInput = {
  name: Scalars['String'],
  email: Scalars['String'],
};

export type UpdateMatchesMutationVariables = {
  data: Array<MatchResult>
};


export type UpdateMatchesMutation = (
  { __typename?: 'Mutation' }
  & { updateMatches: (
    { __typename?: 'Schedule' }
    & Pick<Schedule, 'id'>
  ) }
);

export type UpdateTeamPlayersMutationVariables = {
  teamId: Scalars['ID'],
  data: PlayerInput
};


export type UpdateTeamPlayersMutation = (
  { __typename?: 'Mutation' }
  & { updateTeamPlayers: (
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
    & { players: Maybe<Array<(
      { __typename?: 'Player' }
      & Pick<Player, 'id' | 'name'>
    )>> }
  ) }
);

export type CreateTournamentMutationVariables = {
  data: TournamentCreateInput
};


export type CreateTournamentMutation = (
  { __typename?: 'Mutation' }
  & { createTournament: (
    { __typename?: 'Tournament' }
    & Pick<Tournament, 'id'>
  ) }
);

export type UpdateTournamentMutationVariables = {
  data: TournamentUpdateInput
};


export type UpdateTournamentMutation = (
  { __typename?: 'Mutation' }
  & { updateTournament: (
    { __typename?: 'Tournament' }
    & Pick<Tournament, 'id'>
  ) }
);

export type DeleteTournamentMutationVariables = {
  id: Scalars['ID']
};


export type DeleteTournamentMutation = (
  { __typename?: 'Mutation' }
  & { deleteTournament: (
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

export type TeamsByTournamentQueryVariables = {
  tournamentId: Scalars['ID']
};


export type TeamsByTournamentQuery = (
  { __typename?: 'Query' }
  & { teams: Maybe<Array<(
    { __typename?: 'Team' }
    & Pick<Team, 'id' | 'name'>
    & { players: Maybe<Array<(
      { __typename?: 'Player' }
      & Pick<Player, 'id' | 'name'>
    )>> }
  )>> }
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
    )>>, seasons: Maybe<Array<(
      { __typename?: 'Season' }
      & Pick<Season, 'id' | 'name'>
      & { schedules: Maybe<Array<(
        { __typename?: 'Schedule' }
        & Pick<Schedule, 'id' | 'week'>
        & { matches: Maybe<Array<(
          { __typename?: 'Match' }
          & Pick<Match, 'id' | 'resultA' | 'resultB'>
          & { teamA: (
            { __typename?: 'Team' }
            & Pick<Team, 'id' | 'name'>
          ), teamB: (
            { __typename?: 'Team' }
            & Pick<Team, 'id' | 'name'>
          ) }
        )>> }
      )>> }
    )>> }
  ) }
);

export type PositionsByTournamentQueryVariables = {
  id: Scalars['ID']
};


export type PositionsByTournamentQuery = (
  { __typename?: 'Query' }
  & { positionsByTournament: Maybe<Array<(
    { __typename?: 'Position' }
    & Pick<Position, 'pg' | 'pe' | 'pp' | 'gf' | 'gc' | 'points'>
    & { team: (
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'name'>
    ) }
  )>> }
);

export type TournamentsByUserIdQueryVariables = {
  id: Scalars['ID']
};


export type TournamentsByUserIdQuery = (
  { __typename?: 'Query' }
  & { tournamentsByUserId: Maybe<Array<(
    { __typename?: 'Tournament' }
    & Pick<Tournament, 'id' | 'name' | 'description'>
    & { teams: Maybe<Array<(
      { __typename?: 'Team' }
      & Pick<Team, 'id' | 'name'>
    )>> }
  )>> }
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


export const UpdateMatchesDocument = gql`
    mutation UpdateMatches($data: [MatchResult!]!) {
  updateMatches(data: $data) {
    id
  }
}
    `;
export type UpdateMatchesMutationFn = ApolloReactCommon.MutationFunction<UpdateMatchesMutation, UpdateMatchesMutationVariables>;
export type UpdateMatchesComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateMatchesMutation, UpdateMatchesMutationVariables>, 'mutation'>;

    export const UpdateMatchesComponent = (props: UpdateMatchesComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateMatchesMutation, UpdateMatchesMutationVariables> mutation={UpdateMatchesDocument} {...props} />
    );
    

/**
 * __useUpdateMatchesMutation__
 *
 * To run a mutation, you first call `useUpdateMatchesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMatchesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMatchesMutation, { data, loading, error }] = useUpdateMatchesMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMatchesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMatchesMutation, UpdateMatchesMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateMatchesMutation, UpdateMatchesMutationVariables>(UpdateMatchesDocument, baseOptions);
      }
export type UpdateMatchesMutationHookResult = ReturnType<typeof useUpdateMatchesMutation>;
export type UpdateMatchesMutationResult = ApolloReactCommon.MutationResult<UpdateMatchesMutation>;
export type UpdateMatchesMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateMatchesMutation, UpdateMatchesMutationVariables>;
export const UpdateTeamPlayersDocument = gql`
    mutation UpdateTeamPlayers($teamId: ID!, $data: PlayerInput!) {
  updateTeamPlayers(teamId: $teamId, data: $data) {
    id
    name
    players {
      id
      name
    }
  }
}
    `;
export type UpdateTeamPlayersMutationFn = ApolloReactCommon.MutationFunction<UpdateTeamPlayersMutation, UpdateTeamPlayersMutationVariables>;
export type UpdateTeamPlayersComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTeamPlayersMutation, UpdateTeamPlayersMutationVariables>, 'mutation'>;

    export const UpdateTeamPlayersComponent = (props: UpdateTeamPlayersComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTeamPlayersMutation, UpdateTeamPlayersMutationVariables> mutation={UpdateTeamPlayersDocument} {...props} />
    );
    

/**
 * __useUpdateTeamPlayersMutation__
 *
 * To run a mutation, you first call `useUpdateTeamPlayersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTeamPlayersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTeamPlayersMutation, { data, loading, error }] = useUpdateTeamPlayersMutation({
 *   variables: {
 *      teamId: // value for 'teamId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTeamPlayersMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTeamPlayersMutation, UpdateTeamPlayersMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTeamPlayersMutation, UpdateTeamPlayersMutationVariables>(UpdateTeamPlayersDocument, baseOptions);
      }
export type UpdateTeamPlayersMutationHookResult = ReturnType<typeof useUpdateTeamPlayersMutation>;
export type UpdateTeamPlayersMutationResult = ApolloReactCommon.MutationResult<UpdateTeamPlayersMutation>;
export type UpdateTeamPlayersMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTeamPlayersMutation, UpdateTeamPlayersMutationVariables>;
export const CreateTournamentDocument = gql`
    mutation CreateTournament($data: TournamentCreateInput!) {
  createTournament(data: $data) {
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
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTournamentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTournamentMutation, CreateTournamentMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTournamentMutation, CreateTournamentMutationVariables>(CreateTournamentDocument, baseOptions);
      }
export type CreateTournamentMutationHookResult = ReturnType<typeof useCreateTournamentMutation>;
export type CreateTournamentMutationResult = ApolloReactCommon.MutationResult<CreateTournamentMutation>;
export type CreateTournamentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTournamentMutation, CreateTournamentMutationVariables>;
export const UpdateTournamentDocument = gql`
    mutation UpdateTournament($data: TournamentUpdateInput!) {
  updateTournament(data: $data) {
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
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTournamentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTournamentMutation, UpdateTournamentMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTournamentMutation, UpdateTournamentMutationVariables>(UpdateTournamentDocument, baseOptions);
      }
export type UpdateTournamentMutationHookResult = ReturnType<typeof useUpdateTournamentMutation>;
export type UpdateTournamentMutationResult = ApolloReactCommon.MutationResult<UpdateTournamentMutation>;
export type UpdateTournamentMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTournamentMutation, UpdateTournamentMutationVariables>;
export const DeleteTournamentDocument = gql`
    mutation DeleteTournament($id: ID!) {
  deleteTournament(id: $id) {
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
export const CreateUserDocument = gql`
    mutation CreateUser($data: UserCreatInput!) {
  createUser(data: $data) {
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
export const TeamsByTournamentDocument = gql`
    query TeamsByTournament($tournamentId: ID!) {
  teams(tournamentId: $tournamentId) {
    id
    name
    players {
      id
      name
    }
  }
}
    `;
export type TeamsByTournamentComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TeamsByTournamentQuery, TeamsByTournamentQueryVariables>, 'query'> & ({ variables: TeamsByTournamentQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TeamsByTournamentComponent = (props: TeamsByTournamentComponentProps) => (
      <ApolloReactComponents.Query<TeamsByTournamentQuery, TeamsByTournamentQueryVariables> query={TeamsByTournamentDocument} {...props} />
    );
    

/**
 * __useTeamsByTournamentQuery__
 *
 * To run a query within a React component, call `useTeamsByTournamentQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamsByTournamentQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamsByTournamentQuery({
 *   variables: {
 *      tournamentId: // value for 'tournamentId'
 *   },
 * });
 */
export function useTeamsByTournamentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TeamsByTournamentQuery, TeamsByTournamentQueryVariables>) {
        return ApolloReactHooks.useQuery<TeamsByTournamentQuery, TeamsByTournamentQueryVariables>(TeamsByTournamentDocument, baseOptions);
      }
export function useTeamsByTournamentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TeamsByTournamentQuery, TeamsByTournamentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TeamsByTournamentQuery, TeamsByTournamentQueryVariables>(TeamsByTournamentDocument, baseOptions);
        }
export type TeamsByTournamentQueryHookResult = ReturnType<typeof useTeamsByTournamentQuery>;
export type TeamsByTournamentLazyQueryHookResult = ReturnType<typeof useTeamsByTournamentLazyQuery>;
export type TeamsByTournamentQueryResult = ApolloReactCommon.QueryResult<TeamsByTournamentQuery, TeamsByTournamentQueryVariables>;
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
    seasons {
      id
      name
      schedules {
        id
        week
        matches {
          id
          teamA {
            id
            name
          }
          teamB {
            id
            name
          }
          resultA
          resultB
        }
      }
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
export const PositionsByTournamentDocument = gql`
    query PositionsByTournament($id: ID!) {
  positionsByTournament(tournamentId: $id) {
    team {
      id
      name
    }
    pg
    pe
    pp
    gf
    gc
    points
  }
}
    `;
export type PositionsByTournamentComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PositionsByTournamentQuery, PositionsByTournamentQueryVariables>, 'query'> & ({ variables: PositionsByTournamentQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PositionsByTournamentComponent = (props: PositionsByTournamentComponentProps) => (
      <ApolloReactComponents.Query<PositionsByTournamentQuery, PositionsByTournamentQueryVariables> query={PositionsByTournamentDocument} {...props} />
    );
    

/**
 * __usePositionsByTournamentQuery__
 *
 * To run a query within a React component, call `usePositionsByTournamentQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionsByTournamentQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionsByTournamentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePositionsByTournamentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PositionsByTournamentQuery, PositionsByTournamentQueryVariables>) {
        return ApolloReactHooks.useQuery<PositionsByTournamentQuery, PositionsByTournamentQueryVariables>(PositionsByTournamentDocument, baseOptions);
      }
export function usePositionsByTournamentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PositionsByTournamentQuery, PositionsByTournamentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PositionsByTournamentQuery, PositionsByTournamentQueryVariables>(PositionsByTournamentDocument, baseOptions);
        }
export type PositionsByTournamentQueryHookResult = ReturnType<typeof usePositionsByTournamentQuery>;
export type PositionsByTournamentLazyQueryHookResult = ReturnType<typeof usePositionsByTournamentLazyQuery>;
export type PositionsByTournamentQueryResult = ApolloReactCommon.QueryResult<PositionsByTournamentQuery, PositionsByTournamentQueryVariables>;
export const TournamentsByUserIdDocument = gql`
    query TournamentsByUserId($id: ID!) {
  tournamentsByUserId(id: $id) {
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
export type TournamentsByUserIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TournamentsByUserIdQuery, TournamentsByUserIdQueryVariables>, 'query'> & ({ variables: TournamentsByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TournamentsByUserIdComponent = (props: TournamentsByUserIdComponentProps) => (
      <ApolloReactComponents.Query<TournamentsByUserIdQuery, TournamentsByUserIdQueryVariables> query={TournamentsByUserIdDocument} {...props} />
    );
    

/**
 * __useTournamentsByUserIdQuery__
 *
 * To run a query within a React component, call `useTournamentsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTournamentsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTournamentsByUserIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTournamentsByUserIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TournamentsByUserIdQuery, TournamentsByUserIdQueryVariables>) {
        return ApolloReactHooks.useQuery<TournamentsByUserIdQuery, TournamentsByUserIdQueryVariables>(TournamentsByUserIdDocument, baseOptions);
      }
export function useTournamentsByUserIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TournamentsByUserIdQuery, TournamentsByUserIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TournamentsByUserIdQuery, TournamentsByUserIdQueryVariables>(TournamentsByUserIdDocument, baseOptions);
        }
export type TournamentsByUserIdQueryHookResult = ReturnType<typeof useTournamentsByUserIdQuery>;
export type TournamentsByUserIdLazyQueryHookResult = ReturnType<typeof useTournamentsByUserIdLazyQuery>;
export type TournamentsByUserIdQueryResult = ApolloReactCommon.QueryResult<TournamentsByUserIdQuery, TournamentsByUserIdQueryVariables>;
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