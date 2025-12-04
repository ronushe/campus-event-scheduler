// Registration-specific operations.

export class RegistrationService {
  constructor({ registrationRepository, eventRepository, unitOfWork }) {
    this.registrationRepository = registrationRepository;
    this.eventRepository = eventRepository;
    this.unitOfWork = unitOfWork;
  }

  register(eventId, userId) {
    return this.unitOfWork.transactional(() => {
      // later: ensure event exists, has capacity, then register
      return null;
    });
  }
}