import marsImg from "../assets/mars.png"


export default function Main(props) {
    const { data } = props
    return (
        <div className="img-container">
            <img src={data?.hdurl} alt={data?.title || {marsImg}} className="bg-img" />


        </div>
    )
}
