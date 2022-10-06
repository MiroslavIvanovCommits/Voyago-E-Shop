import { Browser, By, Key } from '@progress/kendo-e2e';

let browser: Browser;

beforeAll(async () => {
	browser = new Browser();
});

beforeEach(async () => {
	await browser.navigateTo('http://localhost:4200/register');
});

afterAll(async () => {
	await browser.close();
});

const namesInput = By.css('input[type="text"]');
const emailInput = By.css('input[type="email"]');
const passwordInput = By.css('input[type="password"]');
const errorFormText = By.css('.k-form-error');
const registerButton = By.css('#register-btn');

test('should display error message on invalid names', async () => {
	const input = await browser.find(namesInput);
	await input.sendKeys('invalidNames');

	const error = await browser.find(errorFormText);
	expect(await error.getText()).toEqual('Error: First and last names are required');
});

test('should display error message on invalid email', async () => {
	const input = await browser.find(emailInput);
	await input.sendKeys('invalidEmail');

	const error = await browser.find(errorFormText);
	expect(await error.getText()).toEqual('Error: Please enter a valid email');
});

test('should display error message on invalid password', async () => {
	await browser.click(passwordInput);
	await browser.sendKey('invalidPassword');

	const error = await browser.find(errorFormText);
	expect(await error.getText()).toEqual('Error: Please enter a valid password');
});

test('should not display error on valid names, email and password', async () => {
	const inputForNames = await browser.find(namesInput);
	const inputForEmail = await browser.find(emailInput);
	const inputForPassword = await browser.find(passwordInput);
	await inputForNames.sendKeys('Kaloyan Dimov');
	await inputForEmail.sendKeys('kaloyan68@abv.bg');
	await inputForPassword.sendKeys('1234aaaA');
	expect(await browser.isNotVisible(errorFormText)).toBe(true);
});
