/* eslint-disable no-undef */
import { DataTypeDropDown, Main, ResponseDataPreview } from './components';
import SchibstedHeader from '../components/SchibstedHeader';

export default () => {
  customElements.define('schibsted-header', SchibstedHeader);
  customElements.define('schibsted-main', Main);
  customElements.define('schibsted-dropdown', DataTypeDropDown);
  customElements.define('schibsted-responsepreview', ResponseDataPreview);
};
