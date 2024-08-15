export type WithChange<T> = { [P in keyof T & string as `${P}Change`]: T[P] };
