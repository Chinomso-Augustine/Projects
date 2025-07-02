//This function announces the promotion info on the sales
//Child function 

function PromoHeading(props){
    return(
        <div>
            <h2> {props.myPromoInfo}</h2>
            <h2> {props.myNewMessageInfo}</h2>

        </div>
    )
}


export default PromoHeading; 