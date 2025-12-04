export class DashboardController {
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
  }

  showDashboard(req, res) {
    const dashboard = this.dashboardService.getDashboard();
    res.send(dashboard);
  }
}