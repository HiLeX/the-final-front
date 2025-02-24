// @ts-ignore
import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
}

export interface AddressInput {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  number?: InputMaybe<Scalars['Int']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  zipCode: Scalars['String']['input'];
}

export interface AuthMutation {
  signIn?: Maybe<SignInResponse>;
  signUp?: Maybe<SignUpResponse>;
}


export interface AuthMutationSignInArgs {
  input: UserSignInInput;
}


export interface AuthMutationSignUpArgs {
  input: UserSignUpInput;
}

export interface ContactMethod {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
}

export type ContactMethodOwner = User;

export interface ContactMethodQuery {
  available?: Maybe<Array<ContactMethod>>;
}

export enum ContactMethodType {
  Personal = 'Personal',
  Professional = 'Professional'
}

export interface CreateContactMethodInput {
  contactMethodId: Scalars['String']['input'];
  isMain: Scalars['Boolean']['input'];
  type: ContactMethodType;
  value: Scalars['String']['input'];
}

export interface CreateOrganizationInput {
  contactMethods?: InputMaybe<Array<CreateContactMethodInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type?: InputMaybe<OrganizationType>;
  website?: InputMaybe<Scalars['String']['input']>;
}

export interface Error {
  message: Scalars['String']['output'];
}

export enum Gender {
  Man = 'MAN',
  Woman = 'WOMAN'
}

export interface Mutation {
  auth?: Maybe<AuthMutation>;
  organization?: Maybe<OrganizationMutation>;
  user?: Maybe<UserMutation>;
}

export interface Organization {
  contactMethods?: Maybe<Array<ContactMethod>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<OrganizationType>;
  website?: Maybe<Scalars['String']['output']>;
}

export interface OrganizationMutation {
  create?: Maybe<OrganizationResponse>;
}


export interface OrganizationMutationCreateArgs {
  payload: CreateOrganizationInput;
}

export type OrganizationResponse = Error | Organization;

export enum OrganizationType {
  Company = 'COMPANY',
  Government = 'GOVERNMENT',
  Nonprofit = 'NONPROFIT',
  Other = 'OTHER',
  School = 'SCHOOL'
}

export interface Query {
  contactMethod?: Maybe<ContactMethodQuery>;
  ping: Scalars['String']['output'];
  user: UserQuery;
}

export type SignInResponse = Error | Token;

export type SignUpResponse = Error | Token;

export interface Token {
  access: Scalars['String']['output'];
  refresh: Scalars['String']['output'];
}

export interface UpdateContactMethodInput {
  contactMethodId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<ContactMethodType>;
  value?: InputMaybe<Scalars['String']['input']>;
}

export interface UpdateOrganizationInput {
  contactMethods?: InputMaybe<Array<CreateContactMethodInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<OrganizationType>;
  website?: InputMaybe<Scalars['String']['input']>;
}

export interface User {
  birthdate?: Maybe<Scalars['String']['output']>;
  contactMethods?: Maybe<Array<UserContactMethod>>;
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Scalars['String']['output']>;
}

export interface UserContactMethod {
  id: Scalars['ID']['output'];
  isEditable: Scalars['Boolean']['output'];
  isMain: Scalars['Boolean']['output'];
  owner: ContactMethodOwner;
  type: ContactMethod;
  value: Scalars['String']['output'];
}

export interface UserContactMethodMutation {
  add: UserContactMethodResponse;
  delete: Scalars['Boolean']['output'];
  update: UserContactMethodResponse;
}


export interface UserContactMethodMutationAddArgs {
  payload: CreateContactMethodInput;
}


export interface UserContactMethodMutationDeleteArgs {
  id: Scalars['String']['input'];
}


export interface UserContactMethodMutationUpdateArgs {
  payload: UpdateContactMethodInput;
}

export type UserContactMethodResponse = Error | UserContactMethod;

export interface UserMutation {
  contactMethods: UserContactMethodMutation;
  setProfile?: Maybe<User>;
}


export interface UserMutationSetProfileArgs {
  input: UserProfileInput;
}

export interface UserProfileInput {
  birthdate?: InputMaybe<Scalars['Date']['input']>;
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  sex?: InputMaybe<Gender>;
}

export interface UserQuery {
  me?: Maybe<User>;
}

export interface UserSignInInput {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}

export interface UserSignUpInput {
  cgu: Scalars['Boolean']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
}

export type SignUpMutationVariables = Exact<{
  input: UserSignUpInput;
}>;


export type SignUpMutation = { auth?: { signUp?: { message: string } | { access: string } | null } | null };

export type SignInMutationVariables = Exact<{
  input: UserSignInInput;
}>;


export type SignInMutation = { auth?: { signIn?: { message: string } | { access: string } | null } | null };

export type SetProfileMutationVariables = Exact<{
  input: UserProfileInput;
}>;


export type SetProfileMutation = { user?: { setProfile?: { email: string, firstname?: string | null, lastname?: string | null, sex?: string | null } | null } | null };

export type UserInfosFragment = { email: string, firstname?: string | null, lastname?: string | null, sex?: string | null };

export type UserInfosQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInfosQuery = { user: { me?: { email: string, firstname?: string | null, lastname?: string | null, sex?: string | null } | null } };

export const UserInfosFragmentDoc = gql`
    fragment UserInfos on User {
  email
  firstname
  lastname
  sex
}
    `;
export const SignUpDocument = gql`
    mutation signUp($input: UserSignUpInput!) {
  auth {
    signUp(input: $input) {
      ... on Token {
        access
      }
      ... on Error {
        message
      }
    }
  }
}
    `;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSignUpMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(options: VueApolloComposable.UseMutationOptions<SignUpMutation, SignUpMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SignUpMutation, SignUpMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
}
export type SignUpMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = gql`
    mutation signIn($input: UserSignInInput!) {
  auth {
    signIn(input: $input) {
      ... on Token {
        access
      }
      ... on Error {
        message
      }
    }
  }
}
    `;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSignInMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(options: VueApolloComposable.UseMutationOptions<SignInMutation, SignInMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SignInMutation, SignInMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
}
export type SignInMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SignInMutation, SignInMutationVariables>;
export const SetProfileDocument = gql`
    mutation setProfile($input: UserProfileInput!) {
  user {
    setProfile(input: $input) {
      ...UserInfos
    }
  }
}
    ${UserInfosFragmentDoc}`;

/**
 * __useSetProfileMutation__
 *
 * To run a mutation, you first call `useSetProfileMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSetProfileMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSetProfileMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSetProfileMutation(options: VueApolloComposable.UseMutationOptions<SetProfileMutation, SetProfileMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SetProfileMutation, SetProfileMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<SetProfileMutation, SetProfileMutationVariables>(SetProfileDocument, options);
}
export type SetProfileMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SetProfileMutation, SetProfileMutationVariables>;
export const UserInfosDocument = gql`
    query userInfos {
  user {
    me {
      ...UserInfos
    }
  }
}
    ${UserInfosFragmentDoc}`;

/**
 * __useUserInfosQuery__
 *
 * To run a query within a Vue component, call `useUserInfosQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfosQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUserInfosQuery();
 */
export function useUserInfosQuery(options: VueApolloComposable.UseQueryOptions<UserInfosQuery, UserInfosQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserInfosQuery, UserInfosQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserInfosQuery, UserInfosQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<UserInfosQuery, UserInfosQueryVariables>(UserInfosDocument, {}, options);
}
export function useUserInfosLazyQuery(options: VueApolloComposable.UseQueryOptions<UserInfosQuery, UserInfosQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserInfosQuery, UserInfosQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserInfosQuery, UserInfosQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<UserInfosQuery, UserInfosQueryVariables>(UserInfosDocument, {}, options);
}
export type UserInfosQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<UserInfosQuery, UserInfosQueryVariables>;