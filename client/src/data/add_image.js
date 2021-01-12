import Designer from '../assets/designer.jpeg'
import FullStack from '../assets/fullstack.jpeg'
import TeamLead from '../assets/teamlead.jpeg'
import Error from '../assets/error.PNG'

const addImage = (source) => {
    source.forEach(element => {
        if (element.picture == false){
            element.picture = Error
        }
        if (element.picture === 1){
            element.picture = Designer
        }
        if (element.picture === 2){
            element.picture = FullStack
        }
        if (element.picture === 3){
            element.picture = TeamLead
        }
    });

    return source;

}
export default addImage;