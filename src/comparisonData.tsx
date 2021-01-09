export type ComparisonCategory = 'default' | 'worldWar' | '911'| 'shark-attacks' 
  | 'car-crash-fatalities-2020' | 'flu-fatalities-2020' | 'hurricane-katrina'

export type ComparisonData = {
  [key: string]: string | number
}

export interface Comparison {
  category: ComparisonCategory,
  data: ComparisonData
}

export const comparisonData: Comparison[] = [
  {
    category: 'default', 
    data: {
      title: '',
      deaths: 0
    }
  },
  {
    category: '911', 
    data: {
      title: '9/11 Deaths',
      deaths: 100
    }
  } , {
    category: 'worldWar', 
    data: {
      title: 'World War II Deaths',
      deaths: 100
    }
  } , {
    category: 'shark-attacks', 
    data: {
      title: 'Shark Attacks Deaths',
      deaths: 100
    }
  } , {
    category: 'car-crash-fatalities-2020', 
    data: {
      title: 'Car Crash Fatalities 2020',
      deaths: 100
    }
  } , {
    category: 'flu-fatalities-2020', 
    data: {
      title: 'Flu Fatalities 2020',
      deaths: 100
    }
  } , {
    category: 'hurricane-katrina', 
    data: {
      title: 'Hurricane Katrina Fatalities',
      deaths: 100
    }
  }
];