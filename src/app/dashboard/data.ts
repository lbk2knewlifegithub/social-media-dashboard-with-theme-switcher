import { Follower } from './models/follower.mode';
import { Overview } from './models/overview.model';

export const followers: Follower[] = [
  {
    color: 'bg-facebook',
    name: 'facebook',
    srcIcon: '/assets/images/icon-facebook.svg',
    group: '@nathanf',
    amount: 1987,
    increase: 12,
    decrease: 0,
  },
  {
    color: 'bg-twitter',
    name: 'twitter',
    srcIcon: '/assets/images/icon-twitter.svg',
    group: '@nathanf',
    amount: 1044,
    increase: 99,
    decrease: 0,
  },
  {
    color: 'bg-instagram',
    name: 'instagram',
    srcIcon: '/assets/images/icon-instagram.svg',
    group: '@realnathanf',
    amount: 11,
    increase: 1099,
    decrease: 0,
  },
  {
    color: 'bg-youtube',
    name: 'youtube',
    srcIcon: '/assets/images/icon-youtube.svg',
    group: '@NaThan F',
    amount: 8239,
    increase: 0,
    decrease: 144,
  },
];

export const overviews: Overview[] = [
  {
    name: 'Page Views',
    srcIcon: '/assets/images/icon-facebook.svg',
    increase: 3,
    amount: 87,
  },
  {
    name: 'Likes',
    srcIcon: '/assets/images/icon-facebook.svg',
    amount: 42,
    decrease: 2,
  },
  {
    name: 'Likes',
    srcIcon: '/assets/images/icon-instagram.svg',
    amount: 5462,
    increase: 2257,
  },
  {
    name: 'Profile Views',
    srcIcon: '/assets/images/icon-instagram.svg',
    amount: 52,
    increase: 1375,
    prefix: true,
  },
  {
    name: 'Retweets',
    srcIcon: '/assets/images/icon-twitter.svg',
    amount: 303,
    increase: 117,
  },
  {
    name: 'Likes',
    srcIcon: '/assets/images/icon-twitter.svg',
    amount: 507,
    increase: 553,
  },
  {
    name: 'Likes',
    srcIcon: '/assets/images/icon-youtube.svg',
    amount: 107,
    decrease: 19,
  },
  {
    name: 'Total Views',
    srcIcon: '/assets/images/icon-youtube.svg',
    amount: 1407,
    decrease: 12,
  },
];
