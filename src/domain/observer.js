// Observer pattern (notifications)

export class Observer {
    update(eventData, changeType) {
        // Interface method – overridden by concrete observers
    }
}

// The subject that notifies observers when an event changes
export class EventSubject {
    constructor(observers = []) {
        this.observers = observers;
    }

    attach(observer) {
        this.observers.push(observer);
    }

    notify(eventData, changeType) {
        this.observers.forEach(observer =>
            observer.update(eventData, changeType)
        );
    }
}

// Example observer: email notification
export class EmailObserver extends Observer {
    update(eventData, changeType) {
        // Real email logic could go here later
    }
}
