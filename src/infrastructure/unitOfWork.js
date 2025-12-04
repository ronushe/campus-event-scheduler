export class UnitOfWork {
  transactional(work) {
    const result = work();
    return result;
  }
}
