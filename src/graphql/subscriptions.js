/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      bio
      avatar
      firstname
      surname
      isPrivate
      Gender
      createdAt
      updatedAt
      posts {
        nextToken
        __typename
      }
      followers {
        nextToken
        __typename
      }
      following {
        nextToken
        __typename
      }
      messages {
        nextToken
        __typename
      }
      groups {
        nextToken
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      socials
      owner
      __typename
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
      username
      email
      bio
      avatar
      firstname
      surname
      isPrivate
      Gender
      createdAt
      updatedAt
      posts {
        nextToken
        __typename
      }
      followers {
        nextToken
        __typename
      }
      following {
        nextToken
        __typename
      }
      messages {
        nextToken
        __typename
      }
      groups {
        nextToken
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      socials
      owner
      __typename
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
      username
      email
      bio
      avatar
      firstname
      surname
      isPrivate
      Gender
      createdAt
      updatedAt
      posts {
        nextToken
        __typename
      }
      followers {
        nextToken
        __typename
      }
      following {
        nextToken
        __typename
      }
      messages {
        nextToken
        __typename
      }
      groups {
        nextToken
        __typename
      }
      notifications {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      socials
      owner
      __typename
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
      id
      userID
      content
      mediaURL
      mediaType
      location
      tags
      createdAt
      updatedAt
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
      id
      userID
      content
      mediaURL
      mediaType
      location
      tags
      createdAt
      updatedAt
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
      id
      userID
      content
      mediaURL
      mediaType
      location
      tags
      createdAt
      updatedAt
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
      id
      postID
      userID
      commentText
      mediaURL
      mediaType
      createdAt
      updatedAt
      post {
        id
        userID
        content
        mediaURL
        mediaType
        location
        tags
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      owner
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
      id
      postID
      userID
      commentText
      mediaURL
      mediaType
      createdAt
      updatedAt
      post {
        id
        userID
        content
        mediaURL
        mediaType
        location
        tags
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      owner
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
      id
      postID
      userID
      commentText
      mediaURL
      mediaType
      createdAt
      updatedAt
      post {
        id
        userID
        content
        mediaURL
        mediaType
        location
        tags
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      owner
      __typename
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onCreateLike(filter: $filter, owner: $owner) {
      id
      postID
      userID
      createdAt
      post {
        id
        userID
        content
        mediaURL
        mediaType
        location
        tags
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onUpdateLike(filter: $filter, owner: $owner) {
      id
      postID
      userID
      createdAt
      post {
        id
        userID
        content
        mediaURL
        mediaType
        location
        tags
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onDeleteLike(filter: $filter, owner: $owner) {
      id
      postID
      userID
      createdAt
      post {
        id
        userID
        content
        mediaURL
        mediaType
        location
        tags
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower(
    $filter: ModelSubscriptionFollowerFilterInput
    $owner: String
  ) {
    onCreateFollower(filter: $filter, owner: $owner) {
      id
      followerID
      followedID
      createdAt
      follower {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      followed {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower(
    $filter: ModelSubscriptionFollowerFilterInput
    $owner: String
  ) {
    onUpdateFollower(filter: $filter, owner: $owner) {
      id
      followerID
      followedID
      createdAt
      follower {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      followed {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower(
    $filter: ModelSubscriptionFollowerFilterInput
    $owner: String
  ) {
    onDeleteFollower(filter: $filter, owner: $owner) {
      id
      followerID
      followedID
      createdAt
      follower {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      followed {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onCreateMessage(filter: $filter, owner: $owner) {
      id
      senderID
      receiverID
      messageText
      mediaURL
      mediaType
      createdAt
      sender {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      receiver {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onUpdateMessage(filter: $filter, owner: $owner) {
      id
      senderID
      receiverID
      messageText
      mediaURL
      mediaType
      createdAt
      sender {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      receiver {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onDeleteMessage(filter: $filter, owner: $owner) {
      id
      senderID
      receiverID
      messageText
      mediaURL
      mediaType
      createdAt
      sender {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      receiver {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onCreateGroup(filter: $filter, owner: $owner) {
      id
      groupName
      groupDescription
      avatar
      createdAt
      members {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onUpdateGroup(filter: $filter, owner: $owner) {
      id
      groupName
      groupDescription
      avatar
      createdAt
      members {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onDeleteGroup(filter: $filter, owner: $owner) {
      id
      groupName
      groupDescription
      avatar
      createdAt
      members {
        nextToken
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateGroupMember = /* GraphQL */ `
  subscription OnCreateGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
    $owner: String
  ) {
    onCreateGroupMember(filter: $filter, owner: $owner) {
      id
      groupID
      userID
      joinedAt
      group {
        id
        groupName
        groupDescription
        avatar
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateGroupMember = /* GraphQL */ `
  subscription OnUpdateGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
    $owner: String
  ) {
    onUpdateGroupMember(filter: $filter, owner: $owner) {
      id
      groupID
      userID
      joinedAt
      group {
        id
        groupName
        groupDescription
        avatar
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteGroupMember = /* GraphQL */ `
  subscription OnDeleteGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
    $owner: String
  ) {
    onDeleteGroupMember(filter: $filter, owner: $owner) {
      id
      groupID
      userID
      joinedAt
      group {
        id
        groupName
        groupDescription
        avatar
        createdAt
        updatedAt
        owner
        __typename
      }
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onCreateNotification(filter: $filter, owner: $owner) {
      id
      userID
      notificationType
      message
      createdAt
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onUpdateNotification(filter: $filter, owner: $owner) {
      id
      userID
      notificationType
      message
      createdAt
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
    $owner: String
  ) {
    onDeleteNotification(filter: $filter, owner: $owner) {
      id
      userID
      notificationType
      message
      createdAt
      user {
        id
        username
        email
        bio
        avatar
        firstname
        surname
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
