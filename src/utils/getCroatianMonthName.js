export const getCroatianMonthName = (hungarianName) => {
  switch (hungarianName) {
    case 'január':
      return 'siječnja';
    case 'február':
      return 'veljače';
    case 'március':
      return 'ožujka';
    case 'április':
      return 'travnja';
    case 'május':
      return 'svibnja';
    case 'június':
      return 'lipnja';
    case 'július':
      return 'srpnja';
    case 'augusztus':
      return 'kolovoza';
    case 'szeptember':
      return 'rujna';
    case 'október':
      return 'listopada';
    case 'november':
      return 'studenoga';
    case 'december':
      return 'prosinca';
    default:
      return '';
  }
};
