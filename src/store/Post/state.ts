export type Post = {
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
  createdID: string;
}

function state(): PostStateInterface {
  return {
    posts: [],
    openedPost: {} as Post,
    createdID: '',
  };
}

export default state;
