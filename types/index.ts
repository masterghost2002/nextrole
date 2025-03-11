export type CONFIG<T> = Readonly<Partial<T>>;
export enum COMPANY_VERIFCATION_STATUS {
  VERIFIED = 'VERIFIED',
  PENDING = 'PENDING',
  DECLINED = 'DECLINED'
}
export enum USER_ROLES {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR'
}
