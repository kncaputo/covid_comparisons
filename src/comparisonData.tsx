export type ComparisonCategory = 'default' | 'd-day' | '911'| 'shark-attacks' 
  | 'car-crash-fatalities-2020' | 'flu-fatalities-2020' | 'hurricane-katrina'

export type ComparisonData = {
  [key: string]: string | number
}

export interface Comparison {
  id: number,
  category: ComparisonCategory,
  data: ComparisonData
}

export const comparisonData: Comparison[] = [
  { 
    id: 1,
    category: 'default', 
    data: {
      title: '',
      deaths: 0,
      image: ''
    }
  },
  {
    id: 2,
    category: '911', 
    data: {
      title: '9/11 Deaths',
      deaths: 2977,
      image: ''
    }
  } , {
    id: 3,
    category: 'd-day', 
    data: {
      title: 'D-Day Deaths (World War II)',
      deaths: 2500,
      image: ''
    }
  } , {
    id: 4,
    category: 'shark-attacks', 
    data: {
      title: 'Shark Attacks Deaths',
      deaths: 41,
      image: ''
    }
  } , {
    id: 5,
    category: 'car-crash-fatalities-2020', 
    data: {
      title: 'Car Crash Fatalities 2020',
      deaths: 16650,
      image: ''
    }
  } , {
    id: 6,
    category: 'flu-fatalities-2020', 
    data: {
      title: 'Flu Fatalities 2020',
      deaths: 34200,
      image: ''
    }
  } , {
    id: 7,
    category: 'hurricane-katrina', 
    data: {
      title: 'Hurricane Katrina Fatalities',
      deaths: 1833,
      image: ''
    }
  }
];