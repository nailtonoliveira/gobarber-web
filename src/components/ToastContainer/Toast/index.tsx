import React, { useEffect } from 'react';

import {
  FiAlertCircle,
  FiXCircle,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../context/toast';

import { Container } from './styles';

interface ToastProps extends ToastMessage {
  style: object;
}

const icons = {
  info: <FiInfo />,
  error: <FiAlertCircle />,
  success: <FiCheckCircle />,
};

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  description,
  style,
}) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return (
    <Container
      key={id}
      type={type}
      hasDescription={!!description}
      style={style}
    >
      {icons[type || 'info']}

      <div>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
