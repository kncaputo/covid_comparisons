interface Object {
  [index: number]: string;
}

interface ComparisonData {
  worldWar: ComparisonDetails
}

interface ComparisonDetails {
    title: string,
    deaths: number,
    image: string
}

export const comparisonData: Object = {
  worldWar: {
    title: '',
    deaths: 0,
    image: ''
  }
}