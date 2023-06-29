import React, { SyntheticEvent, useRef, useState } from 'react';
import Button from '../../UI/Button';
import defaultImage from '../../../public/assets/defaultImage.jpg';
const Profile = () => {
  const [imgFile, setImgFile] = useState<string>();
  // const imgRef = useRef<HTMLInputElement | null>();
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
          <label htmlFor="profileImg">
            {imgFile ? (
              <img
                src={imgFile}
                className=" mb-6 h-64 w-64 overflow-hidden rounded-full object-cover"
                onError={handleOnError}
              />
            ) : (
              <img
                className="  mb-6 h-64 w-64 overflow-hidden  rounded-full object-cover"
                src={defaultImage}
              />
            )}
          </label>
          <input
            id="profileImg"
            accept="image/*"
            type="file"
            onChange={handleChangeImage}
            className="hidden"
          />

          <div>
            <button className="m-3">팔로우20</button>
            <button className="text-purple">팔로워10</button>
          </div>
          <div className="flex flex-row">
            <Button className={'btn-small'}>게시글 보기</Button>
            <Button onClick={handleRemoveImage} className={'btn-small'}>
              이미지 제거
            </Button>
            <Button className={'btn-small bg-beige-dark text-gray'}>
              이미지 수정
            </Button>
          </div>
          <div className="mb-2 mt-2 flex w-full flex-col items-start px-8 ">
            <div className=" mb-2 flex w-[100%] flex-row justify-between">
              <h2 className="font-bold">닉네임</h2>
              {/* 내 프로필 수정 버튼 */}
              <button className="flex align-top text-gray underline">
                수정
              </button>
            </div>
            <div className="flex flex-row">
              <div className="tag">
                <p className="w-full text-purple">#tag</p>
              </div>
              <div className="tag">
                <p className="w-full text-purple">#tag</p>
              </div>
            </div>
            <h2 className="my-2 font-bold">한줄소개</h2>
            <div className="mb-6"> 나는 슬플 때 노래를 듣지</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
