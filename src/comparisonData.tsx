export type ComparisonCategory = 'pearl-harbor' | 'sept11'| 'heart-disease' 
  | 'car-crash-fatalities-2020' | 'flu-fatalities-2018' | 'hurricane-katrina'

export type ComparisonData = {
  [key: string]: string | number
}

export interface Comparison {
  id: number,
  category: ComparisonCategory | string,
  data: ComparisonData
}

export const comparisonData: Comparison[] = [
  {
    id: 1,
    category: 'sept11', 
    data: {
      title: 'September 11th Deaths',
      subtitle: 'September 11th',
      deaths: 2974,
      image: '',
      source: 'https://www.britannica.com/event/September-11-attacks'
    }
  } , {
    id: 2,
    category: 'pearl-harbor', 
    data: {
      title: 'Pearl Harbor Deaths',
      subtitle: 'Pearl Harbor Deaths',
      deaths: 2500,
      image: '',
      source: 'https://www.census.gov/history/pdf/pearl-harbor-fact-sheet-1.pdf'

    }
  } , {
    id: 3,
    category: 'heart-disease', 
    data: {
      title: 'Colorado Heart Disease Deaths 2018',
      subtitle: 'Colorado Heart Disease Deaths',
      deaths: 7370,
      image: '',
      source: 'https://www.cdc.gov/nchs/pressroom/sosmap/heart_disease_mortality/heart_disease.htm'
    }
  } , {
    id: 4,
    category: 'car-crash-fatalities-2020', 
    data: {
      title: 'Colorado Car Crash Fatalities 2020',
      subtitle: 'Colorado Car Crash Fatalities',
      deaths: 592,
      image: '',
      source: 'https://www.codot.gov/safety/traffic-safety/crash-data-management/fatal-crash-data'
    }
  } , {
    id: 5,
    category: 'flu-fatalities-2018', 
    data: {
      title: 'Colorado Flu Fatalities 2018',
      subtitle: 'Colorado Flu Fatalities',
      deaths: 568,
      image: '',
      source: 'https://www.cdc.gov/nchs/pressroom/states/colorado/co.htm'
    }
  } , {
    id: 6,
    category: 'hurricane-katrina', 
    data: {
      title: 'Hurricane Katrina Fatalities',
      subtitle: 'Hurricane Katrina Fatalities',
      deaths: 1833,
      image: '',
      source: 'https://www.nhc.noaa.gov/data/tcr/AL122005_Katrina.pdf'
    }
  }
];