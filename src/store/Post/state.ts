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
}

function state(): PostStateInterface {
  return {
    posts: [
      {
        _id: '62dc09e657e9a1566d0d1ea2',
        title: 'Título da publicação 1',
        body: 'Conteúdo publicação 1',
        author: 'Autor',
        created_at: '12/02/2022',
        updated_at: '12/02/2022',
      },
      {
        _id: '62dc09e657e9a1566d0d1ea2',
        title: 'Título da publicação 2',
        body: 'Conteúdo publicação 2',
        author: 'Autor',
        created_at: '12/02/2022',
        updated_at: '12/02/2022',
      },
      {
        _id: '62dc09e657e9a1566d0d1ea2',
        title: 'Título da publicação 3',
        body: 'Conteúdo publicação 3',
        author: 'Autor',
        created_at: '12/02/2022',
        updated_at: '12/02/2022',
      },
      {
        _id: '62dc09e657e9a1566d0d1ea2',
        title: 'Título da publicação 4',
        body: 'Conteúdo publicação 4',
        author: 'Autor',
        created_at: '12/02/2022',
        updated_at: '12/02/2022',
      },
      {
        _id: '62dc09e657e9a1566d0d1ea2',
        title: 'Título da publicação 5',
        body: 'Conteúdo publicação 5',
        author: 'Autor',
        created_at: '12/02/2022',
        updated_at: '12/02/2022',
      },
    ],
  };
}

export default state;
