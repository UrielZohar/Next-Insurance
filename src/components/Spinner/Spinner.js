import { Spin } from 'antd';
import './Spinner.scss';

const Spinner = () => 
  <div className='spinner-container'>
    <div className='spinner'>
      <Spin size="large" />
    </div>
  </div>

export default Spinner;