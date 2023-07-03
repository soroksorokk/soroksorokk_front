import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Picture } from '../../assets/picture-icon.svg';
import { CategoryEmoji, EditorDataType, feelDataType } from '../../type/type';
import Emoji from './Emoji';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Button from '../../UI/Button';

function TextEditor() {
  const dummyData = [
    { feel_id: 1, feel: CategoryEmoji.happy, desc: '행복' },
    { feel_id: 2, feel: CategoryEmoji.sad, desc: '슬픔' },
    { feel_id: 3, feel: CategoryEmoji.calm, desc: '평온' },
    { feel_id: 4, feel: CategoryEmoji.exciting, desc: '신남' },
    {
      feel_id: 5,
      feel: CategoryEmoji.depressed,
      desc: '감동',
      isActive: false,
    },
    { feel_id: 6, feel: CategoryEmoji.angry, desc: '화남', isActive: false },
  ];
  const [selectValue, setSelctValue] = useState(1);
  const [editorData, setEditorData] = useState<EditorDataType>({
    file: null,
    artist: '',
    song: '',
    feel: [],
    title: '',
    tags: ['', '', ''],
    content: ' ',
  });
  const { file, artist, song, title, tags, content } = editorData;
  const fileRef = useRef<HTMLInputElement>(null);
  const tagRefs = useRef<Array<HTMLInputElement | null>>([]);
  const editorRef = useRef<Editor>(null);

  const handleUploadFile = () => {
    const fileImg = fileRef?.current?.files?.[0];

    if (fileImg) {
      const reader = new FileReader();
      reader.readAsDataURL(fileImg);
      reader.onloadend = () => {
        setEditorData({ ...editorData, file: reader.result as string });
      };
    }
  };

  const handleDeleteFile = () => {
    if (file) {
      if (window.confirm('이미지를 삭제 하시겠습니까?')) {
        setEditorData({ ...editorData, file: undefined });
        return;
      }
    }
  };

  const handleSelect = (id: number) => {
    setSelctValue(id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditorData({ ...editorData, [name]: value });
  };

  const handleTagOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const { value } = e.target;
    const newTags = [...tags];
    newTags[idx] = value;
    setEditorData({ ...editorData, tags: newTags });
  };

  const getPlaceholder = (idx: number) => {
    if (idx === 0) {
      return '#태그입력';
    }
    if (idx === 1) {
      return '#최대3개';
    }
    if (idx === 2) {
      return '#4글자';
    }
    return '';
  };

  const handleEditor = () => {
    const html = editorRef.current?.getInstance().insertText();

    setEditorData({ ...editorData, content: html });
  };

  const EnterTags = (
    event: React.KeyboardEvent<HTMLInputElement>,
    idxs: number,
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      focusNextTag(idxs);
    }
  };

  const focusNextTag = (idx: number) => {
    const nextIndex = idx + 1;
    if (nextIndex < tags.length) {
      tagRefs.current[nextIndex]?.focus();
    }
    if (nextIndex === tags.length) {
      editorRef.current?.getInstance().focus();
      editorRef.current?.getInstance().reset();

      return;
    }
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
              {file && <img src={file} className="write-img" />}
              <input
                className="hidden"
                type="file"
                accept="image/*"
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
            className="write-input"
            onChange={handleChange}
          />
          <input
            placeholder="곡이름"
            name="song"
            value={song}
            className="write-input"
            onChange={handleChange}
          />
          <div className="mt-6">
            <h4>곡을 들을 때 당신의 기분은?</h4>
            <ul className="my-3 flex gap-3">
              {dummyData.map((emoji: feelDataType, idx: number) => {
                return (
                  <Emoji
                    key={idx}
                    onClick={handleSelect}
                    emoji={emoji}
                    selectValue={selectValue}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <input
          name="title"
          value={title}
          className="w-full  text-2xl font-bold"
          placeholder="제목을 입력하세요."
          onChange={handleChange}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            e.key === 'Enter' && tagRefs.current[0]?.focus();
          }}
          maxLength={48}
        />
        <form className="mt-6 flex gap-2">
          {tags.map((tag, idx) => (
            <input
              key={idx}
              className="tag-input"
              placeholder={getPlaceholder(idx)}
              value={tag}
              name={tag}
              ref={(el) => (tagRefs.current[idx] = el)}
              onChange={(e) => handleTagOnChange(e, idx)}
              onKeyUp={(e) => EnterTags(e, idx)}
              maxLength={4}
            />
          ))}
        </form>
      </section>

      <section className="mt-4 ">
        {/* {editorRef && ( */}
        <Editor
          initialValue=" "
          placeholder="당신의 아티스트와 곡을 마음껏 자랑해주세요!"
          previewStyle="vertical"
          height="600px"
          initialEditType={window.innerWidth === 400 ? 'markdown' : 'wysiwyg'}
          useCommandShortcut={true}
          ref={editorRef}
          toolbarItems={[
            ['heading', 'bold', 'italic', 'strike'],
            ['ul', 'ol', 'task'],
            ['link'],
          ]}
          onChange={handleEditor}
        />
        {/* )} */}
        <div className="mt-2 flex w-full justify-between py-2">
          <Button className="btn-beige max-w-[11.25rem]">작성취소</Button>
          <div className="flex ">
            <Button className="btn-white color-purple max-w-[18.75rem]">
              임시저장
            </Button>
            <Button className="btn-purple max-w-[11.25rem]" onClick={() => {}}>
              저장하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextEditor;
