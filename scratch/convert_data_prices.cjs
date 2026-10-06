const fs = require('fs');
const path = require('path');

function convertUsdToInrCourse(usdStr) {
  const num = parseFloat(usdStr.replace(/[^0-9.]/g, ''));
  if (isNaN(num) || num === 0) return 0;
  if (num <= 25) return 1299;
  if (num <= 30) return 1499;
  if (num <= 35) return 1799;
  if (num <= 40) return 1999;
  if (num <= 45) return 2299;
  if (num <= 50) return 2499;
  if (num <= 55) return 2799;
  if (num <= 60) return 2999;
  if (num <= 70) return 3499;
  if (num <= 80) return 3999;
  if (num <= 90) return 4499;
  if (num <= 100) return 4999;
  return Math.round((num * 55) / 100) * 100 - 1;
}

function convertUsdToInrOrig(usdStr, currentInr) {
  const num = parseFloat(usdStr.replace(/[^0-9.]/g, ''));
  if (isNaN(num) || num === 0) return 0;
  if (num <= 35) return 3499;
  if (num <= 50) return 3999;
  if (num <= 60) return 4999;
  if (num <= 70) return 5499;
  if (num <= 80) return 5999;
  if (num <= 90) return 6999;
  if (num <= 100) return 7499;
  if (num <= 120) return 7999;
  return Math.max(currentInr * 2, 7999);
}

// 1. HomeOne.js
let homeOne = fs.readFileSync('src/user/data/HomeOne.js', 'utf8');
homeOne = homeOne.replace(/p:\s*'\$([0-9.]+)'/g, (m, usd) => {
  const inr = convertUsdToInrCourse(usd);
  return `p: '₹${inr.toLocaleString('en-IN')}'`;
});
homeOne = homeOne.replace(/op:\s*'\$([0-9.]+)'/g, (m, usd) => {
  const inr = convertUsdToInrOrig(usd, 2499);
  return `op: '₹${inr.toLocaleString('en-IN')}'`;
});
fs.writeFileSync('src/user/data/HomeOne.js', homeOne);
console.log('Updated HomeOne.js');

// 2. HomeTwo.js
let homeTwo = fs.readFileSync('src/user/data/HomeTwo.js', 'utf8');
// Replace courseBlueprints p: '$XX.XX'
homeTwo = homeTwo.replace(/p:\s*'\$([0-9.]+)'/g, (m, usd) => {
  const inr = convertUsdToInrCourse(usd);
  return `p: '₹${inr.toLocaleString('en-IN')}'`;
});
// Replace homeTwoPricing plans
const homeTwoPricingMap = [
  { match: "price: '$24'", rep: "price: '₹1,499'" },
  { match: "price: '$18'", rep: "price: '₹1,199'" },
  { match: "cycle: 'billed annually ($216/yr)'", rep: "cycle: 'billed annually (₹14,388/yr)'" },
  { match: "price: '$49'", rep: "price: '₹2,999'" },
  { match: "price: '$12'", rep: "price: '₹799'" },
  { match: "price: '$29'", rep: "price: '₹1,899'" },
  { match: "price: '$39'", rep: "price: '₹2,499'" },
  { match: "price: '$42'", rep: "price: '₹2,699'" },
  { match: "price: '$38'", rep: "price: '₹2,399'" },
  { match: "price: '$32'", rep: "price: '₹1,999'" },
  { match: "price: '$45'", rep: "price: '₹2,899'" },
  { match: "price: '$89'", rep: "price: '₹5,499'" },
  { match: "price: '$280'", rep: "price: '₹18,999'" },
  { match: "price: '$799'", rep: "price: '₹49,999'" },
  { match: "price: '$599'", rep: "price: '₹39,999'" },
  { match: "price: '$99'", rep: "price: '₹6,999'" }
];
homeTwoPricingMap.forEach(item => {
  homeTwo = homeTwo.replace(item.match, item.rep);
});
fs.writeFileSync('src/user/data/HomeTwo.js', homeTwo);
console.log('Updated HomeTwo.js');

// 3. CourseOne.js
let courseOne = fs.readFileSync('src/user/data/CourseOne.js', 'utf8');
courseOne = courseOne.replace(/pr:\s*([0-9.]+),\s*opr:\s*([0-9.]+)/g, (m, pr, opr) => {
  const inrPr = convertUsdToInrCourse(pr);
  const inrOpr = convertUsdToInrOrig(opr, inrPr);
  return `pr: ${inrPr}, opr: ${inrOpr}`;
});
// in generator: pr: parseFloat((base.pr + (cycle * 2)).toFixed(2)), opr: parseFloat((base.opr + (cycle * 3)).toFixed(2))
courseOne = courseOne.replace(/base\.pr\s*\+\s*\(cycle\s*\*\s*2\)\.toFixed\(2\)/g, 'base.pr + (cycle * 100)');
courseOne = courseOne.replace(/base\.opr\s*\+\s*\(cycle\s*\*\s*3\)\.toFixed\(2\)/g, 'base.opr + (cycle * 200)');
fs.writeFileSync('src/user/data/CourseOne.js', courseOne);
console.log('Updated CourseOne.js');

// 4. CourseTwo.js
let courseTwo = fs.readFileSync('src/user/data/CourseTwo.js', 'utf8');
courseTwo = courseTwo.replace(/price:\s*([0-9.]+),\s*originalPrice:\s*([0-9.]+)/g, (m, pr, opr) => {
  const inrPr = convertUsdToInrCourse(pr);
  const inrOpr = convertUsdToInrOrig(opr, inrPr);
  return `price: ${inrPr}, originalPrice: ${inrOpr}`;
});
courseTwo = courseTwo.replace(/base\.price\s*\+\s*\(cycle\s*\*\s*2\)\.toFixed\(2\)/g, 'base.price + (cycle * 100)');
courseTwo = courseTwo.replace(/base\.originalPrice\s*\+\s*\(cycle\s*\*\s*3\)\.toFixed\(2\)/g, 'base.originalPrice + (cycle * 200)');
fs.writeFileSync('src/user/data/CourseTwo.js', courseTwo);
console.log('Updated CourseTwo.js');

// 5. CourseThree.js
let courseThree = fs.readFileSync('src/user/data/CourseThree.js', 'utf8');
courseThree = courseThree.replace(/price:\s*([0-9.]+),\s*originalPrice:\s*([0-9.]+)/g, (m, pr, opr) => {
  const inrPr = convertUsdToInrCourse(pr);
  const inrOpr = convertUsdToInrOrig(opr, inrPr);
  return `price: ${inrPr}, originalPrice: ${inrOpr}`;
});
courseThree = courseThree.replace(/base\.price\s*\+\s*\(cycle\s*\*\s*2\)\.toFixed\(2\)/g, 'base.price + (cycle * 100)');
courseThree = courseThree.replace(/base\.originalPrice\s*\+\s*\(cycle\s*\*\s*3\)\.toFixed\(2\)/g, 'base.originalPrice + (cycle * 200)');
courseThree = courseThree.replace("{ label: 'Under $40', value: 'under40' }", "{ label: 'Under ₹2,000', value: 'under2000' }");
courseThree = courseThree.replace("{ label: '$40 to $60', value: '40to60' }", "{ label: '₹2,000 to ₹3,500', value: '2000to3500' }");
courseThree = courseThree.replace("{ label: 'Above $60', value: 'above60' }", "{ label: 'Above ₹3,500', value: 'above3500' }");
fs.writeFileSync('src/user/data/CourseThree.js', courseThree);
console.log('Updated CourseThree.js');

// 6. CourseDetails.js
let courseDetails = fs.readFileSync('src/user/data/CourseDetails.js', 'utf8');
courseDetails = courseDetails.replace(/price:\s*49\.99,/, 'price: 2499,');
courseDetails = courseDetails.replace(/originalPrice:\s*89\.99,/, 'originalPrice: 5999,');
fs.writeFileSync('src/user/data/CourseDetails.js', courseDetails);
console.log('Updated CourseDetails.js');

// 7. PricingPlan.js
let pricingPlan = fs.readFileSync('src/user/data/PricingPlan.js', 'utf8');
function convertPlanPrice(p) {
  const n = parseFloat(p);
  if (n === 0) return 0;
  if (n <= 15) return 999;
  if (n <= 20) return 1299;
  if (n <= 25) return 1499;
  if (n <= 30) return 1899;
  if (n <= 35) return 2199;
  if (n <= 40) return 2499;
  if (n <= 50) return 2999;
  if (n <= 60) return 3999;
  if (n <= 80) return 5499;
  if (n <= 100) return 6999;
  if (n <= 160) return 11999;
  if (n <= 200) return 14999;
  if (n <= 250) return 17499;
  if (n <= 300) return 21999;
  if (n <= 580) return 39999;
  if (n <= 600) return 44999;
  if (n <= 700) return 49999;
  if (n <= 1000) return 71999;
  if (n <= 1300) return 89999;
  return Math.round(n * 65);
}
pricingPlan = pricingPlan.replace(/monthlyPrice:\s*([0-9.]+),/g, (m, p) => `monthlyPrice: ${convertPlanPrice(p)},`);
pricingPlan = pricingPlan.replace(/annualPrice:\s*([0-9.]+),/g, (m, p) => `annualPrice: ${convertPlanPrice(p)},`);
fs.writeFileSync('src/user/data/PricingPlan.js', pricingPlan);
console.log('Updated PricingPlan.js');

// 8. Shop.js and SingleShop.js
let shop = fs.readFileSync('src/user/data/Shop.js', 'utf8');
function convertShopPrice(p) {
  const n = parseFloat(p);
  if (n <= 22) return 699;
  if (n <= 25) return 799;
  if (n <= 30) return 999;
  if (n <= 35) return 1199;
  if (n <= 40) return 1299;
  if (n <= 45) return 1499;
  if (n <= 65) return 2499;
  if (n <= 80) return 2999;
  if (n <= 120) return 4999;
  if (n <= 150) return 5999;
  return Math.round(n * 50);
}
function convertShopOrig(p) {
  const n = parseFloat(p);
  if (n <= 30) return 999;
  if (n <= 35) return 1199;
  if (n <= 50) return 1699;
  if (n <= 55) return 1799;
  if (n <= 60) return 2299;
  if (n <= 90) return 3499;
  if (n <= 120) return 4499;
  if (n <= 140) return 6499;
  if (n <= 180) return 7999;
  return Math.round(n * 60);
}
shop = shop.replace(/price:\s*([0-9.]+),\s*originalPrice:\s*([0-9.]+)/g, (m, p, op) => {
  return `price: ${convertShopPrice(p)}, originalPrice: ${convertShopOrig(op)}`;
});
shop = shop.replace(/base\.price\s*\+\s*\(cycle\s*\*\s*3\)\.toFixed\(2\)/g, 'base.price + (cycle * 50)');
shop = shop.replace(/base\.originalPrice\s*\+\s*\(cycle\s*\*\s*5\)\.toFixed\(2\)/g, 'base.originalPrice + (cycle * 100)');
fs.writeFileSync('src/user/data/Shop.js', shop);
console.log('Updated Shop.js');

let singleShop = fs.readFileSync('src/user/data/SingleShop.js', 'utf8');
singleShop = singleShop.replace(/price:\s*29\.99,/, 'price: 999,');
singleShop = singleShop.replace(/originalPrice:\s*49\.99,/, 'originalPrice: 1699,');
singleShop = singleShop.replace(/price:\s*([0-9.]+),\s*orig:\s*([0-9.]+)/g, (m, p, op) => {
  return `price: ${convertShopPrice(p)}, orig: ${convertShopOrig(op)}`;
});
singleShop = singleShop.replace(/base\.price\s*\+\s*\(cycle\s*\*\s*2\)\.toFixed\(2\)/g, 'base.price + (cycle * 50)');
singleShop = singleShop.replace(/base\.orig\s*\+\s*\(cycle\s*\*\s*4\)\.toFixed\(2\)/g, 'base.orig + (cycle * 100)');
fs.writeFileSync('src/user/data/SingleShop.js', singleShop);
console.log('Updated SingleShop.js');

// 9. Cart.js
let cart = fs.readFileSync('src/user/data/Cart.js', 'utf8');
cart = cart.replace(/price:\s*49\.99,\s*originalPrice:\s*89\.99/g, 'price: 2499, originalPrice: 5999');
cart = cart.replace(/price:\s*29\.99,\s*originalPrice:\s*49\.99/g, 'price: 999, originalPrice: 1699');
cart = cart.replace(/price:\s*64\.99,\s*originalPrice:\s*89\.99/g, 'price: 2499, originalPrice: 3499');
cart = cart.replace(/price:\s*14\.99,\s*orig:\s*29\.99/g, 'price: 499, orig: 999');
cart = cart.replace(/price:\s*9\.99,\s*orig:\s*19\.99/g, 'price: 299, orig: 599');
cart = cart.replace(/price:\s*29\.99,\s*orig:\s*49\.99/g, 'price: 999, orig: 1699');
cart = cart.replace(/base\.price\s*\+\s*\(iteration\s*\*\s*1\.5\)\.toFixed\(2\)/g, 'base.price + (iteration * 50)');
cart = cart.replace(/base\.orig\s*\+\s*\(iteration\s*\*\s*2\.5\)\.toFixed\(2\)/g, 'base.orig + (iteration * 100)');
fs.writeFileSync('src/user/data/Cart.js', cart);
console.log('Updated Cart.js');

// 10. EnrollNow.js
let enroll = fs.readFileSync('src/user/data/EnrollNow.js', 'utf8');
enroll = enroll.replace(/price:\s*199\.00,/, 'price: 9999,');
enroll = enroll.replace(/originalPrice:\s*399\.00,/, 'originalPrice: 19999,');
fs.writeFileSync('src/user/data/EnrollNow.js', enroll);
console.log('Updated EnrollNow.js');

// 11. Event.js and SingleEvent.js
let event = fs.readFileSync('src/user/data/Event.js', 'utf8');
event = event.replace(/price:\s*'\$15\.00',/g, "price: '₹499',");
event = event.replace(/price:\s*'\$20\.00',/g, "price: '₹699',");
event = event.replace(/price:\s*'\$45\.00',/g, "price: '₹1,499',");
event = event.replace(/price:\s*'\$12\.00',/g, "price: '₹399',");
event = event.replace(/price:\s*'\$25\.00',/g, "price: '₹799',");
event = event.replace(/\$50 in free AWS/g, '₹4,000 in free AWS');
fs.writeFileSync('src/user/data/Event.js', event);
console.log('Updated Event.js');

let singleEvent = fs.readFileSync('src/user/data/SingleEvent.js', 'utf8');
singleEvent = singleEvent.replace(/originalPrice:\s*'\$49\.00',/g, "originalPrice: '₹1,499',");
fs.writeFileSync('src/user/data/SingleEvent.js', singleEvent);
console.log('Updated SingleEvent.js');

// 12. InstructorDetails.js
let instDetails = fs.readFileSync('src/user/data/InstructorDetails.js', 'utf8');
instDetails = instDetails.replace(/price:\s*([0-9.]+),\s*originalPrice:\s*([0-9.]+)/g, (m, pr, opr) => {
  const inrPr = convertUsdToInrCourse(pr);
  const inrOpr = convertUsdToInrOrig(opr, inrPr);
  return `price: ${inrPr}, originalPrice: ${inrOpr}`;
});
instDetails = instDetails.replace(/base\.price\s*\+\s*\(cycle\s*\*\s*2\)\.toFixed\(2\)/g, 'base.price + (cycle * 100)');
instDetails = instDetails.replace(/base\.originalPrice\s*\+\s*\(cycle\s*\*\s*4\)\.toFixed\(2\)/g, 'base.originalPrice + (cycle * 200)');
fs.writeFileSync('src/user/data/InstructorDetails.js', instDetails);
console.log('Updated InstructorDetails.js');

// 13. 404.js
let p404 = fs.readFileSync('src/user/data/404.js', 'utf8');
p404 = p404.replace(/price:\s*'\$([0-9.]+)'/g, (m, usd) => {
  const inr = convertUsdToInrCourse(usd);
  return `price: '₹${inr.toLocaleString('en-IN')}'`;
});
fs.writeFileSync('src/user/data/404.js', p404);
console.log('Updated 404.js');

// 14. About.js
let about = fs.readFileSync('src/user/About.js', 'utf8');
about = about.replace("Continuous Learning Stipend ($2,500/yr)", "Continuous Learning Stipend (₹2,00,000/yr)");
about = about.replace("Home Office Setup Budget ($1,500)", "Home Office Setup Budget (₹1,25,000)");
fs.writeFileSync('src/user/About.js', about);
console.log('Updated About.js');

console.log('ALL DATA FILES UPDATED SUCCESSFULLY!');
