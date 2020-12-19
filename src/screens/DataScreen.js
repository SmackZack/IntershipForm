import { MDBAlert, MDBContainer } from 'mdbreact'
import React from 'react'
import DataTable from '../components/DataTable'
import Download from '../components/Download'

const DataScreen = () => {
    const exist = localStorage.getItem('data')
    return (
        <MDBContainer className="pt-3">
            {
                exist ? <><DataTable />
                    <div className="text-right">
                        <Download />
                    </div></>
                    :<>
                     <div className="display-4 mb-4">Such a Empty.......</div>
                    <MDBAlert color="primary" >
                        Go to the form screen to add Some data Here
                    </MDBAlert>

                    </>
            }
        </MDBContainer>
    )
}

export default DataScreen
