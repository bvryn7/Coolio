interface Course {
  universityName: string;
  associatedCollege: string;
  genEdRequirement: string;
  universityCredits: number;
  collegeCredits: number;
  online: boolean;
  universityCourse: string;
  collegeCourse: string;
  universityId: string; // Updated to contain only course code
  collegeId: string;    // Updated to contain only course code
  isOneCredit: boolean;
  collegePriceInDistrict: number;
  collegePriceInState: number;
  collegePriceOutState: number;
  universityCostInState: number;
  universityCostOutOfState: number;
  universityCostInternational: number;
  universityFullCostInState: number;
  universityFullCostOutState: number;
  universityFullCostInternational: number;
}

interface UniversityClasses {
  [universityName: string]: Course[];
}

export const UNIVERSITY_CLASSES: UniversityClasses = {
  'Central Michigan University': [
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      genEdRequirement: 'Social Sciences',
      universityCredits: 3,
      collegeCredits: 3,
      online: true,
      universityCourse: 'Introduction to Psychology',
      collegeCourse: 'General Psychology',
      universityId: 'PSY 101', // Updated to course code only
      collegeId: 'PSY 201',    // Updated to course code only
      isOneCredit: false,
      collegePriceInDistrict: 200,
      collegePriceInState: 300,
      collegePriceOutState: 400,
      universityCostInState: 1000,
      universityCostOutOfState: 2000,
      universityCostInternational: 3000,
      universityFullCostInState: 1200,
      universityFullCostOutState: 2200,
      universityFullCostInternational: 3200,
    },
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      genEdRequirement: 'Mathematics',
      universityCredits: 4,
      collegeCredits: 4,
      online: true,
      universityCourse: 'Calculus I',
      collegeCourse: 'Calculus I',
      universityId: 'MTH 132', // Updated to course code only
      collegeId: 'MTH 210',    // Updated to course code only
      isOneCredit: false,
      collegePriceInDistrict: 250,
      collegePriceInState: 350,
      collegePriceOutState: 450,
      universityCostInState: 1100,
      universityCostOutOfState: 2100,
      universityCostInternational: 3100,
      universityFullCostInState: 1300,
      universityFullCostOutState: 2300,
      universityFullCostInternational: 3300,
    },
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      genEdRequirement: 'Natural Sciences',
      universityCredits: 4,
      collegeCredits: 4,
      online: false,
      universityCourse: 'Introduction to Biology',
      collegeCourse: 'General Biology',
      universityId: 'BIO 110', // Updated to course code only
      collegeId: 'BIO 101',    // Updated to course code only
      isOneCredit: false,
      collegePriceInDistrict: 260,
      collegePriceInState: 360,
      collegePriceOutState: 460,
      universityCostInState: 1200,
      universityCostOutOfState: 2200,
      universityCostInternational: 3200,
      universityFullCostInState: 1400,
      universityFullCostOutState: 2400,
      universityFullCostInternational: 3400,
    },
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      genEdRequirement: 'Humanities',
      universityCredits: 3,
      collegeCredits: 3,
      online: false,
      universityCourse: 'American History',
      collegeCourse: 'U.S. History',
      universityId: 'HIS 201', // Updated to course code only
      collegeId: 'HIS 120',    // Updated to course code only
      isOneCredit: false,
      collegePriceInDistrict: 230,
      collegePriceInState: 330,
      collegePriceOutState: 430,
      universityCostInState: 1150,
      universityCostOutOfState: 2150,
      universityCostInternational: 3150,
      universityFullCostInState: 1350,
      universityFullCostOutState: 2350,
      universityFullCostInternational: 3350,
    },
    // New 1-credit courses
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      genEdRequirement: 'Fine Arts',
      universityCredits: 1,
      collegeCredits: 1,
      online: true,
      universityCourse: 'Introduction to Music',
      collegeCourse: 'Music Appreciation',
      universityId: 'MUS 101', // Updated to course code only
      collegeId: 'MUS 101',    // Updated to course code only
      isOneCredit: true,
      collegePriceInDistrict: 100,
      collegePriceInState: 150,
      collegePriceOutState: 200,
      universityCostInState: 500,
      universityCostOutOfState: 1000,
      universityCostInternational: 1500,
      universityFullCostInState: 600,
      universityFullCostOutState: 1100,
      universityFullCostInternational: 1600,
    },
    {
      universityName: 'Central Michigan University',
      associatedCollege: 'Grand Rapids Community College',
      genEdRequirement: 'Health',
      universityCredits: 1,
      collegeCredits: 1,
      online: false,
      universityCourse: 'Physical Education',
      collegeCourse: 'Physical Wellness',
      universityId: 'PE 101', // Updated to course code only
      collegeId: 'PE 101',    // Updated to course code only
      isOneCredit: true,
      collegePriceInDistrict: 120,
      collegePriceInState: 170,
      collegePriceOutState: 220,
      universityCostInState: 550,
      universityCostOutOfState: 1050,
      universityCostInternational: 1550,
      universityFullCostInState: 670,
      universityFullCostOutState: 1170,
      universityFullCostInternational: 1670,
    },
  ],
  // Add other university classes here
  // 'Another University': ANOTHER_UNIVERSITY_CLASSES
};
