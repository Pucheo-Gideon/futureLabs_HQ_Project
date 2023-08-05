export interface IPost_4_Comment {
  id: string;
  name: string;
  date: string;
  avatarBadge: string;
  reactions: {
    loveEmoji1: string;
    loveEmoji2: string;
  };
  likesCount: number;

  commentCount: number;
  messageTitle: string;
  message: string;
}

interface PostTab extends Array<IPost_4_Comment> {}

export const Post_4_CommentInfo: PostTab = [
  {
    id: "4ua*",
    name: "Udim Manasseh",
    date: "22nd October 20233  12:15 ",
    avatarBadge: `/images/AvatarBadge.png`,
    reactions: {
      loveEmoji1: "/images/love_white.png",
      loveEmoji2: "/images/love_green.png",
    },
    commentCount: 0,
    likesCount: 0,
    messageTitle: "Electricity Issues",
    message:
      "Welcome to Future Labs. As a new member of the community you have special access to community member tools such as your Learning Management Dashboard FutureHQ. Click the button below to proceed to your learning dashboard. ",
  },
];

// interface DM_Message extends Array<IPost_4_Comment>

// export const DM_Message_IsActive: DM_Message = [
//   {
//     name: "Rhyie Melen",
//     avatarBadge: "/public/images/AvatarActive.png",
//   },
// ]