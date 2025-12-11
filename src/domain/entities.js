// Enumerations
export const Roles = {
  ORGANIZER: "Organizer",
  ATTENDEE: "Attendee",
  ADMIN: "Admin",
};

export const EventStatus = {
  DRAFT: "Draft",
  PUBLISHED: "Published",
  CANCELLED: "Cancelled",
};

export const EventVisibility = {
  PUBLIC: "Public",
  PRIVATE: "Private",
};

export const RegistrationStatus = {
  REGISTERED: "Registered",
  WAITLISTED: "Waitlisted",
  CANCELLED: "Cancelled",
  CHECKED_IN: "CheckedIn",
};

export const ActivityStatus = {
  SCHEDULED: "Scheduled",
  IN_PROGRESS: "inProgress",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
};


// USER ENTITY
export class User {
  constructor(id, username, email, passwordHash, role, lastLogin) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.passwordHash = passwordHash;
    this.role = role;
    this.lastLogin = lastLogin;
  }

  isAdmin() { return this.role === Roles.ADMIN; }
  isOrganizer() { return this.role === Roles.ORGANIZER; }
  isAttendee() { return this.role === Roles.ATTENDEE; }

  canCreateEvent() { return this.isOrganizer() || this.isAdmin(); }
  canApproveEvent() { return this.isAdmin(); }
}



// ROOM ENTITY
export class Room {
  constructor(roomID, name, capacity) {
    this.roomID = roomID;
    this.name = name;
    this.capacity = capacity;
  }

  isAvailable(start, end) {
    // This is implemented in the repository, not here.
    return true;
  }
}



// EVENT ENTITY
export class Event {
  constructor(id, name, location, description, startDate, endDate, capacity, visibility, status, createdBy) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.capacity = capacity;
    this.visibility = visibility;
    this.status = status;
    this.createdBy = createdBy;

    this.activities = [];
  }

  addActivity(activity) { this.activities.push(activity); }
  removeActivity(activity) { this.activities = this.activities.filter(a => a !== activity); }

  isFuture() { return this.startDate > new Date(); }
  hasCapacity(currentCount) { return currentCount < this.capacity; }
}



// ACTIVITY ENTITY
export class Activity {
  constructor(id, title, host, startDate, endDate, status) {
    this.id = id;
    this.title = title;
    this.host = host;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
  }

  start() { this.status = ActivityStatus.IN_PROGRESS; }
  complete() { this.status = ActivityStatus.COMPLETED; }
  cancel() { this.status = ActivityStatus.CANCELLED; }
}




// REGISTRATION ENTITY
export class Registration {
  constructor(id, status, registeredAt) {
    this.id = id;
    this.status = status;
    this.registeredAt = registeredAt;
  }

  confirm() { this.status = RegistrationStatus.REGISTERED; }
  cancel() { this.status = RegistrationStatus.CANCELLED; }
  checkIn() { this.status = RegistrationStatus.CHECKED_IN; }
}



// DASHBOARD ENTITY
export class EventDashboard {
  constructor(totalEvents, upcomingEvents, attendeesCount) {
    this.totalEvents = totalEvents;
    this.upcomingEvents = upcomingEvents;
    this.attendeesCount = attendeesCount;
  }

  calculateProgress() {
    if (this.totalEvents === 0) return 0;
    return (this.upcomingEvents / this.totalEvents) * 100;
  }

  printSummary() {
    return `Total: ${this.totalEvents}, Upcoming: ${this.upcomingEvents}, Attendees: ${this.attendeesCount}`;
  }
}
