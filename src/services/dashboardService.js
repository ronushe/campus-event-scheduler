// Dashboard calculations aggregated from repositories.

import { EventDashboard } from "../domain/entities.js";

export class DashboardService {
  constructor({ eventRepository, registrationRepository }) {
    this.eventRepository = eventRepository;
    this.registrationRepository = registrationRepository;
  }

  getDashboard() {
    const total = this.eventRepository.countAll();
    const upcoming = this.eventRepository.countUpcoming(new Date());
    const attendees = this.registrationRepository.countAllAttendees();

    return new EventDashboard(total, upcoming, attendees);
  }
}