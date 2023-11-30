import { EmojiType } from '../../type/type';

const Emoji = ({ emoji, onClick, selectValue }: EmojiType) => {
  return (
    <div>
      <li
        onClick={() => {
          onClick(emoji.feel_id);
        }}
        key={emoji.feel_id}
        className={[
          'flex cursor-pointer flex-col transition-all  delay-300 ease-in-out hover:text-purple hover:opacity-100 ',
          `${
            selectValue === emoji.feel_id
              ? 'font-bold text-purple opacity-100'
              : 'text-gray  opacity-50'
          } `,
        ].join(' ')}
      >
        <span className="text-2xl">{emoji.feel}</span>
        <span className="mt-1 text-xs">{emoji.desc}</span>
      </li>
    </div>
  );
};

export default Emoji;
