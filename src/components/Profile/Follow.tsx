const Follow = () => {
  return (
    <div>
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
