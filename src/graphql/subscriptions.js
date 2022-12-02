/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePack = /* GraphQL */ `
  subscription OnCreatePack(
    $filter: ModelSubscriptionPackFilterInput
    $owner: String
  ) {
    onCreatePack(filter: $filter, owner: $owner) {
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
export const onUpdatePack = /* GraphQL */ `
  subscription OnUpdatePack(
    $filter: ModelSubscriptionPackFilterInput
    $owner: String
  ) {
    onUpdatePack(filter: $filter, owner: $owner) {
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
export const onDeletePack = /* GraphQL */ `
  subscription OnDeletePack(
    $filter: ModelSubscriptionPackFilterInput
    $owner: String
  ) {
    onDeletePack(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
