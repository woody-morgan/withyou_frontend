import React, { FunctionComponent } from 'react';

const FileInputBox: FunctionComponent<{
  inputId: string;
  multiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ inputId, multiple = false, onChange }) => {
  return (
    <input id={inputId} type="file" className="hidden" multiple={multiple} onChange={onChange} />
  );
};

export default FileInputBox;
