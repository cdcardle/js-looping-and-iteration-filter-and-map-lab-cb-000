function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter((driver) => driver.revenue > revenue.strip(0))
}