export const initialState = {
  posts: {
    data: [
    {
      id: 1,
      title: 'Lorem Ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '01-01-2021',
      dateModified: '05-01-2021',
      email: 'aaaaaaaaaa@wp.pl',
      status: 'Published',
      photo: 'image',
      price: '50$',
      phone: '1414143515',
      location: 'Wrocław'
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '01-01-2021',
      dateModified: '05-01-2021',
      email: 'aaaaaaaaaa@wp.pl',
      status: 'Published',
      photo: 'image',
      price: '60$',
      phone: '1414143515',
      location: 'Wrocław'
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '01-01-2021',
      dateModified: '05-01-2021',
      email: 'aaaaaaaaaa@wp.pl',
      status: 'Published',
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
};
