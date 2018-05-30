import { User } from '../../user/models/user.model';

export const USER_DEMO_LOGIN = new User();
USER_DEMO_LOGIN.id = 'kjfhdkjshfdksa';
USER_DEMO_LOGIN.name = {
  first: 'Logan',
  last: 'Silva',
  title: 'Sr'
};
USER_DEMO_LOGIN.email = 'logan.silva@example.com';
USER_DEMO_LOGIN.phone = '83829-233-233112';
USER_DEMO_LOGIN.picture = {
  large: 'https://upload.wikimedia.org/wikipedia/commons/thumb/' +
  '7/7d/Weimaraner_Walker_portrait.jpg/440px-Weimaraner_Walker_portrait.jpg',
  medium: '',
  thumbnail: ''
};
