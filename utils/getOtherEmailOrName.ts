import { User } from 'firebase/auth'

export function getOtherEmailOrName(users: Array<string>, currentUser: User | undefined): string {
  return users?.filter((user) => user !== currentUser?.email)[0]
}
