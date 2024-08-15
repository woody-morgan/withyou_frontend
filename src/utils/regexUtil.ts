export const commonRegex = {
  name: {
    regex: /^[가-힣a-zA-Z0-9]{2,10}$/,
    desc: '2~10자의 한글 또는 영문 대소문자, 숫자만 사용 가능합니다.',
  },
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    desc: 'Valid Email is required',
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    desc: 'Password must be at least 8 characters, contain at least one lowercase letter, one uppercase letter, one number and one special character',
  },
};
