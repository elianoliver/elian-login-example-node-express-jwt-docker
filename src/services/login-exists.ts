export default function loginExists(username: string, password: string): boolean {
  return username === 'admin' && password === 'admin'
}