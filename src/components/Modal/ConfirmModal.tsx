import useModal from '../../hook/useModal';
import Button from '../../UI/Button';
import ModalBackground from '../../UI/ModalBackground';

export interface ConfirmModalProps {
  title?: string;
  message?: string;
  cancelText?: string;
  confirmText?: string;
  onCancelClick?: () => void;
  onConfirmClick?: () => void;
}

const ConfirmModal = ({
  title,
  cancelText = '취소',
  confirmText = '확인',
  onCancelClick,
  onConfirmClick,
}: ConfirmModalProps) => {
  const { hideModal } = useModal();

  const onClose = () => {
    hideModal();
  };

  return (
    <ModalBackground onClose={onClose}>
      <div className="modal-box">
        <div className="flex flex-col items-center justify-center">
          <h2>{title}</h2>
          <div className="mt-10 flex w-full justify-evenly">
            <Button className="btn-purple px-3" onClick={onCancelClick}>
              {cancelText}
            </Button>
            <Button className="btn-purple px-3" onClick={onConfirmClick}>
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    </ModalBackground>
  );
};

export default ConfirmModal;
