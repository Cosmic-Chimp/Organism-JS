// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dnaArr) => {
  specimenNum,
    dnaArr,
    function mutate() {
      const randIdx = Math.floor(Math.random() * this.dnaArr.length);
      let newBase = returnRandBase();
      while (this.dnaArr[randIdx] === newBase) {
        newBase = returnRandBase();
      }
      this.dnaArr[randIdx] = newBase;
      return this.dnaArr;
    },
    function compareDNA(organism) {
      let commonCount = 0;
      for (i = 0; i < this.dnaArr.length; i++) {
        if (this.dnaArr[i] === organism.dnaArr[i]) {
          commonCount++;
        }
      }
      let commonPCT = Math.floor((commonCount / this.dnaArr.length) * 100);
      return `Result: Specimen ${specimenNum} and Specimen ${organism.specimenNum} have ${commonPCT}% DNA in common`;
    },
    function wilLikelySurvive() {
      let count = 0;
      for (i = 0; i < this.dnaArr.length; i++) {
        if (this.dnaArr[i] === "C" || this.dnaArr[i] === "G") {
          count++;
        }
      }
      let countPCT = Math.floor((count / this.dnaArr.length) * 100);
      if (countPCT >= 60) {
        return true;
      } else {
        return false;
      }
    };
};
