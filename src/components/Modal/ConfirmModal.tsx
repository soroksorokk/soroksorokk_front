import useModal from '../../hook/useModal';
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
        <div>{title}</div>
        <div>
          <button onClick={onCancelClick}>{cancelText}</button>
          <button onClick={onConfirmClick}>{confirmText}</button>
        </div>
      </div>
    </ModalBackground>
  );
};

export default ConfirmModal;
