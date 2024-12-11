import Button from "../button/Button";
function MoreAboutUs() {
    return (
        <>
            <div className="more-about-us-section">
                <div id="first-div">
                    <div id="third-div">
                        <p>
                            We believe travel is worth taking time over; that a
                            great holiday means getting under the skin of a
                            place, meeting its people, indulging in its culture
                            and understanding its history and customs.
                        </p>

                        <Button
                            onClick={() => {}}
                            children={"Know more about us"}
                        ></Button>
                    </div>
                </div>
                <div id="second-div">
                    <img
                        src="https://images.pexels.com/photos/17239255/pexels-photo-17239255/free-photo-of-hombre-mujer-deporte-sonriente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}

export default MoreAboutUs;
