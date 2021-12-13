export type FollowerType = 'facebook' | 'twitter' | 'youtube' | 'instagram';

export interface Follower {
  name: FollowerType,
  srcIcon: string;
  group: string;
  color: string;
  amount: number;
  increase: number;
  decrease: number;
}
