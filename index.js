function driversWithRevenueOver(drivers, amount) {
  return drivers.filter((driver) => driver.revenue > amount);
}

function driverNamesWithRevenueOver(drivers, amount) {
  return driversWithRevenueOver(drivers, amount).map(driver => driver.name);
}
