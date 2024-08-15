import { PostsInfoType } from '@src/core/types/posts-type';
import { atom, DefaultValue, selector } from 'recoil';

const defaultState: PostsInfoType = {
  posts: [],
};

const postsStateAtom = atom<PostsInfoType>({
  key: 'postsStateAtom',
  default: defaultState,
});

const addPosts = selector<PostsInfoType>({
  key: 'postsStateAtom/addPosts',
  get: ({ get }) => {
    return get(postsStateAtom);
  },
  set: ({ get, set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(postsStateAtom, defaultState);
    } else {
      // Todo: should check immutability
      const nextPosts = [...get(postsStateAtom).posts, ...newValue.posts];
      set(postsStateAtom, {
        posts: nextPosts,
      });
    }
  },
});

export { addPosts, postsStateAtom };
