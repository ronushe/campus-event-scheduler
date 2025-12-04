// Thin HTTP layer forwarding to EventService.

export class EventController {
  constructor(eventService) {
    this.eventService = eventService;
  }

  listEvents(req, res) {
    const events = this.eventService.listEvents();
    res.send(events);
  }

  createEvent(req, res) {
    const created = this.eventService.createEvent(req.body);
    res.send(created);
  }

  approveEvent(req, res) {
    const updated = this.eventService.approveEvent(req.params.id);
    res.send(updated);
  }

  publishEvent(req, res) {
    const updated = this.eventService.publishEvent(req.params.id);
    res.send(updated);
  }

  cancelEvent(req, res) {
    const updated = this.eventService.cancelEvent(req.params.id);
    res.send(updated);
  }
}