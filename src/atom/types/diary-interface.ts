import { ApiCommonDiaryProps } from '@src/core/api/interface/api-diary-interface';

export interface DiaryAtom {
  isInit: boolean;
  isLast: boolean | null;
  nextId: number | null;
  diaries: ApiCommonDiaryProps[];
}
