export default function ServiceItem({icon, description, className}){
    return(
        <>
            <ul className={className}>
                <li className="icon">{icon}</li>
                <li className="title">{description}</li>
            </ul>        
        </>
    )
}