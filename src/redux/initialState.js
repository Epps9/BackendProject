export const initialState = {
  posts: {
    data: [
    {
      id: 0,
      title: 'Lorem Ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      created: '01-01-2021',
      updated: '05-01-2021',
      email: 'aaaaaaaaaa@wp.pl',
      status: 'published',
      photo: 'image',
      price: '50$',
      phone: '1414143515',
      location: 'Wrocław'
    },
    {
      id: 1,
      title: 'Lorem Ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      created: '01-01-2021',
      updated: '05-01-2021',
      email: 'aaaaaaaaaa@wp.pl',
      status: 'published',
      photo: 'image',
      price: '60$',
      phone: '1414143515',
      location: 'Wrocław'
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      created: '01-01-2021',
      updated: '05-01-2021',
      email: 'aaaaaaaaaa@wp.pl',
      status: 'published',
      photo: 'image',
      price: '70$',
      phone: '1414143515',
      location: 'Wrocław'
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      created: '01-01-2021',
      updated: '05-01-2021',
      email: 'aaaaaaaaaa@wp.pl',
      status: 'waiting',
      photo: 'image',
      price: '70$',
      phone: '1414143515',
      location: 'Wrocław'
    },
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
