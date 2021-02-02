export const initialState = {
  posts: {
    data: [ 
    {
      _id: 1,
      author: 'Ewa',
      created: 'bfsbsb',
      status: 'published',
      title: 'aaaaaaaaaaaa',
      text: 'bbbbbbbbbbb'
    }

  ],
    loading: {
      active: false,
      error: false,
    },
    loginStatus: {
      logged: true,
      notLogged: false,
    },
  },
  notFound: {
    titleText: 'The page you have been looking for does not exist.',
    buttonText: 'Go back to homepage',
  },
  postAdd: {
    headTitle: 'Add your add',
    title: 'TITLE',
    content: 'CONTENT',
    author: 'AUTHOR',
    email: 'EMAIL',
    phone: 'PHONE',
    price: 'PRICE',
    location: 'LOCATION',
    choosePhoto: 'Choose a photo', 
    submitButtonText: 'Publish',
  }
};
