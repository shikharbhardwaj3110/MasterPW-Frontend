import React, { useState, useEffect } from 'react'


function PasswordCard({ props, handleUpdation}) {


    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }

    const [hidden, setHidden] = useState(1)

    const [del, setDel] = useState('none')

    console.log(props)

    function delHandler() {
        console.log("del handler called")
        if(del=='none')
            setDel('block')
        else
            setDel('none')
    }

    function deletePassword () {
        handleUpdation(props.timestamp)
        setDel('none')
    }

    function hideDiv () {
        setDel('none')
    }

    //console.log(props)
    return (
        <div style={{ minHeight: '8rem', display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
            <div class="cardbg text-light" style={{ flex: 2, paddingLeft: '2rem', paddingTop: '0.2rem', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', paddingBottom: '1rem' }}>
                <br></br>
                <h5 class="display-5" style={{ fontSize: '1.2rem' }}>Utility  :  {props.utilName}</h5>
                <h5 class="display-5" style={{ fontSize: '1.2rem' }}>Username  :  {props.utilUsername}</h5>
                <h5 class="display-5" style={{ fontSize: '1.2rem', display: 'inline' }} >Password  :  {hidden ? '********' : props.utilPassword}</h5><i onClick={() => setHidden(old => !old)} class="fas fa-eye-slash" style={{ display: 'inline', paddingLeft: '1rem', cursor: 'pointer' }}></i>

            </div>
            <div class="bg-light" style={{ flex: 1, borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderLeft: '1px solid #bfbfbf', borderBottom: '1px solid #bfbfbf', borderRight: '1px solid #bfbfbf', borderTop: '1px solid #e8e6e6' }}>
                <div style={{ paddingLeft: '2rem', display: 'flex', paddingRight: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h5 class="display-5" style={{ fontSize: '1rem', marginTop: '0.2rem' }} > {timeConverter(props.timestamp)}</h5>
                    <i class="fas fa-trash-alt text-danger" onClick={delHandler} style={{cursor : 'pointer'}} title="Delete"></i>
                </div>
            </div>
            <div style={{borderBottom : '2px solid #bfbfbf', textAlign : 'center', paddingTop : '0.5rem', paddingBottom : '0.5rem', display : del}}>
                <span>Are you sure ? </span><button type="button" class="btn-sm btn-danger" style={{marginLeft : '0.5rem'}} onClick={deletePassword}>Yes</button><button class="btn-sm btn-warning" style={{marginLeft : '0.5rem'}} onClick={hideDiv}>No</button>
            </div>
        </div>
    )
}


function Passwords({ props }) {
    //console.log(props)

    const allPasswords = props

    const [password, setPassword] = useState([])
    //setPasswords()
    useEffect(() => {
        if (allPasswords.length > 0) {
            const initialState = allPasswords.map(obj => obj)
            setPassword(initialState)
        }
        //setPasswordList(props)
    }, [allPasswords])

    function handleUpdation(timestamp) {
        console.log('handle updation called')
        setPassword(password.filter(item => item.timestamp !== timestamp))
    }

    console.log("Passwords : ", password)

    function test() {
        console.log("Test called !")
    }

    return (
        <div style={{ paddingLeft: '3rem', paddingRight: '3rem', paddingTop: '2rem' }} class="tablediv">
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '15px', marginBottom: '2rem' }}>
                <h5 style={{ paddingLeft: '1rem', paddingTop: '1rem', fontSize: '2rem', color: '#220b57', fontWeight: 'bold' }} class="display-5">All Passwords</h5>
                <div class="mx-3" style={{ border: '1px solid #cfcfcf', minHeight: '3rem', display: 'flex', alignItems: 'center', marginTop: '1rem', justifyContent: 'space-between', flexWrap: 'wrap' }} >
                    <div style={{ border: '1px solid #e8e6e6', marginLeft: '1rem', paddingLeft: '0.5rem', borderRadius: '5px' }} class="mleftadjust">
                        <i class="fas fa-search"></i>
                        <input placeholder="Search" style={{ border: 'none', paddingLeft: '0.6rem', outline: 'none' }} class="maininput"></input>
                    </div>
                    <div style={{ marginRight: '1rem' }} class="mrightadjust">
                        <div style={{ width: '2rem', textAlign: 'center', borderRadius: '10px' }} class="bg-primary">
                            <i class="fas fa-sort bg-primary text-light"></i>
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft: '1rem', paddingTop: '2rem', paddingRight: '1rem' , paddingBottom : '2rem'}}>
                    <div >

                        {
                            password.map((item, index) => {
                                return (
                                    <PasswordCard props={item} handleUpdation={handleUpdation}></PasswordCard>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Passwords
