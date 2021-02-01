describe("Google", () => {
  beforeAll(async () => {
    await page.goto("https://www.google.com/");
  });

  afterAll(async () => {
    await page.close();
  });

  it('should display "Google" text on page', async () => {
    await expect(page).toHaveText("Google");
  });
});
