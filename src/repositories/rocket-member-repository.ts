export abstract class RocketMembersRepository {
  abstract create(name: string, memeberFunction: string) : Promise<void>;
}