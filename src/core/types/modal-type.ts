export type PostCreateModal = 'POSTCREATE';

export type ModalType = PostCreateModal;

export type ModalInfoType = {
  type: ModalType | null;
  title: string | null;
  fullScreen?: boolean;
  option?: unknown;
};

export type ModalContentType = {
  option?: unknown;
};

export type RoomJoinModalContentOption = {
  roomId: string;
};
