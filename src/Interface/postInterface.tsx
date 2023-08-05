

export interface IPost {
  id: string;
  name: string;
  date: string;
  avatarBadge: string;
  images: {
    post_image_half: string;
    post_image_semi: string;
  };
  reactions: {
    loveEmoji1: string;
    loveEmoji2: string;
  };
  likesCount: number;

  commentCount: number;
  shareIcon: string;
  messageTitle: string;
  message: string;
  repliesIcon: string;
  commentIcon: string;
  viewRepliesIcon: string;
  viewReplies: string;
}


interface IPostArray extends Array <IPost> {}

export const postArrays: IPostArray = [
  {
    id: "fsaa",
    name: "Udim Manasseh",
    date: "22nd October 20233  12:15 ",
    avatarBadge: `/images/AvatarBadge.png`,
    images: {
      post_image_half: "/images/post_image_half.png",
      post_image_semi: "/images/post_image_semi.png",
    },
    reactions: {
      loveEmoji1: "/images/love_white.png",
      loveEmoji2: "/images/love_green.png",
    },
    commentCount: 0,
    likesCount: 0,
    shareIcon: "/images/shareIcon.png",
    messageTitle: "Electricity Issues",
    message:
      "Welcome to Future Labs. As a new member of the community you have special access to community member tools such as your Learning Management Dashboard FutureHQ. Click the button below to proceed to your learning dashboard. ",
    repliesIcon: "/images/replyIcon.png",
    commentIcon: "/images/comment.png",
    viewRepliesIcon: "/images/viewReplies_right.png",
    viewReplies: "View Replies",
  },

  {
    id: "fsaa",
    name: "Udim Manasseh",
    date: "22nd October 20233  12:15 ",
    avatarBadge: `/images/AvatarBadge.png`,
    images: {
      post_image_half: "/images/post_image_half.png",
      post_image_semi: `/images/post_image_semi.png`,
    },
    reactions: {
      loveEmoji1: "/images/love_white.png",
      loveEmoji2: "/images/love_green.png",
    },
    commentCount: 0,
    likesCount: 0,
    shareIcon: "/images/shareIcon.png",
    messageTitle: "Electricity Issues",
    message:
      "Welcome to Future Labs. As a new member of the community you have special access to community member tools such as your Learning Management Dashboard FutureHQ. Click the button below to proceed to your learning dashboard. ",
    repliesIcon: "/images/replyIcon.png",
    commentIcon: "/images/comment.png",
    viewRepliesIcon: "/images/viewReplies_right.png",
    viewReplies: "View Replies",
  }
];