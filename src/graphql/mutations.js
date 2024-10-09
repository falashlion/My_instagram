/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      bio
      avatar
      name
      Phone
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
      conversations {
        nextToken
        __typename
      }
      owner
      __typename
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
      username
      email
      bio
      avatar
      name
      Phone
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
      conversations {
        nextToken
        __typename
      }
      owner
      __typename
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
      username
      email
      bio
      avatar
      name
      Phone
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
      conversations {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      participants {
        nextToken
        __typename
      }
      messages {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      participants {
        nextToken
        __typename
      }
      messages {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
      participants {
        nextToken
        __typename
      }
      messages {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const createConversationParticipant = /* GraphQL */ `
  mutation CreateConversationParticipant(
    $input: CreateConversationParticipantInput!
    $condition: ModelConversationParticipantConditionInput
  ) {
    createConversationParticipant(input: $input, condition: $condition) {
      id
      conversationID
      userID
      joinedAt
      conversation {
        id
        title
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
        name
        Phone
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
export const updateConversationParticipant = /* GraphQL */ `
  mutation UpdateConversationParticipant(
    $input: UpdateConversationParticipantInput!
    $condition: ModelConversationParticipantConditionInput
  ) {
    updateConversationParticipant(input: $input, condition: $condition) {
      id
      conversationID
      userID
      joinedAt
      conversation {
        id
        title
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
        name
        Phone
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
export const deleteConversationParticipant = /* GraphQL */ `
  mutation DeleteConversationParticipant(
    $input: DeleteConversationParticipantInput!
    $condition: ModelConversationParticipantConditionInput
  ) {
    deleteConversationParticipant(input: $input, condition: $condition) {
      id
      conversationID
      userID
      joinedAt
      conversation {
        id
        title
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
        name
        Phone
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      senderID
      conversationID
      messageText
      mediaURL
      mediaType
      createdAt
      status
      sender {
        id
        username
        email
        bio
        avatar
        name
        Phone
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      conversation {
        id
        title
        createdAt
        updatedAt
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      senderID
      conversationID
      messageText
      mediaURL
      mediaType
      createdAt
      status
      sender {
        id
        username
        email
        bio
        avatar
        name
        Phone
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      conversation {
        id
        title
        createdAt
        updatedAt
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      senderID
      conversationID
      messageText
      mediaURL
      mediaType
      createdAt
      status
      sender {
        id
        username
        email
        bio
        avatar
        name
        Phone
        isPrivate
        Gender
        createdAt
        updatedAt
        socials
        owner
        __typename
      }
      conversation {
        id
        title
        createdAt
        updatedAt
        owner
        __typename
      }
      updatedAt
      owner
      __typename
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
        name
        Phone
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
        name
        Phone
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
        name
        Phone
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
        name
        Phone
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
        name
        Phone
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
        name
        Phone
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
        name
        Phone
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
        name
        Phone
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
        name
        Phone
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
export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
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
        name
        Phone
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
        name
        Phone
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
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
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
        name
        Phone
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
        name
        Phone
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
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
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
        name
        Phone
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
        name
        Phone
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createGroupMember = /* GraphQL */ `
  mutation CreateGroupMember(
    $input: CreateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    createGroupMember(input: $input, condition: $condition) {
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
        name
        Phone
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
export const updateGroupMember = /* GraphQL */ `
  mutation UpdateGroupMember(
    $input: UpdateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    updateGroupMember(input: $input, condition: $condition) {
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
        name
        Phone
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
export const deleteGroupMember = /* GraphQL */ `
  mutation DeleteGroupMember(
    $input: DeleteGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    deleteGroupMember(input: $input, condition: $condition) {
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
        name
        Phone
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
        name
        Phone
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
        name
        Phone
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
        name
        Phone
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
