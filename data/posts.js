import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1622763853951-ded5a33cb724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: USERS[0].user,
    likes_by_users: ['test','test','test','test','test','test','test','test','test','test','test','test','test'],
    caption: "New place! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto numquam laudantium placeat dolorem voluptatum iste autem quae cumque, nobis, consectetur repudiandae omnis ad voluptate beatae! Dolore nostrum provident molestias",
    profile_picture: USERS[0].image,
    comments: [
      { user: USERS[3].user, comment: "cool" },
      { user: USERS[1].user, comment: "realcoolplace" },
      { user: USERS[4].user, comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
      { user: USERS[2].user, comment: "that's not you tho"}
    ],
  },
  {
    imageUrl:
    "https://images.unsplash.com/photo-1591053839326-792f85d2f331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    user: USERS[1].user,
    likes_by_users: ['test','test','test','test','test','test','test','test','test'],
    caption: "EVERYONE GETS BOXES THESE DAYS",
    profile_picture: USERS[1].image,
    comments: [
      { user: USERS[3].user, comment: "box" },
      { user: USERS[1].user, comment: "boxbox?" },
      { user: USERS[4].user, comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto numquam laudantium placeat dolorem voluptatum iste autem quae cumque, nobis, consectetur repudiandae omnis ad voluptate beatae! Dolore nostrum provident molestias."},
      { user: USERS[2].user, comment: "no lorem!"}
    ],
  },
];
