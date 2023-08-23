
import useModal from '../../hook/useModal';
import ModalBackgound from '../../UI/ModalBackground';

export interface ConfirmModalProps {
  title?: string;
  message?: string;
  cancelText?: string;
  confirmText?: string;
  onClick: () => void;
}

const ConfirmModal = ({
  title,
  cancelText = '취소',
  confirmText = '확인',
  onClick,
}: ConfirmModalProps) => {
  const { hideModal } = useModal();

  const onClose = () => {
    hideModal();
  };

  // const onConfirm = () => {
  //   console.log('확인쓰');
  // };

  return (
    <ModalBackgound onClose={onClose}>
      <div className="modal-box">
        <div>{title}</div>
        <div>
          <button onClick={onClick}>{cancelText}</button>
          <button onClick={onClick}>{confirmText}</button>
        </div>
      </div>
    </ModalBackgound>
  );
};

export default ConfirmModal;
