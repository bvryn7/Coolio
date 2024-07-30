// src/components/StudentProfileMyinfoMainContentStyles.ts

export const buttonStyle = {
    width: '350px',
    fontSize: '18px',
  };
  
  export const selectedButtonStyle = 'bg-green-200 border-green-400 text-green-600';
  
  export const selectStyles = {
    control: (provided: any) => ({ ...provided, borderColor: '#000000' }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#000000' : provided.backgroundColor,
      color: state.isSelected ? '#ffffff' : provided.color,
    }),
  };
  
  export const containerStyle = 'container mx-auto p-8 text-center';
  
  export const headingStyle = 'text-3xl font-semibold mb-4 text-gray-800';
  
  export const subHeadingStyle = 'text-lg mb-8 text-gray-700';
  
  export const questionHeadingStyle = 'text-2xl font-semibold mb-4 text-gray-800';
  