import React, { SyntheticEvent, useRef, useState } from 'react';
import Button from '../../UI/Button';
import defaultImage from '../../../public/assets/defaultImage.jpg';
import useModal from '../../hook/useModal';

const Profile = () => {
  const [imgFile, setImgFile] = useState<string>();
  const [isEdit, setIsEdit] = useState<boolean>(true);
  const [nickName, setNickName] = useState<string>('닉네임');
  const [tag, setTag] = useState<string>('tag');
  const [introduction, setIntroduction] =
    useState<string>('난 슬플때 노래를 듣지');
  const { showModal } = useModal();
  const nickNameRef = useRef<HTMLInputElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const introductionRef = useRef<HTMLInputElement>(null);

  const handleFollwModal = () => {
    showModal({
      modalType: 'FollowModal',
      modalProps: { title: '팔로우' },
    });
  };

  const handleConfirmModal = () =>
    showModal({
      modalType: 'ConfirmModal',
      modalProps: {
        message: '변경 사항을 저장하시겠습니까?',
        confirmText: handleSaveEditedProfile,
      },
    });
  const handleChangeImage = (
    event: React.ChangeEvent<EventTarget & HTMLInputElement>,
  ) => {
    const file = event?.target?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const result: string | ArrayBuffer | null = reader.result;
        if (typeof result === 'string') {
          setImgFile(result);
        }
      };
    }
  };
  const handleEditButton = () => {
    setIsEdit(!isEdit);
  };
  const handleSaveEditedProfile = () => {
    setIsEdit(!isEdit);
  };

  const handleRemoveImage = () => {
    setImgFile('');
  };
  const handleOnError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = defaultImage;
  };
  return (
    <div className="flex p-4 ">
      <div className=" box-border flex h-[39.875rem] w-[26.875rem] flex-col items-center rounded-[2.5rem] bg-white">
        <header className="flex w-full flex-col border-b border-[#DCDCDC]">
          <h1 className="p-6 pb-3 pl-[.875rem] text-3xl font-semibold ">
            프로필
          </h1>
        </header>

        <div className="flex w-full flex-col items-center py-6">
          {imgFile ? (
            <img
              src={imgFile}
              className="  mb-6 block h-64 w-64 overflow-hidden rounded-full object-cover "
            />
          ) : (
            <label htmlFor="profileImg">
              <img
                className="  mb-6 h-64 w-64 overflow-hidden  rounded-full object-cover"
                onError={handleOnError}
                src={defaultImage}
              />
            </label>
          )}

          <input
            id="profileImg"
            accept="image/*"
            type="file"
            onChange={handleChangeImage}
            className="hidden"
            disabled={isEdit}
          />

          <div>
            <button className="m-3" onClick={handleFollwModal}>
              팔로우20
            </button>
            <button onClick={handleFollwModal} className="text-purple">
              팔로워10
            </button>
          </div>
          <div className="flex flex-row">
            {isEdit ? (
              <Button className={'btn-small'}>게시글 보기</Button>
            ) : (
              <>
                <Button onClick={handleRemoveImage} className={'btn-small'}>
                  이미지 제거
                </Button>
                <label htmlFor="profileImg">
                  <Button className={'btn-small bg-beige-dark text-gray'}>
                    이미지 수정
                  </Button>
                </label>
              </>
            )}
          </div>
          <div className="mb-2 mt-2 flex w-full flex-col items-start px-8 ">
            <div className=" mb-2 flex w-[100%] flex-row justify-between">
              {isEdit ? (
                <h2 className="text-xl font-bold ">{nickName}</h2>
              ) : (
                <input
                  className=" flex border px-1 text-xl font-bold text-gray placeholder:text-sm placeholder:font-normal placeholder:text-gray"
                  placeholder="닉네임을 입력해주세요"
                  defaultValue={nickName}
                  ref={nickNameRef}
                />
              )}
              {/* 내 프로필 수정 버튼 */}
              <div>
                {isEdit ? (
                  <button
                    onClick={handleEditButton}
                    className="flex align-top text-gray underline"
                  >
                    수정
                  </button>
                ) : (
                  <button
                    onClick={handleConfirmModal}
                    className="flex align-top text-gray underline"
                  >
                    완료
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-row">
              {isEdit ? (
                <>
                  <div className="tag">
                    <p className="w-full">#{tag}</p>
                  </div>

                  <div className="tag">
                    <p className="w-full">#tag</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="tag">
                    <input
                      className=" tag placeholder:gray h-full w-full text-gray "
                      defaultValue={tag}
                      ref={tagRef}
                    />
                  </div>
                  <div className="tag">
                    <input
                      className="tag w-full text-gray "
                      defaultValue={tag}
                    />
                  </div>
                </>
              )}
            </div>
            <h2 className="my-2 font-bold">한줄소개</h2>
            {isEdit ? (
              <div className="mb-6"> {introduction}</div>
            ) : (
              <input
                className="place:holder:text-gray mb-6 border text-gray"
                defaultValue={introduction}
                placeholder="한줄 소개를 입력해주세요"
                ref={introductionRef}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
