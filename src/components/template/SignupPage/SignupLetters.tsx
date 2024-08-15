import siteMetadata from '@src/core/config/siteMetadata';
import React, { memo } from 'react';

const SignupLetters = () => {
  return (
    <div className="text-center space-y-1">
      <h1>Create your account</h1>
      <p>
        Join <strong>{siteMetadata.title}</strong> for free. Create and share unlimited kid logs
        with your family.
      </p>
    </div>
  );
};

export default memo(SignupLetters);
