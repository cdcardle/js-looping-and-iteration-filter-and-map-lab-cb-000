function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function(driver, amount) {
    return driver.revenue >= amount);
  }
}
