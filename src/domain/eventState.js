// State pattern for Event lifecycle.
// Helps avoid long if/else statements for transitions.

import { EventStatus } from "./entities.js";

// Base state with default behavior
export class EventState {
    approve(event) { return event; }
    publish(event) { return event; }
    cancel(event) { return event; }
}

// Draft State
export class DraftState extends EventState {
    approve(event) {
        event.status = EventStatus.PUBLISHED;
        return event;
    }
    cancel(event) {
        event.status = EventStatus.CANCELLED;
        return event;
    }
}

// Published State
export class PublishedState extends EventState {
    cancel(event) {
        event.status = EventStatus.CANCELLED;
        return event;
    }
}

// Cancelled State (no transitions)
export class CancelledState extends EventState { }

// Factory to return correct state object
export class EventStateFactory {
    getState(status) {
        if (status === EventStatus.DRAFT) return new DraftState();
        if (status === EventStatus.PUBLISHED) return new PublishedState();
        if (status === EventStatus.CANCELLED) return new CancelledState();
        return new EventState();
    }
}
