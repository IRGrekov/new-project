import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../demo/Block';
import './style.scss';
import { renderDom } from '../../demo/renderDom';

Handlebars.registerPartial('button', tpl);


interface IButtonProps {
  label: string;
  buttonId: string;
  onClick: () => void;
}

type TButton = Omit<IButtonProps, 'onClick'> & {
  events: {
    click: Function,
  },
};

export class Button extends Block<TButton> {

  render() {

    // language=hbs
    return `
    <button id="{{id}}" type="{{type}}" class="login__btn {{style_btn}}">{{value}} </button>
    `;
  }
}

const TButtonRender = new Button();
renderDom('#app1', TButtonRender);
