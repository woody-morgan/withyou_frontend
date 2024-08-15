import { openPostCreateModal } from '@src/atom/modal';
import { Button } from '@src/components/atom';
import React from 'react';
import { useSetRecoilState } from 'recoil';

const TestPage = () => {
  const showPostCreateModalCB = useSetRecoilState(openPostCreateModal);
  return (
    <div>
      <Button
        onClick={() =>
          showPostCreateModalCB({
            fullScreen: true,
          })
        }
      >
        Test
      </Button>
    </div>
  );
};

export default TestPage;
