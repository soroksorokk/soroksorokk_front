import Button from '../../UI/Button';

type PostItemProps = {
  id: number;
  postImg: string;
  postArtist: string;
  postSong: string;
  postDate: number;
  postWriterImg: string;
  postWritId: string;
  postTitle: string;
  postContent: string;
  postTag: string[];
};

const PostItem = ({ ...post }: PostItemProps) => {
  const {
    postImg,
    postArtist,
    postSong,
    postDate,
    postWriterImg,
    postWritId,
    postTitle,
    postContent,
    postTag,
  } = { ...post };
  return (
    <div className="mt-4 p-4">
      <div className="relative flex justify-center ">
        <div className="absolute left-[50%] top-[-3%] z-10 flex translate-x-[-50%] rounded-full bg-white px-2 py-2 shadow-2xl">
          <img className="mr-2" src="/assets/play_icon.svg" />
          {postArtist} - {postSong}
        </div>
        <div className="flex h-[25rem] w-[25rem] items-center justify-center overflow-hidden rounded-2xl">
          <img className="h-full w-full " src={postImg} />
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <img
            className="absolute h-full w-full object-fill"
            src={postWriterImg}
          />
        </div>
        <div className="ml-3 grow text-xs">
          <span>{postDate}</span>
          <p className="font-bold">
            <span className=" text-slate-300">by</span> {postWritId}
          </p>
        </div>
        <Button className="btn-unfollow text-xs">팔로우</Button>
      </div>
      <div className="mt-5">
        <h4 className="post-title">{postTitle}</h4>
        <p className="mt-4">{postContent}</p>
      </div>
      <div className="mt-5">
        {postTag.map((tag, idx) => (
          <Button className="btn-unfollow mr-2 text-xs" key={idx}>
            # {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PostItem;
