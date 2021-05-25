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
};

export type Mutation = {
   __typename?: 'Mutation',
  createTournament: Tournament,
  createUser: User,
};


export type MutationCreateTournamentArgs = {
  data: TournamentCreateInput
};


export type MutationCreateUserArgs = {
  data: UserCreatInput
};

export type Player = {
   __typename?: 'Player',
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


export type QueryTeamArgs = {
  id: Scalars['ID']
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
    )>>, seasons: Maybe<Array<(
      { __typename?: 'Season' }
      & Pick<Season, 'id' | 'name'>
      & { schedules: Maybe<Array<(
        { __typename?: 'Schedule' }
        & Pick<Schedule, 'week'>
        & { matches: Maybe<Array<(
          { __typename?: 'Match' }
          & Pick<Match, 'id'>
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

export type TournamentsQueryVariables = {};


export type TournamentsQuery = (
  { __typename?: 'Query' }
  & { tournaments: Maybe<Array<(
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