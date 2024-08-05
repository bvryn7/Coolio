interface Course {
  id: string;
  courseId: string;
  name: string;
  equivalentCourseId: string;
  equivalent: string;
  credits: number;
  online: boolean;
  genEdRequirement: string;
  associatedCollege: string;
}

interface UniversityClasses {
  [universityName: string]: Course[];
}

export const UNIVERSITY_CLASSES: UniversityClasses = {
  'Central Michigan University': [
    {
      id: 'cmu101',
      courseId: 'CMU-PSY101',
      name: 'Introduction to Psychology',
      equivalentCourseId: 'GRCC-PSY201',
      equivalent: 'General Psychology',
      credits: 3,
      online: true,
      genEdRequirement: 'Social Sciences',
      associatedCollege: 'Grand Rapids Community College',
    },
    {
      id: 'cmu102',
      courseId: 'CMU-MTH132',
      name: 'Calculus I',
      equivalentCourseId: 'GRCC-MTH210',
      equivalent: 'Calculus I',
      credits: 4,
      online: true,
      genEdRequirement: 'Mathematics',
      associatedCollege: 'Grand Rapids Community College',
    },
    {
      id: 'cmu103',
      courseId: 'CMU-BIO110',
      name: 'Introduction to Biology',
      equivalentCourseId: 'GRCC-BIO101',
      equivalent: 'General Biology',
      credits: 4,
      online: false,
      genEdRequirement: 'Natural Sciences',
      associatedCollege: 'Grand Rapids Community College',
    },
    {
      id: 'cmu104',
      courseId: 'CMU-HIS201',
      name: 'American History',
      equivalentCourseId: 'GRCC-HIS120',
      equivalent: 'U.S. History',
      credits: 3,
      online: false,
      genEdRequirement: 'Humanities',
      associatedCollege: 'Grand Rapids Community College',
    },
    // Add more classes as needed
  ],
  // Add other university classes here
  // 'Another University': ANOTHER_UNIVERSITY_CLASSES
};
