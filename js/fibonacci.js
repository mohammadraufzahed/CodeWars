const results = {};
function fibonacci(n) {
  if (n == 0 || n == 1) return n;
  const flags = `${n - 1}-${n - 2}`;
  if (results[flags]) return results[flags];
  else {
    results[flags] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return results[flags];
}

console.dir(fibonacci(60));
