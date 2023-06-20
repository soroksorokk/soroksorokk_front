import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-auto">
      <div
        className=" box-border flex flex-col items-center border"
        style={{ width: '430px', height: '638px', borderRadius: '40px' }}
      >
        <div className="flex w-full flex-col">
          <h1
            className="p-6 pb-3 text-3xl font-semibold"
            style={{ paddingLeft: '14px' }}
          >
            프로필
          </h1>
          <hr className="border-1 border-gray" />
        </div>
        <div className="flex w-full flex-col items-center py-6">
          <img className="h-64 w-64 rounded-full border-2" />
          <div>
            <button className="m-6">팔로우 20</button>
            <button>팔로워 10</button>
          </div>
          <button className="flex h-9 w-24 rounded-full bg-purple px-4 py-2 text-sm text-white">
            게시글보기
          </button>
          <div className="mb-2 mt-2 flex w-full flex-col items-start px-8 ">
            <h2 className="mb-4 font-bold ">닉네임</h2>
            <div className="flex flex-row">
              <div
                className="mr-2 flex w-20 items-center rounded-xl border border-black bg-beige-dark"
                style={{ width: '74px', padding: '1.5px 8px 1.5px 8px' }}
              >
                <p className="w-full">#tag</p>
              </div>
              <div
                className=" mr-2 w-20 rounded-xl border border-black bg-beige-dark"
                style={{ width: '74px', padding: '1.5px 8px 1.5px 8px' }}
              >
                <p>#tag</p>
              </div>
            </div>

            <h2 className="my-4 font-bold">한줄소개</h2>
            <div className="mb-6"> 나는 슬플 때 노래를 듣지</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
