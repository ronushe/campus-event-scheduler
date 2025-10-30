const Roles = {
    ORGANIZER: "Organizer",
    ATTENDEE: "Attendee",
    ADMIN: "Admin",
};

const EventStatus = {
    DRAFT: "Draft",
    PUBLISHED: "Published",
    CANCELLED: "Cancelled",
};

const EventVisibility = {
    PUBLIC: "Public",
    PRIVATE: "Private",
};

const ActivityStatus = {
    SCHEDULED: "Scheduled",
    IN_PROGRESS: "inProgress",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
};

const RegistrationStatus = {
    REGISTERED: "Registered",
    WAITLISTED: "Waitlisted",
    CANCELLED: "Cancelled",
    CHECKED_IN: "CheckedIn",
};

class User {
    constructor(userID, username, email, passwordHash, role, lastLogin) {
        this.userID = userID;
        this.username = username;
        this.email = email;
        this.passwordHash = passwordHash;
        this.role = role;
        this.lastLogin = lastLogin;
    }

    register() { }
    login() { }
    logout() { }
}

class Room {
    constructor(roomID, name, capacity) {
        this.roomID = roomID;
        this.name = name;
        this.capacity = capacity;
    }
}

class Event {
    constructor(
        eventID,
        name,
        location,
        description,
        startDateTime,
        endDateTime,
        capacity,
        visibility,
        status,
        createdBy
    ) {
        this.eventID = eventID;
        this.name = name;
        this.location = location;
        this.description = description;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.capacity = capacity;
        this.visibility = visibility;
        this.status = status;
        this.createdBy = createdBy;
    }

    addEvent() { }
    editEvent() { }
    cancelEvent() { }
}

class Activity {
    constructor(activityID, title, host, startDateTime, endDateTime, status) {
        this.activityID = activityID;
        this.title = title;
        this.host = host;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.status = status;
    }

    addActivity() { }
    editActivity() { }
    cancelActivity() { }
}

class Registration {
    constructor(registrationID, status, registeredAt) {
        this.registrationID = registrationID;
        this.status = status;
        this.registeredAt = registeredAt;
    }
}

class EventDashboard {
    constructor(totalEvents, upcomingEvents, attendeesCount) {
        this.totalEvents = totalEvents;
        this.upcomingEvents = upcomingEvents;
        this.attendeesCount = attendeesCount;
    }

    calculateProgress() { }
    displayStats() { }
}

export {
    User,
    Room,
    Event,
    Activity,
    Registration,
    EventDashboard,
    Roles,
    EventStatus,
    EventVisibility,
    ActivityStatus,
    RegistrationStatus,
};
