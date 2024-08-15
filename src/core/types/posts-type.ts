export type PostInfoType = {
  author: string;
  author_profile_image: string;
  text: string;
  images: string[];
};

export type PostsInfoType = {
  posts: PostInfoType[];
};
