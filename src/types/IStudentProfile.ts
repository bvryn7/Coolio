export interface PricingPreferences {
  discount: string;
}

export interface IStudentProfile {
  homeState: string;
  pricingPreferences: PricingPreferences;
  university: string;
}
