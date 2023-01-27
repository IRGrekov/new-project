import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('page10', tpl);

export default (props = {}) => {
  return Handlebars.compile(tpl)(props);
}
