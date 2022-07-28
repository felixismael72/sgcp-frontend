type Post = {
  _id: string;
  title: string;
  body: string;
  author: string;
  created_at: string;
  updated_at: string;
};

export interface PostStateInterface {
  posts: Post[];
  openedPost: Post;
}

function state(): PostStateInterface {
  return {
    posts: [],
    openedPost: {} as Post,
  };
}

export default state;
