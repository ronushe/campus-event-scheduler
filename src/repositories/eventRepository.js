export class EventRepository {
  list() { return []; }
  findById(id) { return null; }
  insert(event) { return event; }
  update(event) { return event; }
  updateStatus(id, status) {}
  roomHasOverlap(roomID, start, end) { return false; }
  countAll() { return 0; }
  countUpcoming(now) { return 0; }
}
