const { test, expect } = require("@playwright/test");
const user = require("../user.js");

test.beforeEach(async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in",);
  await page.screenshot({ path: "screenshot1.png", fullPage: true});
  await page.getByPlaceholder("Email").fill(user.validEmail);
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe("Netology.ru login", () => {
  test("valid login", async ({ page }) => {

    // Input valid password at Вход в личный кабинет 
    await page.getByPlaceholder("Пароль").fill(user.validPassword);

    // Clic Войти
    await page.getByTestId("login-submit-btn").click();

    // The profile page should opened
    await expect(page).toHaveURL("https://netology.ru/profile");
    await expect(
      page.getByRole("heading", { name: "Мои курсы и профессии" })
    ).toBeVisible();
    await page.screenshot({ path: "screenshot2.png", fullPage: true});
  })

    test("invalid password", async ({ page }) => {
      // Неверный пароль
      await page.getByPlaceholder("Пароль").fill(user.invalidPassword);
      await page.getByTestId("login-submit-btn").click();

      await expect (page.getByTestId("login-error-hint")).toBeVisible();
      await page.screenshot({ path: "screenshot3.png", fullPage: true});
    })
 
});