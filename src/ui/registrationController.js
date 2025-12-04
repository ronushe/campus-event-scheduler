export class RegistrationController {
  constructor(registrationService) {
    this.registrationService = registrationService;
  }

  register(req, res) {
    const registration = this.registrationService.register(
      req.params.id,
      req.body.userId
    );
    res.send(registration);
  }
}