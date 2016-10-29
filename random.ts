export function randomBool(): boolean {
  return !!rand(2);
}

export function rand(n: number): number {
  return Math.floor(Math.random() * n)
}

export function choose(arr: Array<any>) {
  return arr[rand(arr.length)];
}
