export const needDefaultImage = (image: string): string => {
  if (!image || image === '' || image === 'null' || image === 'undefined') {
    return '/static/default_profile.svg';
  }
  return image;
};
