const solution = (strs) => {
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    result.push(`${strs[i]}${strs[++i] ? strs[i] : "_"}`);
  }
  return result;
};

console.dir(solution("abcdefghij1"));
