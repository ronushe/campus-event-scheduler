// Strategy pattern for room conflict checking

export class ConflictPolicy {
    hasConflict(event, eventRepository) {
        return false; // default: no conflict
    }
}

export class FirstComePolicy extends ConflictPolicy {
    hasConflict(event, eventRepository) {
        // Later: eventRepository.roomHasOverlap(...)
        return false;
    }
}
