import { gql } from '@apollo/client';

export const QUERY_FALL_TASKS = gql`
  query fallTasks {
    fallTasks {
        _id
        name
      }
  }
`;

export const QUERY_SPRING_TASKS = gql`
  query springTasks {
    springTasks {
        _id
        name
    }
  }
`;

export const QUERY_SUMMER_TASKS = gql`
  query summerTasks {
    summerTasks {
        _id
        name
    }
  }
`;

export const QUERY_WINTER_TASKS = gql`
  query winterTasks {
    winterTasks {
        _id
        name
    }
  }
`;