import React from 'react';
import Childcomponent from './Childcomponent';
import Addcomponent from './Addcomponent';

class Mycomponent extends React.Component {

    state = {
        name: '',
        LastName: '',
        address: '',
        arrJobs: [
            { id: 'job1', title: 'dev', salary: '400' },
            { id: 'job2', title: 'fresher', salary: '5300' },
            { id: 'job3', title: 'leader', salary: '5200' }
        ]
    }
    addNewJob = (job) => {
        console.log('check ',job)
        // this.setState ({
        //     arrJobs: this.state.arrJobs.push(job)
        // })
        let currentjob = this.state.arrJobs;
        currentjob.push(job)
        this.setState({ 
            arrJobs: currentjob
        })
           
        
        // this.setState ({
        //     arrJobs: [...this.state.arrJobs, job]
        // })
    }

    handleonChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    Deletejob = (job) => {
        let currentjob = this.state.arrJobs;
        currentjob = currentjob.filter(item =>item.id !== job.id);
        this.setState({
            arrJobs:currentjob
        })

    }
   
    render() {
        return (
            <>
                <Addcomponent 
                    addNewJob = {this.addNewJob}
                    />
                <div>
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleonChangeName(event)} />
                    My Name is : {this.state['name']}

                </div>
                <Childcomponent
                    // name={this.state.name}
                    // age={'23'}
                    // address={this.state.address}
                    arrJobs={this.state.arrJobs}
                    Deletejob={this.Deletejob}
                />

            </>
        )

    }

}



export default Mycomponent;