import React from 'react'

function Wish (){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize:30
    }

if(hours < 12){
    timeOfDay = "morning"
    styles.color = "green"
    styles.textAlign = "center"


}else if(hours >= 12 && hours <= 17){
    timeOfDay = "afternoon"
    styles.color = "blue"
    styles.textAlign = "center"

}else{
    timeOfDay = "night"
    styles.color = "red"
    styles.textAlign = "center"
    
}

return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
)

}
export default Wish