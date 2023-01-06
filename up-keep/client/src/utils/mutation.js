import { gql } from "@apollo/client";

export const CREATE_FALL_TASK = gql`
  mutation createFallTask() {
    createFallTask() {
    }
  }
`;

export const CREATE_SPRING_TASK = gql`
  mutation createSpringTask() {
    createSpringTask() {
    }
  }
`;

export const CREATE_SUMMER_TASK = gql`
  mutation createSummerTask() {
    createSummerTask() {
    }
  }
`;

export const CREATE_WINTER_TASK = gql`
  mutation createWinterTask() {
    createWinterTask() {
    }
  }
`;

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
