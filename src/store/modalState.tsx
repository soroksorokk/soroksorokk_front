import { atom } from 'recoil';
import { MODAL_TYPES } from '../components/Modal/GlobalModal';
import { AlertModalProps } from '../components/Modal/AlertModal';
import { ConfirmModalProps } from '../components/Modal/ConfirmModal';
import { SignUpModalProps } from '../components/Modal/SignUpModal';
import { LoginModalProps } from '../components/Modal/LoginModal';
import { MobileMenuModalProps } from '../components/Modal/MobileMenuModal';

export interface ConfirmModalType {
  modalType: typeof MODAL_TYPES.ConfirmModal;
  modalProps: ConfirmModalProps;
}

export interface AlertModalType {
  modalType: typeof MODAL_TYPES.AlertModal;
  modalProps: AlertModalProps;
}

export interface LoginModalType {
  modalType: typeof MODAL_TYPES.LoginModal;
  modalProps: LoginModalProps;
}

export interface SingUpModalType {
  modalType: typeof MODAL_TYPES.SignUpModal;
  modalProps: SignUpModalProps;
}

export interface MobileMenuModalType {
  modaltype: typeof MODAL_TYPES.MobileMenuModal;
  modalProps: MobileMenuModalProps;
}

export type ModalType =
  | ConfirmModalType
  | AlertModalType
  | SingUpModalType
  | LoginModalType;

export const modalState = atom<ModalType | null>({
  key: 'modalState',
  default: null,
});
