import React from 'react'

function Stats({passwords, utilities}) {
    console.log(passwords, utilities)
    return (
        <div style={{ paddingTop: '3rem', paddingLeft: '3rem', paddingRight: '3rem'}} class="statsdiv">
            <div class="d-flex flex-lg-row flex-column">
                <div style={{flex : 2, paddingRight : '2rem'}} class="outerstatsdiv">
                    <div class="greetingdiv bg-primary" style={{borderRadius : '15px', height : '7rem', padding : '1rem', textAlign : 'center', paddingTop : '20px'}}>
                        <span class="display-5 greetingfont" style={{fontSize : '2.2rem', color : 'white'}}>Welcome back, {localStorage.getItem('username')}</span>
                    </div>
                </div>
                <div style={{flex : 1.5, paddingRight : '2rem'}} class="outerstatsdiv2">
                    <div class="bg-danger" style={{borderRadius : '15px', height : '7rem', padding : '1rem', textAlign : 'center'}}>
                        <h1 class="display-5"  style={{fontSize : '2.2rem', color : 'white'}}>Passwords</h1>
                        <h4 style={{fontWeight : 'bold', color : 'white'}}>{passwords}</h4>
                    </div>
                </div>
                <div style={{flex : 1.5}} class="outerstatsdiv3">
                    <div class="bg-warning" style={{borderRadius : '15px', height : '7rem', padding : '1rem', textAlign : 'center'}}>
                        <h1 class="display-5"  style={{fontSize : '2.2rem', color : 'white'}}>Utilities</h1>
                        <h4 style={{fontWeight : 'bold', color : 'white'}}>{utilities}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
