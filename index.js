function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(function(driver) {
    driver.revenue >= amount);
  }
}
