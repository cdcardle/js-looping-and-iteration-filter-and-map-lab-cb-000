function driversWithRevenueOver(drivers, amount) {
  return drivers.filter((driver) => driver.revenue >= amount.slice(0))
}
