import React from 'react'
import Template from './Template'
import data from '../senators'

export default class extends React.Component {
    state = { contentToShow: true, senData: [] }

    render(){
        const getRepublicans = () => {
            const RepSen = data.filter(politician => { return politician.party === "Republican" })
            console.log(RepSen)
            this.setState({ senData: RepSen })
            this.setState({ contentToShow: true })
        }

        const getDemocrats = () => {
            const DemSen = data.filter(politician => { return politician.party === "Democrat"})
            console.log(DemSen)
            this.setState({ senData: DemSen })
            this.setState({ contentToShow: true })
        }

        const getUtah = () => {
            const UtSen = data.filter((politician) => { return politician.state === "UT"})
            console.log(UtSen)
            this.setState({ senData: UtSen })
            this.setState({ contentToShow: true })
        }
        
        const getSrSen = () => {
            const SrSen = data.filter((politician) => { return politician.description === "Senior Senator from Utah"})
            console.log(SrSen);
            this.setState({ senData: SrSen })
            this.setState({ contentToShow: true })
        } 

         const showContent = () => {
            return this.state.senData.map(politician => { return (  <Template key={politician.bioguideid} info={politician} /> ) } )  
         }



        return(
            <div>
                <h1>Senators filter homework</h1>
                <hr/>

                <button onClick={getUtah} >UT</button>
                <button onClick={getRepublicans} >Republicans</button>
                <button onClick={getDemocrats} >Democrats</button>
                <button onClick={getSrSen} > Sr Utah Senator</button>

                <hr/>
                {this.state.contentToShow ? React.createElement (showContent) : <div>click button</div>}
                 
            </div>
        )
    }
}

