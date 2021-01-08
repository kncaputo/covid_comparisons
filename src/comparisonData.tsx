export type ComparisonCategory = 'worldWar' | 'nextItem'

export type ComparisonData = {
  [key: string]: string | number
}

interface Comparison {
  category: ComparisonCategory,
  data: ComparisonData
}

export const comparisonData: Comparison[] = [{
  category: 'worldWar', 
  data: {
    title: 'hello',
    deaths: 100
  }
}]