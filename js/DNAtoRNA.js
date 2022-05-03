const DNAtoRNA = (dna) =>
  [...dna].map((item) => (item == "T" ? "U" : item)).join("");
console.dir(DNAtoRNA("TTTT"));
