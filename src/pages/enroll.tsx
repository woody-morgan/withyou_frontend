import { withEnrollAuthSSR } from '@src/components/hoc';
import { PageLayout } from '@src/components/layout';
import {
  Button,
  FullWidthOverflowScrollWrapper,
  InputBox,
  SelectBox,
} from '@src/components/ui/atom';
import CommonBackwardHeader from '@src/components/ui/atom/Header/CommonBackwardHeader';
import { ImageWithEditButton } from '@src/components/ui/organism';
import { apiUploadProfileInfo } from '@src/core/api/apiProfile';
import { useValidateInput } from '@src/hooks';
import { familyRoleList } from '@src/utils/constants';
import { commonRegex } from '@src/utils/regexUtil';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';

export const getServerSideProps = withEnrollAuthSSR();

const EnrollPage = () => {
  const router = useRouter();
  const familyRoleListMemo = useMemo(() => familyRoleList, []);

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [name, nameIsValid, nameError, handleNameChange] = useValidateInput<string>(
    '',
    commonRegex.name.regex,
    commonRegex.name.desc
  );
  const [role, setRole] = useState('');

  const handleBackward = () => {
    router.back();
  };

  const isValidSubmit = (): boolean => {
    if (!nameIsValid || !role || imageFiles.length == 0) return false;
    return true;
  };

  const handleSubmit = async () => {
    if (isValidSubmit()) {
      await apiUploadProfileInfo({ imageFile: imageFiles[0], nickname: name, role });
      router.push('/');
    }
  };

  return (
    <PageLayout
      fixedHeight
      className="bg-white"
      headerContent={<CommonBackwardHeader title={'내 프로필 만들기'} onBack={handleBackward} />}
    >
      <FullWidthOverflowScrollWrapper>
        <div className="flex flex-col justify-between items-center pt-8 space-y-4">
          <ImageWithEditButton
            imageFiles={imageFiles}
            setImageFiles={setImageFiles}
            inputId="profile"
            src={'/static/default_profile.svg'}
          />
          <InputBox
            type="id"
            label="이름"
            fullWidth
            value={name as string}
            error={!nameIsValid}
            errorMessage={nameError}
            name="username"
            classNames="border-none bg-gray-50"
            onChange={handleNameChange}
          />
          <SelectBox
            fullWidth
            label="역할"
            name="role"
            defaultValue={'역할'}
            optionList={familyRoleListMemo}
            classNames="border-none bg-gray-50"
            onSelect={(e) => setRole(e.target.value)}
          />
        </div>
      </FullWidthOverflowScrollWrapper>
      <div className="absolute left-0 bottom-0 w-full max-w-mobile-app">
        <Button
          disabled={!isValidSubmit()}
          styles="wy-blue"
          fullWidth
          roundness="keyboard"
          onClick={handleSubmit}
        >
          시작하기
        </Button>
      </div>
    </PageLayout>
  );
};

export default EnrollPage;
