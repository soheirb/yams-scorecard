import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import $ from 'jquery'
global.$ = global.jQuery = $
$.prototype.modal = () => {}

configure({ adapter: new Adapter() })
