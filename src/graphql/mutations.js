/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPack = /* GraphQL */ `
  mutation CreatePack(
    $input: CreatePackInput!
    $condition: ModelPackConditionInput
  ) {
    createPack(input: $input, condition: $condition) {
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
export const updatePack = /* GraphQL */ `
  mutation UpdatePack(
    $input: UpdatePackInput!
    $condition: ModelPackConditionInput
  ) {
    updatePack(input: $input, condition: $condition) {
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
export const deletePack = /* GraphQL */ `
  mutation DeletePack(
    $input: DeletePackInput!
    $condition: ModelPackConditionInput
  ) {
    deletePack(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
