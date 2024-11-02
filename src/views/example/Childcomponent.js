import React from 'react';

class Childcomponent extends React.Component {

    // state = {
    //     name: '',
    //     LastName: ''
    // }

    // handleonChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    state = {
        showjods: false
    }

    handleShowhide = () => {
        this.setState({
            showjods: !this.state.showjods
        })
    }
    handleDeletejobs = (job) => {
        console.log("check",job)
       this.props.Deletejob(job)
    }
    render() {
        //   console.log('check: ', this.props)
        let { arrJobs } = this.props;
        let { showjods } = this.state;
        
        return (
           
            <>
                {showjods === false &&
                    <div>
                        <button onClick={() => this.handleShowhide()}>show</button>
                    </div>
                }
                {showjods &&
                    <>
                        <div className='job-list'>
                            {
                                
                               arrJobs.map((item, index) => {
                                    if (item.salary >= 0) {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary} <button onClick={() => this.handleDeletejobs(item)}>Delete</button>
                                            </div>

                                        )
                                    }
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowhide()}>hide</button>
                        </div>
                    </>

                }

            </>
        )
    }
}
export default Childcomponent;