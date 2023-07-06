import React from 'react';

const Follow = () => {
  return (
    <div className="m-4 h-[26.125rem] w-[26.25rem] rounded-[2.5rem] bg-white p-4">
      <header className="m-4 flex flex-row justify-between">
        <h1 className="text-2xl font-bold">팔로워</h1>
        <button>x</button>
      </header>

      <div className=" my-2 flex flex-row justify-between">
        <div className="flew-row flex">
          <img
            src="/assets/soondoo.jpeg"
            alt="img"
            className="m-2 h-9 w-9 rounded-full"
          />
          <div className="flex flex-col">
            <p
              className=" font-extrabold
        "
            >
              test@naver.com
            </p>
            <p>닉네임</p>
          </div>
        </div>
        <div>
          <button className="btn-follow">팔로우</button>
        </div>
      </div>
      <div className="my-2 flex flex-row justify-between ">
        <div className="flew-row flex">
          <img
            src="/assets/soondoo.jpeg"
            alt="img"
            className="m-2 h-9 w-9 rounded-full"
          />
          <div className="flex flex-col">
            <p
              className=" font-extrabold
        "
            >
              test@naver.com
            </p>
            <p>닉네임</p>
          </div>
        </div>
        <div>
          <button className="btn-follow bg-beige-dark text-purple">
            팔로우
          </button>
        </div>
      </div>
    </div>
  );
};

export default Follow;
