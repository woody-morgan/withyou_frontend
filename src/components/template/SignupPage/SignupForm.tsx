import SignupStartSection from '@src/components/template/SignupPage/SignupStartSection';
import { InputBox } from '@src/components/ui/atom';
import { useValidateInput } from '@src/hooks';
import { commonRegex } from '@src/utils/regexUtil';
import React from 'react';

const SignupForm = () => {
  const [name, nameIsValid, nameError, handleNameChange] = useValidateInput(
    '',
    commonRegex.name.regex,
    commonRegex.name.desc
  );

  const [email, emailIsValid, emailError, handleEmailChange] = useValidateInput(
    '',
    commonRegex.email.regex,
    commonRegex.email.desc
  );

  const [password, pwValid, pwError, handlePwChange] = useValidateInput(
    '',
    commonRegex.password.regex,
    commonRegex.password.desc
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <InputBox
        type="id"
        name="name"
        label="Full Name"
        size="small"
        value={name as string}
        error={!nameIsValid}
        errorMessage={nameError}
        fullWidth
        onChange={handleNameChange}
      />
      <InputBox
        type="email"
        name="email"
        label="Email Address"
        size="small"
        value={email as string}
        error={!emailIsValid}
        errorMessage={emailError}
        fullWidth
        onChange={handleEmailChange}
      />
      <InputBox
        type="password"
        name="password"
        label="Password"
        size="small"
        value={password as string}
        error={!pwValid}
        errorMessage={pwError}
        fullWidth
        onChange={handlePwChange}
      />
      <SignupStartSection />
    </form>
  );
};

export default SignupForm;
