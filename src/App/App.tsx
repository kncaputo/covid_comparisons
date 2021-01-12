import React, { Component } from 'react';
import USAState from '../USAState/USAState';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import Stat from '../Stat/Stat';
import { fetchAllCurrentUSAData, fetchCurrentStateData } from '../apiCalls'
import { GiCoffin } from 'react-icons/gi';
import { RiVirusFill, RiHospitalFill } from 'react-icons/ri';
import { Route, Switch, NavLink } from 'react-router-dom';
import { comparisonData, ComparisonCategory, Comparison } from '../comparisonData';
import { simplifyAPIDataForAllStates, simplifyAPIDataForSingleState }
import './App.scss';
import ComparisonDetails from '../ComparisonDetails/ComparisonDetails';

interface Props { 
}

interface State {
  allUSAData: Details, 
  selectedUSAState: Details,
  selectedComparison?: Comparison
}

interface Details {
  date?: number,
  state?: string,
  positive: number,
  hospitalizedCurrently: number,
  death: number
}

// enum DropdownCategory {
//   Sept11 = 'sept11',
//   Dday = 'd-day'
  
// }

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      allUSAData: {
        positive: 0,
        death: 0,
        hospitalizedCurrently: 0
      }, 
      selectedUSAState: {
        date: 0, 
        state: '',
        positive: 0,
        hospitalizedCurrently: 0,
        death: 0
      },
      selectedComparison: {
        id: 0,
        category: undefined,
        data: {
          title: '',
          deaths: 0,
          image: ''
        }
      }
    }
  }

  componentDidMount() {
    fetchCurrentStateData()
    .then(data => {
      const simplifiedStateData = simplifyAPIDataForSingleState(data)
      this.setState({ selectedUSAState: simplifiedStateData });
      if (window.location.pathname !== '/') {
        const category: string = window.location.pathname.slice(1)
        this.handleComparisonClick(category)
      } 
    })
    .catch(() => console.error);

    fetchAllCurrentUSAData()
    .then(data => this.simplifyAPIDataForAllStates(data[0]))
    .catch(() => console.error);
  }
 
  // componentDidMount() {
  //   fetchCurrentStateData()
  //   .then(data => {
  //     this.simplifyAPIDataForSingleState(data)
  //     if (window.location.pathname !== '/') {
  //       const category: string = window.location.pathname.slice(1)
  //       this.handleComparisonClick(category)
  //     } 
  //   })
  //   .catch(() => console.error);

  //   fetchAllCurrentUSAData()
  //   .then(data => this.simplifyAPIDataForAllStates(data[0]))
  //   .catch(() => console.error);
  // }

  // simplifyAPIDataForSingleState = (data: { date: number, state: string, 
  //   positive: number, hospitalizedCurrently: number, death: number }): void => { 
  //     const stateData = {
  //     date: data.date,
  //     state: data.state,
  //     positive: data.positive,
  //     hospitalizedCurrently: data.hospitalizedCurrently,
  //     death: data.death
  //   }
  //   this.setState({ selectedUSAState: stateData })
  // }

  // simplifyAPIDataForAllStates = (data: { positive: number, death: number, hospitalizedCurrently: number }): void => {
  //   const USAData = {
  //     positive: data.positive,
  //     death: data.death,
  //     hospitalizedCurrently: data.hospitalizedCurrently
  //   }
  //   this.setState({ allUSAData: USAData })
  // }

  formatDate = (): string => {
    if (typeof this.state.selectedUSAState.date === 'number') {
      let rawDate = this.state.selectedUSAState.date?.toString();
      let year = rawDate.substring(0, 4);
      let month = rawDate.substring(4, 6);
      let day = rawDate.substring(6, 8);

      let formattedDate = `${month}/${day}/${year}`;
      return formattedDate;
    }  
    return '--/--/----';
  }

  handleComparisonClick = (dropdownValue: ComparisonCategory | string): void => {
    let comparisonStats = comparisonData.find(datum => {
      return datum.category === dropdownValue;
    })
    this.setState({ selectedComparison: comparisonStats })
  }

  createRouteEndpoints = (): string => {
    let list = comparisonData.reduce((comparisonCategory, cat) => {
      comparisonCategory += '|' + cat.category
      return comparisonCategory
    }, '')
    return list
  }

  clearSelectedComparison = (): any => {
    this.setState({ selectedComparison: {
      id: 0,
      category: undefined,
      data: {
        title: '',
        deaths: 0,
        image: ''
      }
    }})
  }

  render() {
    return(
      <>
        <header>
          <NavLink 
            to='/' 
            className='header'
            onClick={this.clearSelectedComparison}> 
            <h1 className='title'>C🦠C🦠</h1>
            <h3 className='tagline'>Covid Comparisons</h3>
          </NavLink>
        </header>
        {this.state.selectedComparison?.category &&
          <nav>
            <ComparisonContainer 
              styleId='details-view'
              handleComparisonClick={this.handleComparisonClick}
            />
          </nav>
        }
        <Switch>
          <Route exact path='/'>
            <section>
              <section>
                <h3 className='usa-overview'>
                  <section className='overview-title'>
                    USA Overview: &nbsp; &nbsp;
                  </section>
                  <section className='overview-stats'>
                    <section className='stat-box'><span className='overview-numbers'>{ new Intl.NumberFormat('en-US').format(this.state.allUSAData.positive) }</span> cases &nbsp; &nbsp; &nbsp; &nbsp;</section>
                    <section className='stat-box'><span className='overview-numbers'>{ new Intl.NumberFormat('en-US').format(this.state.allUSAData.death) }</span> deaths &nbsp; &nbsp; &nbsp; &nbsp;</section>
                    <section className='stat-box'><span className='overview-numbers'>{ new Intl.NumberFormat('en-US').format(this.state.allUSAData.hospitalizedCurrently) }</span> current hospitalizations</section>
                  </section>
                </h3>
              </section>
              <main>
                <section>
                  <USAState 
                    date={ this.formatDate() }
                  />
                </section>
                <section className='stats-container'>
                  <Stat 
                    icon={ RiVirusFill }
                    number={ new Intl.NumberFormat('en-US').format(this.state.selectedUSAState.positive) }
                    title={ 'Cases' }
                    details={ `This represents ${((this.state.selectedUSAState.positive / this.state.allUSAData.positive) * 100).toFixed(1)}% of all cases.` }
                  />
                  <Stat 
                    icon={ GiCoffin }
                    number={ new Intl.NumberFormat('en-US').format(this.state.selectedUSAState.death) }
                    title={ 'Deaths' }
                    details={ `This represents ${((this.state.selectedUSAState.death / this.state.allUSAData.death) * 100).toFixed(1)}% of all deaths.` }
                  />
                  <Stat 
                    icon={ RiHospitalFill }
                    number={ new Intl.NumberFormat('en-US').format(this.state.selectedUSAState.hospitalizedCurrently) }
                    title={ 'Current Hospitalizations' }
                    details={ `This represents ${((this.state.selectedUSAState.hospitalizedCurrently / this.state.allUSAData.hospitalizedCurrently) * 100).toFixed(1)}% of all current hospitalizations.` }
                  />
                </section>
              </main>
            </section>
          </Route>
          <Route 
            exact 
            path={`/:dropdownValue(${this.createRouteEndpoints()})`} 
            render={() => {
              return (
                <ComparisonDetails
                selection={ this.state.selectedComparison }
                usaStateDeaths={ this.state.selectedUSAState.death }
                totalUSADeaths={ this.state.allUSAData.death }
                />
              )
            }}
          >
          </Route>
        </Switch>
        {!this.state.selectedComparison?.category &&
          <nav>
            <ComparisonContainer 
              styleId='app-view'
              handleComparisonClick={this.handleComparisonClick}
            />
          </nav>
        }
      </>
    )
  }
}

export default App;

