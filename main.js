// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// pAequor factory
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate: function () {
      const mutatedDna = this.dna.map((base) => {
        let newBase = returnRandBase();
        while (newBase === base) {
          newBase = returnRandBase();
        }
        return newBase;
      });

      return {
        specimenNum: this.specimenNum,
        originalDna: this.dna,
        mutatedDna: mutatedDna,
      };
    },
  };
};

const organism = pAequorFactory(1, mockUpStrand());
console.log("Specimen Number:", organism.specimenNum);
console.log("Original DNA:", organism.dna);
console.log("Mutated DNA:", organism.mutate().mutatedDna);










