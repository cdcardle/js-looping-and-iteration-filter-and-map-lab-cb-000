function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function(driver) {
    return driver.revenue >= amount);
  }
}
