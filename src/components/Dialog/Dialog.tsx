import { FC, ReactNode } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ModalFooter } from 'react-bootstrap';
import classNames from 'classnames';

import { useWindowResize } from '../Hooks/useWindowResize';
import classes from './Dialog.module.scss';
import './Dialog.overrides.scss';

export interface DialogProps {
  open: boolean;
  onClose: VoidFunction;
  actions?: ReactNode;
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  content: string | ReactNode;
  dialogClass?: string;
  contentClass?: string;
  titleClass?: string;
  maxWidth?: string;
  mbTitle?: number;
}

export const Dialog: FC<DialogProps> = ({
  open,
  onClose,
  actions,
  title,
  subtitle,
  content,
  dialogClass,
  contentClass,
  titleClass,
}) => {
  const windowSize = useWindowResize();

  return (
    <Modal
      className={classNames('modal-xl', classes.ModalDialog, dialogClass, { Black: windowSize.underLg })}
      show={open}
      onHide={onClose}
      fullscreen={windowSize.underMd || undefined}
      dialogClassName={classNames({ 'modal-fullscreen': windowSize.underLg })}
    >
      <Modal.Header className={classes.ModalHeader} closeButton={!actions}>
        {title ? (
          <div className={classes.Title}>
            <div className={classNames(classes.DialogTitle, titleClass)}>{title}</div>
          </div>
        ) : null}
        {subtitle ? <div className={classes.Subtitle}>{subtitle}</div> : null}
      </Modal.Header>
      <Modal.Body className={classNames(classes.ModalBody, contentClass)}>{content}</Modal.Body>
      {actions && <ModalFooter>{actions}</ModalFooter>}
    </Modal>
  );
};
