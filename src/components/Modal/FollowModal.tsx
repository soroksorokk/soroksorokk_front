import useModal from '../../hook/useModal';
import ModalBackground from '../../UI/ModalBackground';
import Follow from '../Profile/Follow';

export interface FollowModalProps {
  title?: string;
}
const FollowModal = ({ title }: FollowModalProps) => {
  const { hideModal } = useModal();

  const onClose = () => {
    hideModal();
  };
  return (
    <ModalBackground onClose={onClose}>
      <div className="modal-follow-box" onClick={(e) => e.stopPropagation()}>
        <header className="m-4 flex flex-row justify-between">
          <h1 className="text-2xl font-bold">{title}</h1>
          <img
            src="/assets/closeBtn.svg"
            width={23}
            height={23}
            onClick={onClose}
            className="cursor-pointer"
          />
        </header>
        <Follow />
      </div>
    </ModalBackground>
  );
};

export default FollowModal;
