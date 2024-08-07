interface Course {
  universityName: string;
  associatedCollege: string;
  state: string;
  genEdRequirement: string;
  universityCredits: number;
  collegeCredits: number;
  online: boolean;
  universityCourse: string;
  collegeCourse: string;
  universityId: string;
  collegeId: string;
  isOneCredit: boolean;
  collegePriceInDistrict: number;
  collegePriceInState: number;
  collegePriceOutState: number;
  universityCostInState: number;
  universityCostOutOfState: number;
  universityFullCostInState: number;
  universityFullCostOutOfState: number;
}

interface UniversityClasses {
  [universityName: string]: Course[];
}

export const UNIVERSITY_CLASSES: UniversityClasses = {
  'Central Michigan University': [
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      state: 'MI',
      genEdRequirement: 'Social Sciences',
      universityCredits: 3,
      collegeCredits: 3,
      online: true,
      universityCourse: 'Introduction to Psychology',
      collegeCourse: 'General Psychology',
      universityId: 'PSY 101',
      collegeId: 'PSY 201',
      isOneCredit: false,
      collegePriceInDistrict: 200,
      collegePriceInState: 300,
      collegePriceOutState: 400,
      universityCostInState: 1000,
      universityCostOutOfState: 2000,
      universityFullCostInState: 1200,
      universityFullCostOutOfState: 2200,
    },
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      state: 'MI',
      genEdRequirement: 'Mathematics',
      universityCredits: 4,
      collegeCredits: 4,
      online: true,
      universityCourse: 'Calculus I',
      collegeCourse: 'Calculus I',
      universityId: 'MTH 132',
      collegeId: 'MTH 210',
      isOneCredit: false,
      collegePriceInDistrict: 250,
      collegePriceInState: 350,
      collegePriceOutState: 450,
      universityCostInState: 1100,
      universityCostOutOfState: 2100,
      universityFullCostInState: 7000,
      universityFullCostOutOfState: 7500,
    },
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      state: 'MI',
      genEdRequirement: 'Natural Sciences',
      universityCredits: 4,
      collegeCredits: 4,
      online: false,
      universityCourse: 'Introduction to Biology',
      collegeCourse: 'General Biology',
      universityId: 'BIO 110',
      collegeId: 'BIO 101',
      isOneCredit: false,
      collegePriceInDistrict: 260,
      collegePriceInState: 360,
      collegePriceOutState: 460,
      universityCostInState: 1200,
      universityCostOutOfState: 2200,
      universityFullCostInState: 1400,
      universityFullCostOutOfState: 2400,
    },
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      state: 'MI',
      genEdRequirement: 'Humanities',
      universityCredits: 3,
      collegeCredits: 3,
      online: false,
      universityCourse: 'American History',
      collegeCourse: 'U.S. History',
      universityId: 'HIS 201',
      collegeId: 'HIS 120',
      isOneCredit: false,
      collegePriceInDistrict: 230,
      collegePriceInState: 330,
      collegePriceOutState: 430,
      universityCostInState: 1150,
      universityCostOutOfState: 2150,
      universityFullCostInState: 1350,
      universityFullCostOutOfState: 2350,
    },
    // New 1-credit courses
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      state: 'MI',
      genEdRequirement: 'Fine Arts',
      universityCredits: 1,
      collegeCredits: 1,
      online: true,
      universityCourse: 'Introduction to Music',
      collegeCourse: 'Music Appreciation',
      universityId: 'MUS 101',
      collegeId: 'MUS 101',
      isOneCredit: true,
      collegePriceInDistrict: 100,
      collegePriceInState: 150,
      collegePriceOutState: 200,
      universityCostInState: 500,
      universityCostOutOfState: 1000,
      universityFullCostInState: 7000,
      universityFullCostOutOfState: 8000,
    },
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      state: 'MI',
      genEdRequirement: 'Health',
      universityCredits: 1,
      collegeCredits: 1,
      online: false,
      universityCourse: 'Physical Education',
      collegeCourse: 'Physical Wellness',
      universityId: 'PE 101',
      collegeId: 'PE 101',
      isOneCredit: true,
      collegePriceInDistrict: 120,
      collegePriceInState: 170,
      collegePriceOutState: 220,
      universityCostInState: 550,
      universityCostOutOfState: 1050,
      universityFullCostInState: 670,
      universityFullCostOutOfState: 1170,
    },
  ],
  // Add other university classes here
};
