//Fibonacci Sequence

function fibseq(n: number): number[] {
  let arr = [0, 1];
  if (n < 2) return arr.slice(0, n + 1);
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

//Recursive Fibonacci Sequence

function fib(n: number): number {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

function fibsequence(n: number): number[] {
    const sequence: number[] = [];
    for (let i = 0; i < n; i++) {
        sequence.push(fib(i));
    }
    return sequence;
}

console.log(fibsequence(8));
