import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../demo/Block';
import './style.scss';
import { renderDom } from '../../demo/renderDom';
console.log(Block)
Handlebars.registerPartial('loginPage', tpl);

// export default (props = {}) => {
// 	return Handlebars.compile(tpl)(props);
// }
// interface ProfilePageProps {
// }

export class ProfilePage extends Block<ProfilePageProps> {


	render() {
		const {
		} = this.props;
		// language=hbs
		return `
		<div class="login">
		<div class="login__wrapper">
			<div class="login__item">
				{{> title text_title='Вход'}}
				<form id="loginData">
					{{> inputform id='inputform1_page1' name='login' id='login' label='Логин' }}
					{{> inputform id='inputform2_page1' name='password' typetext='password' label='Пароль'}}	
	
					<div class="login__item">
						{{> button id='authButton' type="submit" style_btn='someBtn' value='Войти' }}
						{{>text__transition href="#page2" text='Регистрация'}}
					</div>
				</form>
			</div>
		</div>
	</div>
    `;
	}
}
const authPage = new ProfilePage();
renderDom('#app', authPage);


