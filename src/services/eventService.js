// Event use cases (application service + GRASP Controller).

import { EventStatus } from "../domain/entities.js";
import { EventStateFactory } from "../domain/eventState.js";

export class EventService {
  constructor({
    eventRepository,
    roomRepository,
    registrationRepository,
    conflictPolicy,
    unitOfWork,
    eventSubject,
  }) {
    this.eventRepository = eventRepository;
    this.roomRepository = roomRepository;
    this.registrationRepository = registrationRepository;
    this.conflictPolicy = conflictPolicy;
    this.unitOfWork = unitOfWork;
    this.eventSubject = eventSubject;
    this.stateFactory = new EventStateFactory();
  }

  createEvent(eventDto) {
    return this.unitOfWork.transactional(() => {
      // later: validate, map DTO to Event, persist, notify observers
      return null;
    });
  }

  approveEvent(eventId) {
    return this.unitOfWork.transactional(() => {
      // later: load event, change state to approved/published, save
      return null;
    });
  }

  publishEvent(eventId) {
    return this.unitOfWork.transactional(() => {
      // later: use EventStateFactory to call publish()
      return null;
    });
  }

  cancelEvent(eventId) {
    return this.unitOfWork.transactional(() => {
      // later: change state to cancelled, notify observers
      return null;
    });
  }

  registerForEvent(eventId, userId) {
    return this.unitOfWork.transactional(() => {
      // later: capacity check + create Registration
      return null;
    });
  }

  getEvent(eventId) {
    return this.eventRepository.findById(eventId);
  }

  listEvents() {
    return this.eventRepository.list();
  }

  isRegistrable(event) {
    return (
      event.status === EventStatus.PUBLISHED ||
      event.status === EventStatus.DRAFT
    );
  }
}