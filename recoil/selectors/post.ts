import { selector } from 'recoil';
import { category } from '../atoms/post';

export const post = selector({
  key: 'post',
  get({ get }) {
    const categoryName = get(category);

    if (categoryName) {
      return {
        id: 1,
        title: 'Technology',
        content: 'Redux',
      };
    }

    return {} as any;
  },
  set({ get }, newValue) {
    const categoryName = get(category);

    if (categoryName) {
      return newValue;
    }

    return {};
  },
});
