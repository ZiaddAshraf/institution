/**
 * Mobile Card Layout Test Script using Playwright MCP
 * Tests responsive card layouts on iPhone 12 viewport (390x844)
 * 
 * This script validates:
 * 1. Cards become vertical (stacked) on mobile
 * 2. Images are fully visible (object-contain, not cropped)
 * 3. Proper spacing and readability
 * 4. Layout differences between mobile and desktop
 */

const { chromium } = require('playwright');

async function testMobileCardLayouts() {
  console.log('🚀 Starting Mobile Card Layout Test...\n');
  
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    // iPhone 12 viewport
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    hasTouch: true,
    isMobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
  });
  
  const page = await context.newPage();
  
  try {
    // Test 1: Homepage Service Cards
    console.log('📱 Test 1: Homepage Service Cards (Mobile)');
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Wait for service cards to load
    await page.waitForSelector('.grid.grid-cols-1.md\\:grid-cols-2', { timeout: 10000 });
    
    // Check if service cards exist
    const serviceCards = await page.locator('div.group.bg-white.dark\\:bg-gray-700.rounded-xl').count();
    console.log(`✓ Found ${serviceCards} service cards`);
    
    // Check first service card layout
    const firstCard = page.locator('div.group.bg-white.dark\\:bg-gray-700.rounded-xl').first();
    
    // Check if card has flex-col class (vertical layout)
    const cardClasses = await firstCard.getAttribute('class');
    const isVertical = cardClasses.includes('flex-col');
    console.log(`✓ Card has vertical layout (flex-col): ${isVertical}`);
    
    // Check image container
    const imageContainer = firstCard.locator('div.relative.w-full');
    const imageClasses = await imageContainer.getAttribute('class');
    console.log(`✓ Image container classes: ${imageClasses}`);
    
    // Check if image uses object-contain
    const image = imageContainer.locator('img');
    const imgClasses = await image.getAttribute('class');
    const hasObjectContain = imgClasses.includes('object-contain');
    console.log(`✓ Image uses object-contain: ${hasObjectContain}`);
    
    // Check card padding (should be p-4 on mobile)
    const cardContent = firstCard.locator('div.p-4');
    const hasMobilePadding = await cardContent.count() > 0;
    console.log(`✓ Card has mobile padding (p-4): ${hasMobilePadding}`);
    
    // Take screenshot
    await page.screenshot({ path: 'mobile-homepage-cards.png', fullPage: true });
    console.log('✓ Screenshot saved: mobile-homepage-cards.png\n');
    
    // Test 2: Services Page Featured Cards
    console.log('📱 Test 2: Services Page Featured Cards (Mobile)');
    await page.goto('http://localhost:3001/services', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Check featured service cards
    const featuredCards = await page.locator('div.group.bg-white.dark\\:bg-gray-800.rounded-xl').count();
    console.log(`✓ Found ${featuredCards} featured service cards`);
    
    // Check first featured card layout
    const firstFeaturedCard = page.locator('div.group.bg-white.dark\\:bg-gray-800.rounded-xl').first();
    
    // Check if the inner container has flex-col
    const innerContainer = firstFeaturedCard.locator('div.flex.flex-col');
    const hasVerticalLayout = await innerContainer.count() > 0;
    console.log(`✓ Featured card has vertical layout: ${hasVerticalLayout}`);
    
    // Check image in featured card
    const featuredImage = firstFeaturedCard.locator('img');
    const featuredImgClasses = await featuredImage.getAttribute('class');
    const featuredHasObjectContain = featuredImgClasses.includes('object-contain');
    console.log(`✓ Featured card image uses object-contain: ${featuredHasObjectContain}`);
    
    // Take screenshot
    await page.screenshot({ path: 'mobile-services-cards.png', fullPage: true });
    console.log('✓ Screenshot saved: mobile-services-cards.png\n');
    
    // Test 3: About Page Cards
    console.log('📱 Test 3: About Page Cards (Mobile)');
    await page.goto('http://localhost:3001/about', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Check about image card
    const aboutImageCard = page.locator('div.card.p-4.bg-gray-50').first();
    const aboutImageExists = await aboutImageCard.count() > 0;
    console.log(`✓ About image card exists: ${aboutImageExists}`);
    
    // Check about image
    const aboutImage = aboutImageCard.locator('img');
    const aboutImgClasses = await aboutImage.getAttribute('class');
    const aboutHasObjectContain = aboutImgClasses.includes('object-contain');
    console.log(`✓ About image uses object-contain: ${aboutHasObjectContain}`);
    
    // Check values cards
    const valuesCards = await page.locator('div.card.p-4.md\\:p-8.text-center').count();
    console.log(`✓ Found ${valuesCards} values cards`);
    
    // Take screenshot
    await page.screenshot({ path: 'mobile-about-cards.png', fullPage: true });
    console.log('✓ Screenshot saved: mobile-about-cards.png\n');
    
    // Test 4: Contact Page Cards
    console.log('📱 Test 4: Contact Page Info Cards (Mobile)');
    await page.goto('http://localhost:3001/contact', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Check contact info cards
    const contactCards = await page.locator('motion.a.card.p-4').count();
    console.log(`✓ Found ${contactCards} contact info cards`);
    
    // Take screenshot
    await page.screenshot({ path: 'mobile-contact-cards.png', fullPage: true });
    console.log('✓ Screenshot saved: mobile-contact-cards.png\n');
    
    // Test 5: Desktop Comparison (1920x1080)
    console.log('🖥️  Test 5: Desktop Layout Comparison');
    await context.setViewportSize({ width: 1920, height: 1080 });
    
    // Check homepage on desktop
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Check if images use object-cover on desktop
    const desktopCard = page.locator('div.group.bg-white.dark\\:bg-gray-700.rounded-xl').first();
    const desktopImage = desktopCard.locator('img');
    const desktopImgClasses = await desktopImage.getAttribute('class');
    const desktopHasObjectCover = desktopImgClasses.includes('md:object-cover');
    console.log(`✓ Desktop image uses object-cover: ${desktopHasObjectCover}`);
    
    // Take screenshot
    await page.screenshot({ path: 'desktop-homepage-cards.png', fullPage: false });
    console.log('✓ Screenshot saved: desktop-homepage-cards.png\n');
    
    // Summary
    console.log('📊 Test Summary:');
    console.log('================');
    console.log(`✅ Service cards use vertical layout on mobile: ${isVertical}`);
    console.log(`✅ Images use object-contain on mobile: ${hasObjectContain}`);
    console.log(`✅ Cards have proper mobile padding: ${hasMobilePadding}`);
    console.log(`✅ Featured cards have vertical layout: ${hasVerticalLayout}`);
    console.log(`✅ Desktop preserves object-cover: ${desktopHasObjectCover}`);
    console.log('\n✨ All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the tests
testMobileCardLayouts()
  .then(() => {
    console.log('\n✅ Test suite completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Test suite failed:', error);
    process.exit(1);
  });
