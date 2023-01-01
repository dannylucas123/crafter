import alchemy from "../constants/alchemy";
import professions from "../constants/professions";

const specializations = {
  alchemy,
};

export const profile = [
  '01C1N1z30N2z0N3z0N4z25Nz13C2N1z0',
  '13C1N1z20',
  '04C3N1z10N2z10'
];

const testProfile = 'WycwMUMxTjF6MzBOMnowTjN6ME40ejI1TnoxMycsJzEzQzFOMXoyMCcsJzA0QzNOMXoxME4yejEwJ10===';

export const decodeProfile = (base64) => atob(base64);

export const encodeProfile = (str) => btoa(str);

// First two digits is the profession id. Example: '01C1N1z30N2z0N3z0N4z25Nz13C2N1z0'
// 01 = Alchemy
// 02 = Blacksmithing
const getProfessionName = str => professions[str.substring(0, 2)];
// Professions are then split up by categories. C1, C2, C3 and sometimes C4 map to a specific category of specilization
const getSpecilizations = (str, profession) => {
  const exists = specializations[profession.toLowerCase()];

  if (!exists) return null;
  // We then split up the string to get the category + all nodes
  const specs = str
    .split(/(C)/)
    .reduce((acc, cur) => {
      if (cur === '' || cur === 'C') return acc;
      const full = `C${cur}`;
      acc.push({
        specialization: exists[full.substring(0, 2)],
        nodes: full.substring(2, full.length),
      });
      return acc;
    }, [])
  return specs;
}

export const constructProfile = (profile) => profile
  .map((profession) => {
    const name = getProfessionName(profession);
    if (!name) return null;
    const specs = getSpecilizations(profession.substring(2, profession.length), name);

    // Parse nodes in specialization
    return {
      name,
      specialization: specs,
    };
  })
  .filter((profession) => profession !== null);
