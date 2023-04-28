import React from 'react';
import Button, { ButtonType } from '../../atoms/button/Button';
import Overlay from '../../atoms/overlay/Overlay';
import Typography from '../../atoms/typography/Typography';
import Icon from '../../atoms/icon/Icon';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonType?: ButtonType;
  secondaryButtonType?: ButtonType;
  primaryButtonDisabled?: boolean;
  secondaryButtonDisabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonType = 'button',
  secondaryButtonType = 'button',
  primaryButtonDisabled = false,
  secondaryButtonDisabled = false,
}) => {
  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    if (!primaryButtonDisabled && !secondaryButtonDisabled) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClose}>
      <div className="modal">
        <div className="modal-header">
          <Typography variant="h2">{title}</Typography>
          <Button onClick={handleClose} className="close-button" type="button">
            <Icon name="close" />
          </Button>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          {secondaryButtonText && (
            <Button onClick={onClose} disabled={secondaryButtonDisabled} type={secondaryButtonType}>
              {secondaryButtonText}
            </Button>
          )}
          {primaryButtonText && (
            <Button onClick={handleClose} disabled={primaryButtonDisabled} type={primaryButtonType}>
              {primaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </Overlay>
  );
};

export default Modal;
