import React from 'react';
import useModal from '../hook/useModal';

const Profile = () => {
  const { showModal } = useModal();
  const handleFollowModal = () => {
    showModal({
      modalType: 'FollowModal',
      modalProps: {
        title: '팔로우',
      },
    });
  };
  return (
    <div className="flex p-4 ">
      <div className=" box-border flex h-[638px] w-[430px] flex-col items-center rounded-[40px] bg-white">
        <header className="flex w-full flex-col border-b border-[#DCDCDC]">
          <h1 className="p-6 pb-3 pl-[14px] text-3xl font-semibold ">프로필</h1>
        </header>
        <div className="flex w-full flex-col items-center py-6">
          <img
            src="images/sample/soondoo.jpeg"
            className=" border-1 mb-6 h-64 w-64 rounded-full object-cover"
          />
          <div>
            <button className="m-3" onClick={handleFollowModal}>
              팔로우20
            </button>
            <button className="text-purple" onClick={handleFollowModal}>
              팔로워10
            </button>
          </div>
          <div className="flex flex-row">
            {/* <button className="btn-small">게시글 보기</button> */}

            <button className="btn-small">이미지 제거</button>
            <button className="btn-small bg-beige-dark text-gray">
              이미지 수정
            </button>
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
