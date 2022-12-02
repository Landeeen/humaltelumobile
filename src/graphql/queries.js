/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPack = /* GraphQL */ `
  query GetPack($id: ID!) {
    getPack(id: $id) {
      id
      packName
      userID
      tasks
      private
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPacks = /* GraphQL */ `
  query ListPacks(
    $filter: ModelPackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        packName
        userID
        tasks
        private
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      packs {
        items {
          id
          packName
          userID
          tasks
          private
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      likedPacks {
        items {
          id
          packName
          userID
          tasks
          private
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      paidCustomer
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        packs {
          nextToken
        }
        likedPacks {
          nextToken
        }
        paidCustomer
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const packsByUserIDAndId = /* GraphQL */ `
  query PacksByUserIDAndId(
    $userID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    packsByUserIDAndId(
      userID: $userID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        packName
        userID
        tasks
        private
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
