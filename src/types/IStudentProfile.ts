export interface PricingPreferences {
  discount: string;
}

export interface IStudentProfile {
  homeState: string;
  pricingPreferences: PricingPreferences;
  university: string; // Add this line to include the university property
}
