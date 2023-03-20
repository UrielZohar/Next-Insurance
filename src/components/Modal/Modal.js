import { cloneElement, Children, useContext } from 'react';
import { Modal as AntdModal } from 'antd';
import DevieContext from '../../Context/DeviceContext';

const Modal = (props) => {
  const { isMobile } = useContext(DevieContext);
  return (
    <AntdModal {...props} maskStyle={{backgroundColor: '#0a0909cf'}} width={isMobile ? undefined : '1250px'}>
      <div>
        {
          Children.map(props.children, child =>
            cloneElement(child, {onCancel: props.onCancel})
            )
          }
      </div>
    </AntdModal>
  );
}

export default Modal;