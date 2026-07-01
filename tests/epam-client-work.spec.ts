import { test, expect } from '@playwright/test';

test.describe('EPAM site navigation', () => {
  test('Navigate Services -> Explore Our Client Work and verify Client Work page', async ({ page }) => {
    // 1. Navigate to https://www.epam.com/
    await page.goto('/');

    // 2. Select "Services" from the header menu
    await page.getByRole('banner').getByRole('link', { name: 'Services' }).click();

    // 3. Click the "Explore Our Client Work" link.
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    // 4. Verify that the "Client Work" text is visible on the page.
    await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
  });
});
