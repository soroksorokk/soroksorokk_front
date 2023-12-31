import { useRef, useState } from 'react';
import { ReactComponent as Picture } from '../../assets/picture-icon.svg';
import { CategoryEmoji, EditorDataType, feelDataType } from '../../type/type';
import Emoji from './Emoji';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Button from '../../UI/Button';
import { useNavigate } from 'react-router-dom';
import useModal from '../../hook/useModal';
import { useMutation } from '@tanstack/react-query';
import { onSubmitNewPost } from '../../api/reactQueryApis';

function TextEditor() {
  const dummyData = [
    { feel_id: 'HAPPY', feel: CategoryEmoji.HAPPY, desc: '행복' },
    { feel_id: 'SAD', feel: CategoryEmoji.SAD, desc: '슬픔' },
    { feel_id: 'CALM', feel: CategoryEmoji.CALM, desc: '평온' },
    { feel_id: 'EXCITED', feel: CategoryEmoji.EXCITED, desc: '신남' },
    {
      feel_id: 'MOVED',
      feel: CategoryEmoji.MOVED,
      desc: '감동',
      isActive: false,
    },
    {
      feel_id: 'ANGRY',
      feel: CategoryEmoji.ANGRY,
      desc: '화남',
      isActive: false,
    },
  ];
  const [selectEmoji, setSelectEmoji] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [backspaceCount, setBackspaceCount] = useState(0);
  const [editorData, setEditorData] = useState<EditorDataType>({
    image: null,
    content: '',
    artist: '',
    mood: '',
    music: '',
    title: '',
    tags: [],
  });

  const { image, artist, music, title, tags, mood, content } = editorData;
  const fileRef = useRef<HTMLInputElement>(null);
  const tagRefs = useRef<Array<HTMLInputElement | null>>([]);
  const editorRef = useRef<Editor>(null);
  const navigate = useNavigate();
  const { showModal, hideModal } = useModal();

  const newPostMutation = useMutation(onSubmitNewPost, {
    onSuccess: (res) => {
      console.log('성공');
      console.log('res', res);
      navigate('/');
    },
    onError: (err) => {
      console.log('err', err);
    },
  });
  const newPostSubmitHandler = (data: EditorDataType, e: React.FormEvent) => {
    e.preventDefault();

    if (artist && music && title && mood && content) {
      newPostMutation.mutate(data);
    } else {
      if (!artist) setSelectInput('artist');
      else if (!music) setSelectInput('music');
      else if (!title) setSelectInput('title');
      else if (!mood) setSelectInput('mood');
      else if (!content) setSelectInput('content');
    }
  };

  const showConfirmModal = () => {
    showModal({
      modalType: 'ConfirmModal',
      modalProps: {
        title: '작성 중인 글이 있습니다',
        cancelText: '임시저장 후 종료',
        confirmText: '포스팅 종료',
        onCancelClick: () => {
          // 임시 저장하는 함수 추가 후 모달 종료
          // 임시 저장 api 완성되면 추가해놓을게용
          hideModal();
          navigate('/');
        },
        onConfirmClick: () => navigate('/'),
      },
    });
  };

  const handleUploadFile = () => {
    const fileImg = fileRef?.current?.files?.[0];

    if (fileImg) {
      const reader = new FileReader();
      reader.readAsDataURL(fileImg);
      reader.onloadend = () => {
        setEditorData({ ...editorData, image: reader.result as string });
      };
    }
  };

  const handleDeleteFile = () => {
    if (image) {
      if (window.confirm('이미지를 삭제 하시겠습니까?')) {
        setEditorData({ ...editorData, image: undefined });
        return;
      }
    }
  };

  // 기분 이모지 선택 함수
  const handleSelectEmoji = (id: string) => {
    setSelectEmoji(id);
    setEditorData((prev) => ({ ...prev, mood: id }));
  };

  // onChange 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditorData({ ...editorData, [name]: value });
  };

  // editor에 있는 텍스트 가져오는 함수
  const handleEditor = () => {
    const html = editorRef.current?.getInstance().getHTML();

    if (html) {
      setEditorData({ ...editorData, content: html });
    }
  };

  // 태그 입력하는 함수
  const handleEnterTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // 엔터키나 스페이스바를 눌렀을 때의 기본 동작(줄바꿈, 스페이스 입력)을 방지함

      const value = e.currentTarget.value;

      if (value && tags.length < 3) {
        // 현재 tags 인풋에 값이 있고, tags 길이가 3 미만이면
        // 현재 tags 인풋에 있는 값을 기존의 tags 배열에 더해 새로운 상태를 리턴함
        setEditorData((prev) => {
          return { ...prev, tags: [...prev.tags, value] };
        });
        e.currentTarget.value = '';
        // 그 후 tags 인풋을 빈 값으로 만들어줌
        return;
      }
      setBackspaceCount(0);
      // 엔터나 스페이스바를 누르면 백스페이스카운트를 0으로 초기화
      // 왜냐하면 엔터나 스페이스바를 누르면 인풋에서 백스페이스를 눌렀는지 아닌지 감지할 필요가 없기 때문에 초기화
    } else if (e.key === 'Backspace') {
      const currentInputValue = e.currentTarget.value;
      if (currentInputValue === '' && e.currentTarget.selectionStart === 0) {
        // 현재 tags 인풋의 값이 빈 값이고 커서가 맨 앞에 있는 경우
        if (backspaceCount > 0) {
          setEditorData((prev) => {
            const newTags = [...prev.tags];
            newTags.pop();
            return { ...prev, tags: newTags };
          });
          setBackspaceCount(0);
          // 삭제 후 backspaceCount를 0으로 초기화
        } else {
          setBackspaceCount((prev) => prev + 1);
          // 현재 tags 인풋이 빈 값이고 커서가 맨 앞에 있는 경우인데
          // backspaceCount가 0보다 크지 않다면(백스페이스를 이전에 누른 적이 없으면)
          // 백스페이스를 한 번 누를 시 backspaceCount에 1이 추가됨(backspaceCount = 1)
          // 이 상태에서 백스페이스를 한 번 더 누르면 0보다 크니까 마지막 태그가 삭제됨
        }
      } else {
        setBackspaceCount(0);
        // 현재 tags의 인풋이 빈 값이 아니고 커서가 맨 앞에 있지 않은 경우
        // 즉, 인풋에 내용이 입력되어있고 커서가 끝에 있거나 가운데 있을 때
        // 인풋 안의 내용을 지우려 백스페이스를 누를 때는 backspaceCount가 0으로 초기화됨
        // 그래야지 마지막 태그를 삭제하지 않으면서 인풋안의 내용을 지울 수 있음
      }
    }
  };

  // 클릭해서 태그 삭제하는 함수
  const handleTagsRemoveClick = (id: any) => {
    setEditorData((prev) => {
      const newTags = prev.tags.filter((tag) => {
        return tag !== id;
      });
      return { ...prev, tags: newTags };
    });
  };

  // 작성 취소
  const handleCancelNewPost = () => {
    showConfirmModal();
  };

  return (
    <div className="h-pull w-full p-5">
      <section className="flex items-stretch gap-10 ">
        <div className="item-center flex min-w-[30%] flex-col justify-center">
          <div className="relative flex h-full flex-col items-center  justify-center overflow-hidden rounded-2xl bg-beige">
            <label
              onChange={handleUploadFile}
              className="flex h-full w-full cursor-pointer flex-col items-center justify-center"
            >
              <Picture />
              <span className="mt-2">사진을 추가 하세요</span>
              {image && <img src={image} className="write-img" />}
              <input
                className="hidden"
                type="file"
                accept="image/*"
                name="image"
                ref={fileRef}
              />
            </label>
          </div>

          <span
            className="mt-4 cursor-pointer text-center text-xs text-red"
            onClick={handleDeleteFile}
          >
            이미지 삭제
          </span>
        </div>
        <div className="grow">
          <input
            placeholder="아티스트이름"
            name="artist"
            value={artist}
            className={`write-input ${
              selectInput === 'artist' && !artist ? 'border-red' : 'write-input'
            }`}
            onChange={handleChange}
          />
          {selectInput === 'artist' && !artist ? (
            <p className="text-xs text-red">아티스트 이름을 작성해주세요</p>
          ) : (
            ''
          )}
          <input
            placeholder="곡이름"
            name="music"
            value={music}
            className={`write-input ${
              selectInput === 'music' && !music ? 'border-red' : 'write-input'
            }`}
            onChange={handleChange}
          />

          {selectInput === 'music' && !music ? (
            <p className="text-xs text-red">곡명을 작성해주세요</p>
          ) : (
            ''
          )}
          <div className="mt-6">
            <h4>곡을 들을 때 당신의 기분은?</h4>
            <ul className="my-3 flex gap-3">
              {dummyData.map((emoji: feelDataType) => {
                return (
                  <Emoji
                    key={emoji.feel_id}
                    onClick={handleSelectEmoji}
                    emoji={emoji}
                    selectValue={selectEmoji}
                  />
                );
              })}
            </ul>
            {selectInput === 'mood' && !mood ? (
              <p className="text-xs text-red">기분을 선택해주세요</p>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <input
          name="title"
          value={title}
          className={`w-full  text-2xl font-bold dark:placeholder:bg-darkModeBG3 ${
            selectInput === 'title' && !title ? 'border-red' : ''
          }`}
          placeholder="제목을 입력하세요."
          onChange={handleChange}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            e.key === 'Enter' && tagRefs.current[0]?.focus();
          }}
          maxLength={48}
        />
        {selectInput === 'title' && !title ? (
          <p className="text-xs text-red">제목을 입력해주세요</p>
        ) : (
          ''
        )}

        <div className="mt-6 flex gap-2">
          {tags.length > 0 && tags.length < 4
            ? tags.map((tag) => (
                <div
                  className="tag-input"
                  key={tag}
                  onClick={() => handleTagsRemoveClick(tag)}
                >
                  {tag}
                </div>
              ))
            : ''}
          <input
            className="tag-input"
            placeholder="#태그입력"
            name="tags"
            maxLength={4}
            onKeyUp={handleEnterTags}
          />
        </div>
      </section>

      <section className="mt-4 ">
        <Editor
          initialValue=" "
          placeholder="당신의 아티스트와 곡을 마음껏 자랑해주세요!"
          previewStyle="vertical"
          height="600px"
          initialEditType={window.innerWidth === 400 ? 'wysiwyg' : 'markdown'}
          useCommandShortcut={true}
          ref={editorRef}
          toolbarItems={[
            ['heading', 'bold', 'italic', 'strike'],
            ['ul', 'ol', 'task'],
            ['link'],
          ]}
          onChange={handleEditor}
        />
        {selectInput === 'content' && !content ? (
          <p className="text-xs text-red">내용을 작성해주세요</p>
        ) : (
          ''
        )}

        <div className="mt-2 flex w-full justify-between py-2">
          <Button
            onClick={handleCancelNewPost}
            type="button"
            className="btn-beige w-full max-w-[11.25rem]"
          >
            작성취소
          </Button>
          <div className="flex w-[40%]">
            <Button
              type="button"
              className="btn-white color-purple w-full max-w-[11.25rem]"
            >
              임시저장
            </Button>
            <Button
              type="submit"
              disabled={newPostMutation.isLoading}
              onClick={(e: React.FormEvent) =>
                newPostSubmitHandler(editorData, e)
              }
              className={`w-full max-w-[11.25rem] ${
                newPostMutation.isLoading ? 'btn-beige' : 'btn-purple'
              }`}
            >
              {newPostMutation.isLoading ? '저장 중' : '저장하기'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextEditor;
