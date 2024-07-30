export default function SideBar(props) {
    const { handleToggleModal, data} = props
    return (
        <div className="sidebar">
            <div className="bg-overlay" onClick={handleToggleModal}></div>
            <div className="sidebar-content">

                <h2>{data?.title}</h2>
                <div className="description-container">
                    <p className="sidebar-description-title">{data?.date}</p>
                    <p>{data?.explanation}
                    </p>
                </div>
                <button onClick={handleToggleModal}><i class="fa-solid fa-right-long"></i></button>


            </div>
        </div>
    )
}
